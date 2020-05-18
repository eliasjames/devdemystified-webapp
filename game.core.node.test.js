const ttt = require("./game.core.node.js");

console.log("ttt has a board", ttt.board !== undefined);
console.log(
  "ttt board is an array", 
  (ttt.board instanceof Array) === true,
);
