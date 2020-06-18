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
];
tests.beforeAll = () => { 
  server = serverFactory();
};
module.exports = tests;
