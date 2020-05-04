const http = require('http');

const requestListener = function (req, res) {
  req.on('error', err => {
    console.error(err);
    res.statusCode = 400;
    res.end('400: Bad Request');
    return;
  });

  res.on('error', err => {
    console.error(err);
  });

  const url = req.url;
  if (url === "/route") {
    res.writeHead(200);
    res.end('Hello, Route!');
  } else {
    res.writeHead(200);
    res.end('Hello, World!');
  }
}

const server = http.createServer(requestListener);
server.listen(8080);
