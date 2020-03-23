let currentPlayer = "x";
module.exports = {
  board: [],
  getCurrentPlayer: function getCurrentPlayer() {
    return currentPlayer;
  },
  loadBoard: function loadBoard(board) {
    if (board instanceof Array !== true) {
      throw new Error("Board must be array");
    }
    this.board = board;
  },
  test: "test"
};
