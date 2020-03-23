module.exports = {
  board: [],
  _currentPlayer: "x",
  getCurrentPlayer: function getCurrentPlayer() {
    return this._currentPlayer;
  },
  loadBoard: function loadBoard(board) {
    if (board instanceof Array !== true) {
      throw new Error("Board must be array");
    }
    this.board = board;
  },
  test: "test"
};
