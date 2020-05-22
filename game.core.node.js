const validPlayers = [1, 2];
const validStatuses = [
  "in progress",
  "player one won",
  "player two won",
  "tie",
];
let currentPlayer;
let gameStatus;

function gameCoreFactory() {
  currentPlayer = undefined;
  gameStatus = undefined;

  function _changePlayer() {
    if (currentPlayer === validPlayers[0]) {
      currentPlayer = validPlayers[1];
    } else {
      currentPlayer = validPlayers[0];
    }
  }

  return {
    board: [],
    setGameStatus: function setGameStatus() {
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
    getGameStatus: function getGameStatus() {
      return validStatuses[this.setGameStatus()];
    },
    getCurrentPlayer: function getCurrentPlayer() {
      return currentPlayer || 0;
    },
    _initCurrentPlayer: function initCurrentPlayer() {
      if (currentPlayer) return;
      currentPlayer = validPlayers[0];
    },
    loadBoard: function loadBoard(board) {
      if (!(board instanceof Array)) throw new Error("board must be an array");
      board.forEach(e => {
        if (validPlayers.indexOf(e) > -1) { return; }
        throw new Error("board values must be player numbers");
      });
      this.board = board;
    },
    takeTurn: function takeTurn(position) {
      if (position === undefined) throw new Error("take turn requires board position");
      this._initCurrentPlayer();
      this.board[position] = currentPlayer;
      _changePlayer();
    },
  };
}
module.exports = gameCoreFactory;
