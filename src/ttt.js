let currentPlayer = "x";

module.exports = {
  board: [],
  changePlayer() {
    currentPlayer = (currentPlayer === "x") ? "o" : "x";
  },
  getCurrentPlayer: function getCurrentPlayer() {
    return currentPlayer;
  },
  checkWinner: function checkWinner() {
    const capturedPlayer = this.getCurrentPlayer();
    let playerSpots = "";
    const possibleWins = [
      "012",
      "345",
      "678",
      "036",
      "147",
      "258",
      "048",
      "246",
    ];
    let winnerStatus;

    this.board.forEach((e, i) => {
      if (e === capturedPlayer) {
        playerSpots += i.toString();
      }
    });
    possibleWins.forEach((e) => {
      if (playerSpots === e) {
        winnerStatus = capturedPlayer;
      }
    });
    return winnerStatus;
  },
  loadBoard: function loadBoard(board) {
    if (board instanceof Array !== true) {
      throw new Error("Board must be array");
    }
    this.board = board;
  },
  markBoardSpot: function markBoardSpot(boardPosition) {
    if (this.board[boardPosition]) {
      throw new Error("Board position " + boardPosition + " is taken");
    }
    this.board[boardPosition] = this.getCurrentPlayer();
  },
  takeTurn: function takeTurn(boardPosition) {
    this.markBoardSpot(boardPosition);
    this.changePlayer();
  },
  test: "test",
};
