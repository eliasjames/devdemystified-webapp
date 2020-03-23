const ttt = require("./ttt.js");

function testAndLog(testName, conditionFunction) {
  const condition = conditionFunction();
  if (condition) {
    console.log(testName, condition);
  } else {
    console.log('\x1b[33m%s\x1b[0m', testName, condition);
  }
}

testAndLog("test", ()=> { return ttt.test === "test"; });

testAndLog("it has a game board", ()=> {
  return typeof ttt.board === "object"; 
});

function gameBoardCanBeLoaded() { 
  const boardLoadFunction = ttt.board.load; 
  return (typeof boardLoadFunction) === "function"; 
}
testAndLog("game board can be loaded", gameBoardCanBeLoaded);
