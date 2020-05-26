const ttt = require("./game.core.node.js")();

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
      const testBoard = [1, 2];
      ttt.loadBoard(testBoard);
      return (ttt.board === testBoard);
    }
  },
  {
    label: "only load arrays",
    condition: () => {
      const testBoard = "1, 2, 3";
      try {
        ttt.loadBoard(testBoard);
        return false; // should have errored
      } catch(e) {
        return (e.message === "board must be an array");
      }
    }
  },
  {
    label: "array values must be player numbers",
    condition: () => {
      const testBoard = [1, 2, 3];
      try {
        ttt.loadBoard(testBoard);
        return false; // should have errored
      } catch(e) {
        return (e.message === "board values must be player numbers") === true;
      }
    }
  },
];
tests.beforeAll = () => { return ttt; };
module.exports = tests;
