const http = require("http");
const serverFactory = require("./node.server");
let server;

let myExpress;
const tests = [
  {
    label: "smoke test for server handler",
    condition: () => {
      return typeof server.myRouter === "function";
    },
  },
  {
    label: "root route",
    condition: () => {
      const home = server.myRouter("/");
      return home.status === 200
        && home.response === "Hello, World!";
    },
  },
  {
    label: "new game route",
    condition: () => {
      const newgame = server.myRouter("/newgame");
      return newgame.status === 200
        && newgame.response === "new game";
    },
  },
  {
    label: "take turn route",
    condition: () => {
      const taketurn = server.myRouter("/taketurn/0");
      return taketurn.status === 200
        && taketurn.response === "turn taken";
    },
  },
  {
    label: "take turn route errors without board position",
    condition: () => {
      const taketurn = server.myRouter("/taketurn/");
      return taketurn.status === 400
        && taketurn.response === "take turn requires board position";
    },
  },
  {
    label: "game status route",
    condition: () => {
      const gamestatus = server.myRouter("/gamestatus/");
      return gamestatus.status === 200
        && gamestatus.response === "not started";
    },
  },
  {
    label: "game status route in progress",
    condition: () => {
      server.myRouter("/taketurn/0");
      const gamestatus = server.myRouter("/gamestatus/");
      return gamestatus.status === 200
        && gamestatus.response === "in progress";
    },
  },
];
tests.beforeAll = () => { 
  server = serverFactory();
};
module.exports = tests;
