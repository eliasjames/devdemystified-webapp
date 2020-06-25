const http = require("http");
const routerFactory = require("./node.server.router");

function serverFactory() {
  function requestListener (req, res) {
    const myResponse = myRouter(req.url);
    res.writeHead(myResponse.status);
    res.end(myResponse.response);
  };

  const myRouter = routerFactory();
  const server = http.createServer(requestListener);
  server.myRouter = myRouter;

  return server;
}
module.exports = serverFactory;
