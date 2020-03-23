const ttt = require("./ttt.js");

console.log("test", ttt.test === "test");

console.log("it has a game board", ttt.board === {});

function gameBoardCanBeLoaded() { 
  const boardLoadFunction = ttt.board.load; 
  return (typeof boardLoadFunction) === "function"; 
}
console.log("game board can be loaded", gameBoardCanBeLoaded());
