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
      ttt.initCurrentPlayer();
      return ttt.getCurrentPlayer() === 1;
    },
  },
];

tests.beforeAll = () => {
  ttt = tttFactory();
};
module.exports = tests;
