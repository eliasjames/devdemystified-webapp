const tttFactory = require("./game.core.node.js");
let ttt;

const tests = [
  {
    label: "can take turns",
    condition: () => { return ttt.takeTurn() === undefined; },
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
      ttt.takeTurn();
      return ttt.getCurrentPlayer() === 2;
    },
  },
];

tests.beforeAll = () => {
  ttt = tttFactory();
};
module.exports = tests;
