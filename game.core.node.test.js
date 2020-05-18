const ttt = require("./game.core.node.js");

const tests = [
  {
    label: "has a board",
    condition: () => { return ttt.board !== undefined; },
  },
  {
    label: "board is an array",
    condition: () => {
      return (ttt.board instanceof Array) === true;
    }
  },
  {
    label: "board can be loaded",
    condition: () => {
      const testBoard = [1, 2, 3];
      ttt.loadBoard(testBoard);
      return (ttt.board === testBoard) === true;
    }
  },
];

module.exports = tests;
