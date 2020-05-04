const http = require('http');
const ttt = require('./ttt.js');

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
  if (url === "/newgame") {
    ttt.newGame();
    res.writeHead(200);
    res.end('New game');
  } else if (url === "/status") {
    const status = `{
      status: ${ttt.getCurrentStatus()},
      player: ${ttt.getCurrentPlayer()},
    }`;
    res.writeHead(200);
    res.end(status);
  } else if (url.indexOf("/take-turn") > -1) {
    const urlFragment = "/take-turn";
    const positionIndex = url.indexOf(urlFragment);
    let turnPosition = url.substr(
      positionIndex + urlFragment.length,
      url.length
    );
    if (!turnPosition) {
      turnPosition = "Error, no turn position";
      res.writeHead(400);
    } else {
      res.writeHead(200);
    }
    res.end(turnPosition);
  } else {
    res.writeHead(200);
    res.end('Hello, World!');
  }
}

const server = http.createServer(requestListener);
server.listen(8080);
