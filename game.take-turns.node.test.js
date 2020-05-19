const ttt = require("./game.core.node.js")();

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
    label: "inits current player with x",
    condition: () => { 
      ttt.initCurrentPlayer();
      return ttt.getCurrentPlayer() === 1; 
    },
  },
];

module.exports = tests;
