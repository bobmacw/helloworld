const http = require('http');

//const hostname = '127.0.0.1';
const hostname = 'localhost';
const PORT = process.env.PORT || 5000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Heroku World!\n');
});

server.listen(PORT);
console.log(`Server running at http://${hostname}:${PORT}/`);
//server.listen(PORT, hostname, () => {
//  console.log(`Server running at http://${hostname}:${PORT}/`);
//});
