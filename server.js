/* eslint-disable @typescript-eslint/no-require-imports */
const express = require('express');
const { exec } = require('child_process');
const fs = require('fs');
const app = express();
app.use(express.json());

app.post('/api/compile', (req, res) => {
  const { code } = req.body;
  if (!code) return res.status(400).json({ error: 'No code provided' });
  const filePath = '/tmp/contract.es';
  fs.writeFileSync(filePath, code);
  // Запуск ergo-tool внутри Docker-контейнера
  const dockerCmd = `docker run --rm -v /tmp:/tmp ergoplatform/ergo-tool compile ${filePath}`;
  exec(dockerCmd, { timeout: 10000, maxBuffer: 1024 * 1024 }, (err, stdout, stderr) => {
    if (err) return res.status(400).json({ error: stderr || err.message });
    res.json({ result: stdout });
  });
});

app.listen(3001, () => console.log('Backend running on http://localhost:3001')); 