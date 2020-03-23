const ttt = require("./ttt.js");

module.exports = [
  {
    name: "smoke test",
    test: ()=> { return ttt.test === "test"; },
  },
  {
    name: "it has a game board",
    test: ()=> {
      return typeof ttt.board === "object";
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
