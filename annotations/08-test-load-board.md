# Contents
1. Overview
2. Git commit
3. Steps

# Overview
For our first tests, we decided having a board was the most important feature of our app to test. For our next test-feature, let's add the ability to load a pre-configured board.

At first glance, it may seem like taking a turn should be a higher priority. We might eventually use this feature directly in a case like restoring a game directly in progress, but we actually need it right now in order to test taking a turn. 

Look ahead at the test cases taking a turn will require:
1. rejects being called if game is not in progress 
1. rejects invalid board position
1. rejects occupied board position
1. marks board position
1. checks if new board position caused a win or tie
1. if win or tie, update game status
1. if game in progress, switch current player

Tests 2, 3 and 5 will require setting up the test board in a specific configuration. In particular, checking win/tie logic is going to require numerous configurations (since wins can go horizontal, vertical, or diagonal).

Right now we could assign the board object directly, like `ttt.board = [0, 1, 0];`. We don't want to do that for a few reasons. The main one is we'll eventually want to move `board` where outside code _can't_ modify it. 

Imagine how much easier tracking down some bug would be if there was only one function allowed to update the board. You'd just put a `console.log` there and watch it as it updated. But if all the code is allowed to access the board, it can be near impossible to figure out where an unwanted update is coming from. 

Controlling access to sensitive data is essential to having a program that behaves predictably. Moving data where outside code can't access makes it "private". To modify private data, a single public function called a "setter" validates requests first (a "getter" returns private data). This style of controlling access is called an "interface" - think of a protective barrier with those built-in gloves you see in nuclear reactors or infant incubators. 


# Git commit
```
commit 5135f2dbfb90fe743188b2be80a841462ea3387c
Author: Elias Carlston <elias@eliascarlston.com>
Date:   Mon May 18 11:34:04 2020 -0400

    Load board test

+++ b/game.core.node.js
@@ -1,3 +1,6 @@
 module.exports = {
   board: [],
+  loadBoard(board) {
+    this.board = board;
+  },
 };
+++ b/game.core.node.test.js
@@ -2,15 +2,23 @@ const ttt = require("./game.core.node.js");
 
 const tests = [
+  {
+    label: "board can be loaded",
+    condition: () => {
+      const testBoard = [1, 2, 3];
+      ttt.loadBoard(testBoard);
+      return (ttt.board === testBoard) === true;
+    }
+  },
 ];
 
 module.exports = tests;
```

# Steps
1. Create the new test
2. Run the test without the solution
3. Add the solution
4. Run the test with the solution
5. Verify the test without the solution

## Create the new test
Add the new test into `game.core.node.test.js`. Nothing new in this code. 

## Run the test without the solution
The test will error saying `loadBoard` is not a function. 

## Add the solution
In `game.core.node.js`, add the `loadBoard` property to the object. We're again taking advantage of the "object property shorthand" - instead of `loadBoard: function loadBoard(...`, we can just declare a function name followed by parentheses with any parameters, and JavaScript will auto-add an object property with the same name.

An object property can have any JavaScript value, but assigning a function has special meaning. Objects collect related data together, but functions _do stuff_, representing an object's behavior. An object's behaviors are called its "methods". The term method has a specific technical meaning, but it's frequently used interchangably with "function" when referring to object properties. 

A method does get a special keyword, `this`. `this` refers to the object which the function is attached to, and provides a way to link data and behavior directly (if the object gets renamed, `this` still works).

`this.board` refers to the object property, and the assignment sets that property to the value passed when the function is called.

## Run the test with the solution
`npm run test` should now show all passing. 

## Verify the test without the solution
Delete the line `this.board = board;` abd the test should show false without error.
