const http = require("http");

function serverFactory() {
  function requestListener (req, res) {
    res.writeHead(200);
    res.end('Hello, World!');
  };

  const server = http.createServer(requestListener);
  server.myHandler = requestListener;

  return server;
}
module.exports = serverFactory;
