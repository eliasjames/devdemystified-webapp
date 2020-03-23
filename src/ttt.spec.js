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
    name: "game board can load",
    test: function gameBoardCanLoad() {
      const testBoard = ["x"];
      ttt.loadBoard(testBoard);

      return ttt.board[0] === "x";
    },
  },
];
