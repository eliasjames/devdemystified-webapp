const validPlayers = [1, 2];

module.exports = {
  board: [],
  checkWinner: function checkWinner() {
    const directions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let winState;

    for (i = 0; i < directions.length; i++) {
      let e = directions[i];
      winState = (
        this.board[e[0]] === this.board[e[1]]
        && this.board[e[1]] === this.board[e[2]]
        && this.board[e[0]] !== undefined
      );
      if (winState) return this.board[e[0]];
    }
    return 0;
  },
  loadBoard: function loadBoard(board) {
    if (!(board instanceof Array)) throw new Error("board must be an array");
    board.forEach(e => {
      if (validPlayers.indexOf(e) > -1) { return; }
      throw new Error("board values must be player numbers");
    });
    this.board = board;
  },
};
