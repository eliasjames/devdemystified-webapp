const ttt = require("./ttt.js");

function testAndLog(testName, conditionFunction) {
  console.log(testName, conditionFunction());
}

testAndLog("test", ()=> { ttt.test === "test" });

testAndLog("it has a game board", ()=> { ttt.board === {} });

function gameBoardCanBeLoaded() { 
  const boardLoadFunction = ttt.board.load; 
  return (typeof boardLoadFunction) === "function"; 
}
testAndLog("game board can be loaded", gameBoardCanBeLoaded);
