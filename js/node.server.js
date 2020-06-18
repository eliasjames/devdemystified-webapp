const http = require("http");

function serverFactory() {
  function requestListener (req, res) {
    res.writeHead(200);
    res.end('Hello, World!');
  };
  function myRouter(url) {
    let response;

    if (url === "/") {
      response = {
        status: 200,
        response: "Hello, World!",
      };
    } else if (url === "/newgame") {
      response = {
        status: 200,
        response: "new game",
      };
    }
    return response;
  }

  const server = http.createServer(requestListener);
  server.myRouter = myRouter;

  return server;
}
module.exports = serverFactory;
