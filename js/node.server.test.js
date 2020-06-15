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
];
tests.beforeAll = () => { };
module.exports = tests;
