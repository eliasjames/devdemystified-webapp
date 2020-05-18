module.exports = {
  board: [],
  loadBoard: function loadBoard(board) {
    if (!(board instanceof Array)) throw new Error("board must be an array");
    board.forEach(e => {
      if ([1, 2].indexOf(e) > -1) { return; }
      throw new Error("board values must be player numbers");
    });
    this.board = board;
  },
};
