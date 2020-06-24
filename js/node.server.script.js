const serverFactory = require("./node.server");
const server = serverFactory();

server.listen(8080);
