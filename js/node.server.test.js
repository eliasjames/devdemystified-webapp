const http = require("http");
const serverFactory = require("./node.server");

let myExpress;
const tests = [
  {
    label: "smoke test for server handler",
    condition: () => {
      const server = serverFactory();
      return typeof server.myHandler === "function";
    },
  },
  {
    label: "root route",
    condition: () => {
      const server = serverFactory();
      const home = server.myHandler("/");
      return home.status === 200
        && home.response === "Hello, World!";
    },
  },
  {
    label: "new game route",
    condition: () => {
      const server = serverFactory();
      const home = server.myHandler("/newgame");
      return home.status === 200
        && home.response === "new game";
    },
  },
];
tests.beforeAll = () => { };
module.exports = tests;
