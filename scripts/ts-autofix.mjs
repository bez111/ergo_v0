#!/usr/bin/env node
/**
 * Apply TypeScript code fixes (like VS Code quick-fixes) in bulk.
 *
 * Currently targets:
 * - TS6133 unused locals/params
 * - TS4111 noPropertyAccessFromIndexSignature (convert to element access)
 *
 * This helps keep strict tsconfig flags passing without hand-editing hundreds
 * of generated pages.
 */
import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

function applyTextChanges(text, changes) {
  let next = text;
  const sorted = [...changes].sort((a, b) => b.span.start - a.span.start);
  for (const change of sorted) {
    next =
      next.slice(0, change.span.start) +
      change.newText +
      next.slice(change.span.start + change.span.length);
  }
  return next;
}

function main() {
  const cwd = process.cwd();
  const configPath = ts.findConfigFile(cwd, ts.sys.fileExists, "tsconfig.json");
  if (!configPath) {
    console.error("Could not find tsconfig.json");
    process.exitCode = 1;
    return;
  }

  const configFile = ts.readConfigFile(configPath, ts.sys.readFile);
  if (configFile.error) {
    console.error(
      ts.formatDiagnosticsWithColorAndContext([configFile.error], {
        getCanonicalFileName: (f) => f,
        getCurrentDirectory: ts.sys.getCurrentDirectory,
        getNewLine: () => ts.sys.newLine,
      }),
    );
    process.exitCode = 1;
    return;
  }

  const parsed = ts.parseJsonConfigFileContent(
    configFile.config,
    ts.sys,
    path.dirname(configPath),
  );

  const fileNames = parsed.fileNames.filter(
    (f) =>
      (f.endsWith(".ts") || f.endsWith(".tsx")) &&
      !f.includes(`${path.sep}.next${path.sep}`) &&
      !f.includes(`${path.sep}node_modules${path.sep}`),
  );

  const texts = new Map();
  const versions = new Map();

  for (const fileName of fileNames) {
    const txt = ts.sys.readFile(fileName);
    if (txt != null) texts.set(fileName, txt);
  }

  const servicesHost = {
    getScriptFileNames: () => fileNames,
    getScriptVersion: (fileName) => versions.get(fileName) ?? "0",
    getScriptSnapshot: (fileName) => {
      const txt = texts.get(fileName) ?? ts.sys.readFile(fileName) ?? "";
      return ts.ScriptSnapshot.fromString(txt);
    },
    getCurrentDirectory: () => cwd,
    getCompilationSettings: () => parsed.options,
    getDefaultLibFileName: (options) => ts.getDefaultLibFilePath(options),
    fileExists: ts.sys.fileExists,
    readFile: ts.sys.readFile,
    readDirectory: ts.sys.readDirectory,
    directoryExists: ts.sys.directoryExists,
    getDirectories: ts.sys.getDirectories,
  };

  const languageService = ts.createLanguageService(
    servicesHost,
    ts.createDocumentRegistry(),
  );

  const TARGET_CODES = new Set([6133, 4111]);

  let totalEdits = 0;
  let pass = 0;
  const maxPasses = 6;

  while (pass < maxPasses) {
    pass++;
    let passEdits = 0;

    for (const fileName of fileNames) {
      const diagnostics = languageService.getSemanticDiagnostics(fileName);
      if (!diagnostics?.length) continue;

      const beforeText = texts.get(fileName);
      if (beforeText == null) continue;

      // Apply at most a few fixes per file per pass to keep spans stable.
      let nextText = beforeText;
      let fileChanged = false;

      const relevant = diagnostics.filter((d) => TARGET_CODES.has(d.code));
      if (relevant.length === 0) continue;

      // Apply fixes from bottom to top by start position.
      relevant.sort((a, b) => (b.start ?? 0) - (a.start ?? 0));

      for (const diag of relevant) {
        const start = diag.start ?? 0;
        const end = start + (diag.length ?? 0);

        const fixes = languageService.getCodeFixesAtPosition(
          fileName,
          start,
          end,
          [diag.code],
          {},
          {},
        );

        if (!fixes || fixes.length === 0) continue;

        // Prefer safe/targeted fixes if multiple are available.
        const preferred =
          fixes.find((f) =>
            /Convert to element access/i.test(f.description),
          ) ??
          fixes.find((f) => /Prefix .* with '_'/i.test(f.description)) ??
          fixes.find((f) => /Remove unused declaration/i.test(f.description)) ??
          fixes[0];

        for (const change of preferred.changes) {
          if (change.fileName !== fileName) continue;
          nextText = applyTextChanges(nextText, change.textChanges);
          fileChanged = true;
          passEdits++;
          totalEdits++;
        }
      }

      if (fileChanged && nextText !== beforeText) {
        texts.set(fileName, nextText);
        versions.set(
          fileName,
          String((Number(versions.get(fileName) ?? "0") || 0) + 1),
        );
      }
    }

    console.log(`Pass ${pass}: applied ${passEdits} edits`);
    if (passEdits === 0) break;
  }

  let written = 0;
  for (const [fileName, text] of texts) {
    const onDisk = ts.sys.readFile(fileName);
    if (onDisk != null && onDisk !== text) {
      fs.writeFileSync(fileName, text, "utf8");
      written++;
    }
  }

  console.log(`Done. Total edits: ${totalEdits}. Files written: ${written}.`);
}

main();

