# Contents
1. Overview
2. Git commit
3. Steps

# Overview
Start with basic setup. We're adding a `currentPlayer` variable to track whose turn it is (note the use of `let` as the value is expected to change). We have a "getter" and a "setter" function for `currentPlayer`. 

The tests for these functions demonstrate documentation purposes: by reading the tests, we learn that a game which has not started has `currentPlayer` 0, and that the value `1` corresponds to player 'x'.

# Git commit
```
commit c9ba924d1e55928adcec3625881ee8e2ec5a0786
Author: Elias Carlston <elias@eliascarlston.com>
Date:   Tue May 19 11:23:22 2020 -0400

    Take turn test files

diff --git a/game.core.node.js b/game.core.node.js
index c9b8daa..f77b2a4 100644
--- a/game.core.node.js
+++ b/game.core.node.js
@@ -1,4 +1,5 @@
 const validPlayers = [1, 2];
+let currentPlayer;
 
 module.exports = {
   board: [],
@@ -26,6 +27,12 @@ module.exports = {
     }
     return 0;
   },
+  getCurrentPlayer: function getCurrentPlayer() {
+    return currentPlayer || 0;
+  },
+  initCurrentPlayer: function initCurrentPlayer() {
+    currentPlayer = validPlayers[0];
+  },
   loadBoard: function loadBoard(board) {
     if (!(board instanceof Array)) throw new Error("board must be an array");
     board.forEach(e => {
@@ -34,4 +41,6 @@ module.exports = {
     });
     this.board = board;
   },
+  takeTurn: function takeTurn() {
+  },
 };

+++ b/game.take-turns.node.test.js
@@ -0,0 +1,23 @@
+const ttt = require("./game.core.node.js");
+
+const tests = [
+  {
+    label: "can take turns",
+    condition: () => { return ttt.takeTurn() === undefined; },
+  },
+  {
+    label: "has a current player",
+    condition: () => { 
+      return ttt.getCurrentPlayer() !== undefined; 
+    },
+  },
+  {
+    label: "inits current player with x",
+    condition: () => { 
+      ttt.initCurrentPlayer();
+      return ttt.getCurrentPlayer() === 1; 
+    },
+  },
+];
+
+module.exports = tests;
+++ b/test.runner.js
@@ -1,8 +1,10 @@
 const coreTests = require("./game.core.node.test.js");
 const checkWinTests = require("./game.check-win.node.test.js");
+const takeTurnsTests = require("./game.take-turns.node.test.js");
 const tttTests = [
   coreTests,
   checkWinTests,
+  takeTurnsTests,
 ];
 
 tttTests.forEach(eachTestGroup => {
```

# Steps
1. Create the new file

## Create the new file
Create `game.take-turns.node.test.js`.  Add tests. Run to verify failing state. 

## Add take turn content
In `game.core.node.js`, add the functions and variables. Rerun tests to verify passing. 

## Double check tests
Change source content so that tests show failure again. 
