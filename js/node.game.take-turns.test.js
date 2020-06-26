const tttFactory = require("./node.game.core.js");
let ttt;

const tests = [
  {
    label: "can take turns",
    condition: () => { return ttt.takeTurn(0) === undefined; },
  },
  {
    label: "has a current player",
    condition: () => {
      return ttt.getCurrentPlayer() !== undefined;
    },
  },
  {
    label: "inits first player with x",
    condition: () => {
      ttt._initCurrentPlayer();
      return ttt.getCurrentPlayer() === 1;
    },
  },
  {
    label: "changes player on turn",
    condition: () => {
      ttt._initCurrentPlayer();
      ttt.takeTurn(0);
      return ttt.getCurrentPlayer() === 2;
    },
  },
  {
    label: "init player is idempotent",
    condition: () => {
      ttt._initCurrentPlayer();
      ttt.takeTurn(0);
      ttt._initCurrentPlayer();
      return ttt.getCurrentPlayer() === 2;
    },
  },
  {
    label: "take turn marks the board",
    condition: () => {
      ttt._initCurrentPlayer();
      ttt.takeTurn(0);
      return ttt.board[0] === 1;
    },
  },
  {
    label: "take turn requires board position",
    condition: () => {
      try {
        ttt.takeTurn();
      } catch(e) {
        return e.message === "take turn requires board position";
      }
    },
  },
];

tests.beforeAll = () => {
  ttt = tttFactory();
};
module.exports = tests;
