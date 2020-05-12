const changePlayerEventName = "update-player-indicator";
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
const GAME_TYPE_ENUM = ["two-player", "autorandom"];

let currentPlayer = "x";
let currentStatus;

function autorandomChangePlayerHandler() {
  if (this.players[this.getCurrentPlayer()] === "Robot") {
    let boardPosition = this.randomizer(9);
    while (this.board[boardPosition]) {
      boardPosition = this.randomizer(9);
    }
    this.takeTurn(boardPosition);
  }
}
function resetPlayers() {
  return {
    o: undefined,
    x: undefined,
  };
}

module.exports = {
  board: [],
  changePlayer() {
    currentPlayer = (currentPlayer === "x") ? "o" : "x";
    eventEmitter.emit(changePlayerEventName);
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
  gameType: undefined,
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
  newGame: function newGame(gameType) {
    if (GAME_TYPE_ENUM.indexOf(gameType) < 0) {
      throw new Error("Game type not in enum");
    }

    this.loadBoard([]);

    this.gameType = gameType;
    this.players = this.resetPlayers();
    if (gameType === "autorandom") {
      const coinFlip = this.randomizer(1) === 1 ? "x" : "o";
      this.players[coinFlip] = "Robot";
      this.eventEmitter.on(
        changePlayerEventName,
        autorandomChangePlayerHandler.bind(this)
      );
    }

    this.changePlayer();
    currentStatus = undefined;
  },
  players: resetPlayers(),
  randomizer: function randomizer(max) {
    return Math.floor(Math.random() * Math.floor(max));
  },
  resetPlayers,
  setCurrentStatus: function setCurrentStatus(status) {
    currentStatus = status;
    return currentStatus;
  },
  setPlayer: function setPlayer(playerName, playerLetter) {
    if (!playerLetter) throw new Error("must specify player letter");
    this.players[playerLetter] = playerName;
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
