const tttTests = require("./game.core.node.test.js");

tttTests.forEach(e => {
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
