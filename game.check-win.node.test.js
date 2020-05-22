const tttFactory = require("./game.core.node.js");
let ttt;

const tests = [
  {
    label: "can check winner",
    condition: () => { return ttt.checkWinner() !== undefined; },
  },
  {
    label: "check no winner",
    condition: () => { 
      ttt.loadBoard([1, 1]);
      return ttt.checkWinner() === 0; 
    },
  },
  {
    label: "check winner across",
    condition: () => { 
      const player = 1;
      ttt.loadBoard([player, player, player]);
      return ttt.checkWinner() === player; 
    },
  },
  {
    label: "check winner down",
    condition: () => { 
      const testBoard = [];
      const player = 1;

      testBoard[1] = player, testBoard[4] = player, testBoard[7] = player; 
      ttt.loadBoard(testBoard);
      return ttt.checkWinner() === player; 
    },
  },
  {
    label: "check winner diagonal",
    condition: () => { 
      const testBoard = [];
      const player = 1;

      testBoard[2] = player, testBoard[4] = player, testBoard[6] = player; 
      ttt.loadBoard(testBoard);
      return ttt.checkWinner() === player; 
    },
  },
  {
    label: "game has a status",
    condition: () => {
      return ttt.getGameStatus !== undefined;
    },
  },
  {
    label: "check winner sets game status",
    condition: () => {
      const player = 1;
      ttt.loadBoard([player, player, player]);
      ttt.checkWinner();
      return ttt.getGameStatus() === "player one won";
    },
  },
  {
    label: "game status starts in progress",
    condition: () => {
      return ttt.getGameStatus() === "in progress";
    },
  },
];

tests.beforeAll = () => {
  ttt = tttFactory();
};
module.exports = tests;
