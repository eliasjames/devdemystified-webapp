const changePlayerEventName = "update-player-indicator";
const changePlayerEvent = new Event(changePlayerEventName);
const eventTarget = new EventTarget();
const setPlayerEventName = "set-player-name";

let currentPlayer = "x";
let currentStatus;

function resetPlayers() {
  return {
    o: undefined,
    x: undefined,
  };
}

const ttt = {
  board: [],
  changePlayer() {
    currentPlayer = (currentPlayer === "x") ? "o" : "x";
    eventTarget.dispatchEvent(changePlayerEvent);
  },
  eventTarget,
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
    this.players = this.resetPlayers();
    currentPlayer = "x";
    eventTarget.dispatchEvent(changePlayerEvent);
    currentStatus = undefined;
    this.loadBoard([]);
  },
  players: resetPlayers(),
  resetPlayers,
  setCurrentStatus: function setCurrentStatus(status) {
    currentStatus = status;
    return currentStatus;
  },
  setPlayer: function setPlayer(playerName, playerLetter) {
    if (playerLetter) this.players[playerLetter] = playerName;

    if (!this.players.x) {
      this.players.x = playerName;
      return;
    }
    if (!this.players.o) this.players.o = playerName;

    const setPlayerEvent = new CustomEvent(
      setPlayerEventName,
      { detail: playerName },
    );
    this.eventTarget.dispatchEvent(setPlayerEvent);
  },
  setPlayerEventName,
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
