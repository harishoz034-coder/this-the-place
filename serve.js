const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3016;
const HTML_PATH = 'C:\\Users\\haris\\Downloads\\this-the-place.html';

const server = http.createServer((req, res) => {
  if (fs.existsSync(HTML_PATH)) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(fs.readFileSync(HTML_PATH));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('File not found');
  }
});

server.listen(PORT, () => {
  console.log(`This The Place! web server running at http://localhost:${PORT}`);
});
