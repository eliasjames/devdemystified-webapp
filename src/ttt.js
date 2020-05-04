const changePlayerEvent = "update-player-indicator";
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
let currentPlayer = "x";
let currentStatus;

module.exports = {
  board: [],
  changePlayer() {
    currentPlayer = (currentPlayer === "x") ? "o" : "x";
    eventEmitter.emit(changePlayerEvent);
  },
  eventEmitter,
  getCurrentPlayer: function getCurrentPlayer() {
    return currentPlayer;
  },
  getCurrentStatus: function getCurrentStatus() {
    return currentStatus;
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
    currentPlayer = "x";
  },
  markBoardSpot: function markBoardSpot(boardPosition) {
    if (this.board[boardPosition]) {
      throw new Error("Board position " + boardPosition + " is taken");
    }
    this.board[boardPosition] = this.getCurrentPlayer();
  },
  newGame: function newGame() {
    currentPlayer = "x";
    eventEmitter.emit(changePlayerEvent);
    currentStatus = undefined;
    ttt.loadBoard([]);
  },
  setCurrentStatus: function setCurrentStatus(status) {
    currentStatus = status;
    return currentStatus;
  },
  takeTurn: function takeTurn(boardPosition) {
    if (!currentStatus) {
      const capturedPlayer = this.getCurrentPlayer();
      this.markBoardSpot(boardPosition);
      const currentStatus = this.setCurrentStatus(
        this.checkWinner()
      );
      if (!currentStatus) {
        this.changePlayer();
        return capturedPlayer;
      }
      return capturedPlayer;
    }
  },
  test: "test",
};
