const ttt = require("./ttt.js");

module.exports = [
  {
    name: "set type on new game",
    test: ()=> {
      ttt.newGame("two-player");
      return ttt.gameType === "two-player";
    },
  },
  {
    name: "game type must be in enum",
    test: ()=> {
      try {
        ttt.newGame("not-in-enum");
      } catch(e) {
        return e.message === "Game type not in enum";
      }
    },
  },
  {
    name: "autorandom sets a player",
    test: ()=> {
      ttt.newGame("autorandom");
      return (ttt.players.x === "Robot" || ttt.players.o === "Robot");
    },
  },
  {
    name: "autorandom takes turns",
    test: ()=> {
      ttt.newGame("autorandom");
      if (ttt.players.x === "Robot") {
        return ttt.board.filter(e => e === "x").length === 1;
      } else if (ttt.players.o === "Robot") {
        return ttt.board.filter(e => e === "o").length === 1;
      }
    },
  },
];
