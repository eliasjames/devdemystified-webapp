const fs = require('fs');
const http = require('http');
const ttt = require('./ttt.js');
let indexHtml;

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
  if (url === "/") {
    res.writeHead(200);
    res.end(indexHtml);
  } else if (url === "/newgame") {
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
  } else if (url.substr(0, 15) === "/assets/styles/") {
    const fileName = url.substr(15, url.length);
    fs.readFile("./assets/styles/" + fileName, (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      res.writeHead(200);
      res.end(data);
    });
  } else if (url.substr(0, 5) === "/src/") {
    const fileName = url.substr(5, url.length);
    fs.readFile("./src/" + fileName, (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      res.writeHead(200);
      res.end(data);
    });
  } else if (url.indexOf("/take-turn") > -1) {
    const urlFragment = "/take-turn/";
    const positionIndex = url.indexOf(urlFragment);
    const paramPosition = positionIndex + urlFragment.length;
    let turnPosition = url.substr(paramPosition, url.length);
    if (!turnPosition) {
      turnPosition = "Error, no turn position";
      res.writeHead(400);
    } else {
      ttt.takeTurn(turnPosition);
      res.writeHead(200);
    }
    res.end(turnPosition);
  } else {
    res.writeHead(200);
    res.end('Hello, World!');
  }
}

fs.readFile("./index.html", (err, data)=>{
  if (err) {
    console.log(err);
    return;
  }
  indexHtml = data;
  const server = http.createServer(requestListener);
  server.listen(8080);
});
