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
  {
    name: "changes player",
    test: function changePlayer() {
      const startingPlayer = ttt.getCurrentPlayer();
      ttt.changePlayer();
      return startingPlayer !== ttt.getCurrentPlayer();
    },
  },
  {
    name: "can mark a spot on the board",
    test: function markBoardSpot() {
      const capturedPlayer = ttt.getCurrentPlayer();
      ttt.markBoardSpot(3);
      return ttt.board[3] === capturedPlayer;
    },
  },
  {
    name: "can't mark a board position that's taken",
    test: function markTakenBoardPosition() {
      const testSpot = 3;
      try {
        ttt.loadBoard([]);
        ttt.markBoardSpot(testSpot);
        ttt.markBoardSpot(testSpot);
        // test failed if the second markBoardSpot doesn't error
        return false;
      } catch(e) {
        return e.message === "Board position " + testSpot + " is taken";
      }
    },
  },
  {
    name: "can take a turn",
    test: function takeTurn() {
      const firstPlayer = ttt.getCurrentPlayer();
      ttt.loadBoard([]);
      ttt.takeTurn(3);
      const secondPlayer = ttt.getCurrentPlayer();
      ttt.takeTurn(4);
      const currentPlayer = ttt.getCurrentPlayer();
      return (
        firstPlayer !== secondPlayer
        && ttt.board[3] === firstPlayer
        && ttt.board[4] === secondPlayer
        && firstPlayer === currentPlayer
      );
    },
  },
  {
    name: "can set a player",
    test: function setPlayer() {
      ttt.setPlayer("Elias");
      return ttt.players.x === "Elias";
    },
  },
  {
    name: "can reset players",
    test: function setPlayer() {
      ttt.setPlayer("Elias");
      ttt.newGame();
      return ttt.players.x === undefined;
    },
  },
  {
    name: "can set a second player",
    test: function setPlayer() {
      ttt.setPlayer("Elias");
      ttt.setPlayer("James");
      return ttt.players.o === "James";
    },
  },
  {
    name: "can set a specific player",
    test: function setPlayer() {
      ttt.setPlayer("Elias");
      ttt.setPlayer("James", "x");
      return ttt.players.x === "James";
    },
  },
];
