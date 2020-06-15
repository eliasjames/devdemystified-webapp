const coreTests = require("./node.game.core.test.js");
const checkWinTests = require("./node.game.check-win.test.js");
const takeTurnsTests = require("./node.game.take-turns.test.js");
const serverTests = require("./node.server.test.js");
const tttTests = [
  coreTests,
  checkWinTests,
  takeTurnsTests,
  serverTests,
];

tttTests.forEach(eachTestGroup => {
  eachTestGroup.forEach(e => {
    eachTestGroup.beforeAll();
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
