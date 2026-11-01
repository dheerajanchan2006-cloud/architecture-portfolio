const http = require('http');
const fs = require('fs');
const path = require('path');

const DEFAULT_PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.json': 'application/json',
  '.ico': 'image/x-icon'
};

function createServer() {
  return http.createServer((req, res) => {
    let reqUrl = req.url.split('?')[0];
    let reqPath = decodeURI(reqUrl);
    if (reqPath === '/' || reqPath === '') reqPath = '/index.html';

    const safeSuffix = path.normalize(reqPath).replace(/^(\.\.[\/\\])+/, '');
    const filePath = path.join(DIR, safeSuffix);

    fs.stat(filePath, (err, stats) => {
      if (err || !stats.isFile()) {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        return res.end('404 Not Found');
      }

      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';

      const headers = {
        'Content-Type': contentType,
        'Content-Length': stats.size,
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=31536000, immutable',
        'Accept-Ranges': 'bytes'
      };

      res.writeHead(200, headers);
      fs.createReadStream(filePath).pipe(res);
    });
  });
}

function startServer(port) {
  const server = createServer();
  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} is in use, trying port ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error('Server error:', err);
    }
  });

  server.listen(port, '0.0.0.0', () => {
    console.log(`====================================================`);
    console.log(`  Scroll Animation Server running successfully!`);
    console.log(`  Local URL:   http://localhost:${port}/`);
    console.log(`  Network URL: http://127.0.0.1:${port}/`);
    console.log(`====================================================`);
  });
}

startServer(DEFAULT_PORT);

