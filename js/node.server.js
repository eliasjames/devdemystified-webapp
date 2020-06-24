const fs = require("fs");
const http = require("http");
const gameFactory = require("./node.game.core");

function serverFactory() {
  let game = undefined;

  function readFileSync(path) {
    try {
      return fs.readFileSync(path);
    } catch(e) {
      return e.message;
    }
  }

  function requestListener (req, res) {
    const myResponse = myRouter(req.url);
    res.writeHead(myResponse.status);
    res.end(myResponse.response);
  };
  function myRouter(url) {
    let response;
    const takeTurnUrl = "/taketurn/";
    const gameStatusUrl = "/gamestatus/";

    if (url === "/") {
      response = {
        status: 200,
        response: readFileSync("index.html") || "Home page not loaded",
      };
    } else if (url === "/newgame") {
      game = gameFactory();
      response = {
        status: 200,
        response: "new game",
      };
    } else if (url.indexOf(gameStatusUrl) > -1) {
      if (!game) {
        response = {
          status: 200,
          response: "not started",
        };
      } else {
        response = {
          status: 200,
          response: game.getGameStatus(),
        };
      }
    } else if (url.indexOf(takeTurnUrl) > -1) {
      if (!game) game = gameFactory();
      const boardPosition = url.substring(
        takeTurnUrl.length,
        url.length
      );
      try {
        game.takeTurn(boardPosition);
        response = {
          status: 200,
          response: "turn taken",
        };
      } catch(e) {
        response = {
          status: 400,
          response: e.message,
        };
      }
    } else {
      response = {
        status: 404,
        response: "not found",
      };
    }
    return response;
  }

  const server = http.createServer(requestListener);
  server.myRouter = myRouter;

  return server;
}
module.exports = serverFactory;
