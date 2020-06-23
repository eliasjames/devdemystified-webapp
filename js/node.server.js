const http = require("http");
const gameFactory = require("./node.game.core");

function serverFactory() {
  let game = undefined;

  function requestListener (req, res) {
    res.writeHead(200);
    res.end('Hello, World!');
  };
  function myRouter(url) {
    let response;
    const takeTurnUrl = "/taketurn/";
    const gameStatusUrl = "/gamestatus/";

    if (url === "/") {
      response = {
        status: 200,
        response: "Hello, World!",
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
    }
    return response;
  }

  const server = http.createServer(requestListener);
  server.myRouter = myRouter;

  return server;
}
module.exports = serverFactory;
