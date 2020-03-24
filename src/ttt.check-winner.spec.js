const ttt = require("./ttt.js");

module.exports = [
  {
    name: "can tell if game is won across",
    test: function checkWinnerAcross() {
      const capturedPlayer = ttt.getCurrentPlayer();
      ttt.loadBoard([
        capturedPlayer, capturedPlayer, capturedPlayer,
        undefined, undefined, undefined,
        undefined, undefined, undefined,
      ]);
      return ttt.checkWinner() === capturedPlayer;
    },
  },
  {
    name: "can tell if game is won down",
    test: function checkWinnerDown() {
      const capturedPlayer = ttt.getCurrentPlayer();
      ttt.loadBoard([
        capturedPlayer, undefined, undefined,
        capturedPlayer, undefined, undefined,
        capturedPlayer, undefined, undefined,
      ]);
      return ttt.checkWinner() === capturedPlayer;
    },
  },
  {
    name: "can tell if game is won diagonally",
    test: function checkWinnerDiagonal() {
      const capturedPlayer = ttt.getCurrentPlayer();
      ttt.loadBoard([
        capturedPlayer, undefined, undefined,
        undefined, capturedPlayer, undefined,
        undefined, undefined, capturedPlayer,
      ]);
      return ttt.checkWinner() === capturedPlayer;
    },
  },
  {
    name: "can tell if game is won",
    test: function checkWinner() {
      const capturedPlayer = ttt.getCurrentPlayer();
      const capturedStatus = ttt.getCurrentStatus();
      ttt.loadBoard([
        capturedPlayer, undefined, undefined,
        undefined, undefined, undefined,
        undefined, undefined, capturedPlayer,
      ]);
      ttt.takeTurn(4);
      const currentStatus = ttt.getCurrentStatus();
      return (
        capturedStatus === undefined
        && currentStatus === capturedPlayer
      );
    },
  },
  {
    name: "don't change player if game is won",
    test: function checkWinnerStays() {
      const capturedPlayer = ttt.getCurrentPlayer();
      ttt.loadBoard([
        capturedPlayer, undefined, undefined,
        undefined, undefined, undefined,
        undefined, undefined, capturedPlayer,
      ]);
      ttt.takeTurn(4);
      const lastPlayer = ttt.getCurrentPlayer();
      return (
        capturedPlayer === lastPlayer
      );
    },
  },
];
