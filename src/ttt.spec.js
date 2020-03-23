const ttt = require("./ttt.js");

module.exports = [
  {
    name: "smoke test",
    test: ()=> { return ttt.test === "test"; },
  },
  {
    name: "game board is an array",
    test: ()=> {
      return ttt.board instanceof Array;
    },
  },
  {
    name: "game board can be loaded",
    test: function gameBoardCanBeLoaded() {
      const boardLoadFunction = ttt.loadBoard;
      return (typeof boardLoadFunction) === "function";
    },
  },
  {
    name: "game board loads",
    test: function gameBoardLoads() {
      const testBoard = ["x"];
      ttt.loadBoard(testBoard);

      return ttt.board[0] === "x";
    },
  },
  {
    name: "only loads arrays",
    test: function onlyLoadsArrays() {
      const testBoard = "x";
      try {
        ttt.loadBoard(testBoard);
        return ttt.board !== "x";
      } catch(e) {
        return e.message === "Board must be array";
      }
    },
  },
  {
    name: "has current player",
    test: function hasCurrentPlayer() {
      return ttt.getCurrentPlayer() === 'x';
    },
  },
];
