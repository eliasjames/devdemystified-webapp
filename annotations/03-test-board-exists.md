  git show 29b6f4c884ed238532b58f3604a849467d5a2a9e
  
  Author: Elias Carlston <elias@eliascarlston.com>
  Date:   Mon May 18 10:32:22 2020 -0400
  
      First test
  
  diff --git a/game.core.node.js b/game.core.node.js
  index f053ebf..14b6b2c 100644
  --- a/game.core.node.js
  +++ b/game.core.node.js
  @@ -1 +1,3 @@
  -module.exports = {};
  +module.exports = {
  +  board: [],
  +};
  diff --git a/game.core.node.test.js b/game.core.node.test.js
  index da7f39d..07e1a2f 100644
  --- a/game.core.node.test.js
  +++ b/game.core.node.test.js
  @@ -1,3 +1,3 @@
   const ttt = require("./game.core.node.js");
   
  -console.log("ttt", ttt);
  +console.log("ttt has a board", ttt.board !== undefined);
  
  
  
