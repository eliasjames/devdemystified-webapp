let currentPlayer = "x";

module.exports = {
  board: [],
  changePlayer() {
    currentPlayer = (currentPlayer === "x") ? "o" : "x";
  },
  getCurrentPlayer: function getCurrentPlayer() {
    return currentPlayer;
  },
  loadBoard: function loadBoard(board) {
    if (board instanceof Array !== true) {
      throw new Error("Board must be array");
    }
    this.board = board;
  },
  markBoardSpot: function markBoardSpot(boardPosition) {
    this.board[boardPosition] = this.getCurrentPlayer();
  },
  test: "test"
};
