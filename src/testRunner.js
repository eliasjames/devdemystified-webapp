const tests = require("./ttt.spec.js");

function testAndLog(testName, conditionFunction) {
  const condition = conditionFunction();
  if (condition) {
    console.log(testName, condition);
  } else {
    console.log('\x1b[33m%s\x1b[0m', testName, condition);
  }
}

tests.forEach((e) => {
  testAndLog(e.name, e.test);
});

console.log("\n\n\n\n");
console.log("\n\n\n\n");
