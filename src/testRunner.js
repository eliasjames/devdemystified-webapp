const generalTests = require("./ttt.general.spec.js");
const checkWinnerTests = require("./ttt.check-winner.spec.js");

function testAndLog(testName, conditionFunction) {
  const condition = conditionFunction();
  if (condition) {
    console.log(testName, condition);
  } else {
    console.log('\x1b[33m%s\x1b[0m', testName, condition);
  }
}

generalTests.forEach((e) => {
  testAndLog(e.name, e.test);
});
checkWinnerTests.forEach((e) => {
  testAndLog(e.name, e.test);
});

console.log("\n\n\n\n");
console.log("\n\n\n\n");
