const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('ok');
});

console.log('Server started on port 3000')

server.listen(3000);