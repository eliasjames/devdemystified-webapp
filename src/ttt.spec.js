const ttt = require("./ttt.js");

function testAndLog(testName, conditionFunction) {
  const condition = conditionFunction();
  if (condition) {
    console.log(testName, condition);
  } else {
    console.log('\x1b[33m%s\x1b[0m', testName, condition);
  }
}

var allTests = [
  {
    name: "smoke test",
    test: ()=> { return ttt.test === "test"; },
  },
  {
    name: "it has a game board",
    test: ()=> {
      return typeof ttt.board === "object";
    },
  },
  {
    name: "game board can be loaded",
    test: function gameBoardCanBeLoaded() {
      const boardLoadFunction = ttt.board.load;
      return (typeof boardLoadFunction) === "function";
    },
  },
];

allTests.forEach((e) => {
  testAndLog(e.name, e.test);
});

console.log("\n\n\n\n");
console.log("\n\n\n\n");
