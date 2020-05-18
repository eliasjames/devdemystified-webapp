const ttt = require("./game.core.node.js");

const tests = [
  {
    label: "ttt has a board", 
    condition: () => { return ttt.board !== undefined; },
  },
  {
    label: "ttt board is an array", 
    condition: () => { 
      return (ttt.board instanceof Array) === true;
    }
  },
];

module.exports = tests;
