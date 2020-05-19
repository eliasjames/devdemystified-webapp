const coreTests = require("./game.core.node.test.js");
const checkWinTests = require("./game.check-win.node.test.js");
const takeTurnsTests = require("./game.take-turns.node.test.js");
const tttTests = [
  coreTests,
  checkWinTests,
  takeTurnsTests,
];

tttTests.forEach(eachTestGroup => {
  eachTestGroup.forEach(e => {
    const errorColor = "\x1b[31m%s\x1b[0m";
    const dimOutput = "\x1b[2m%s\x1b[0m";
    if (!e.condition()) {
      console.log(
        errorColor,
        e.label,
      );
      return;
    }
    console.log(
      dimOutput,
      e.label,
    );
  });
});
