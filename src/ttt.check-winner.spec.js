const ttt = require("./ttt.js");

module.exports = [
  {
    name: "can tell if game is won",
    test: function checkWinner() {
      const capturedPlayer = ttt.getCurrentPlayer();
      ttt.loadBoard([capturedPlayer, capturedPlayer, capturedPlayer]);
      return ttt.checkWinner() === capturedPlayer;
    },
  },
];
