const tttTests = require("./game.core.node.test.js");

tttTests.forEach(e => {
  console.log(
    e.label, 
    e.condition()
  );
});
