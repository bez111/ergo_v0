#!/usr/bin/env node
/**
 * Organize (and drop unused) imports across the TS project using
 * TypeScript's LanguageService organizeImports.
 *
 * Why: `noUnusedLocals`/`noUnusedParameters` are enabled in tsconfig, and
 * many pages were generated/edited with extra imports.
 */
import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

function applyTextChanges(text, changes) {
  let next = text;
  // Apply from end to start so offsets stay valid.
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
    const msg = ts.formatDiagnosticsWithColorAndContext(
      [configFile.error],
      {
        getCanonicalFileName: (f) => f,
        getCurrentDirectory: ts.sys.getCurrentDirectory,
        getNewLine: () => ts.sys.newLine,
      },
    );
    console.error(msg);
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

  const versions = new Map();
  const servicesHost = {
    getScriptFileNames: () => fileNames,
    getScriptVersion: (fileName) => versions.get(fileName) ?? "0",
    getScriptSnapshot: (fileName) => {
      if (!ts.sys.fileExists(fileName)) return undefined;
      return ts.ScriptSnapshot.fromString(ts.sys.readFile(fileName) ?? "");
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

  let changedFiles = 0;
  let totalFiles = 0;

  for (const fileName of fileNames) {
    totalFiles++;
    const before = ts.sys.readFile(fileName);
    if (before == null) continue;

    const changes = languageService.organizeImports(
      { type: "file", fileName },
      {},
      {},
    );

    if (!changes || changes.length === 0) continue;

    let after = before;
    for (const fileChange of changes) {
      if (fileChange.fileName !== fileName) continue;
      after = applyTextChanges(after, fileChange.textChanges);
    }

    if (after !== before) {
      fs.writeFileSync(fileName, after, "utf8");
      versions.set(fileName, String((Number(versions.get(fileName) ?? "0") || 0) + 1));
      changedFiles++;
    }
  }

  console.log(`Organized imports in ${changedFiles}/${totalFiles} files.`);
}

main();

