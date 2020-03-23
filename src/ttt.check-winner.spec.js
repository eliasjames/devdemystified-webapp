const ttt = require("./ttt.js");

module.exports = [
  {
    name: "can tell if game is won across",
    test: function checkWinner() {
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
    test: function checkWinner() {
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
    test: function checkWinner() {
      const capturedPlayer = ttt.getCurrentPlayer();
      ttt.loadBoard([
        capturedPlayer, undefined, undefined,
        undefined, capturedPlayer, undefined,
        undefined, undefined, capturedPlayer,
      ]);
      return ttt.checkWinner() === capturedPlayer;
    },
  },
];
