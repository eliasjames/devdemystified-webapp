# Contents
1. Overview
2. Git commit
3. Steps

# Overview
The next test is similar to the last one. One giant test never works well; instead we write many small tests. Like drawing a circle with many small straight lines. 

# Git commit
```
commit 511fdc42fa6b251725bd576e5da50f974fbd7ce5
Author: Elias Carlston <elias@eliascarlston.com>
Date:   Mon May 18 10:35:19 2020 -0400

    Second test

diff --git a/game.core.node.test.js b/game.core.node.test.js
index 07e1a2f..3e476dd 100644
--- a/game.core.node.test.js
+++ b/game.core.node.test.js
@@ -1,3 +1,7 @@
 const ttt = require("./game.core.node.js");

 console.log("ttt has a board", ttt.board !== undefined);
+console.log(
+  "ttt board is an array",
+  (ttt.board instanceof Array) === true,
+);
```

# Steps
1. Create the new test
2. Verify the test without the solution

## Create the new test
Add the console log statement on lines 5-7. If this statement was all on one line, it would be hard to read. Fortunately, in most places, JavaScript doesn't care about "whitespace" - tabs, spaces, returns and other non-visible characters. In this case, we break the function arguments up into multiple lines, but they're otherwise the same as the previous console log.

We have a new operator, `instanceof`. This works similar to the comparison operator: examines the arguments to its left and right, but returns `true` or `false` based on the type of data rather than the value. Side note: this is the difference between the `==` and `===` operator: `==` doesn't compare data types, and so will return a text `"5"` as being equal to a number `5`.

If we're testing that `.board` is an Array, you might say we don't still need to test if `.board` is not undefined. But imagine the Array test fails and the undefined doesn't. Without having to go look, you would already know that `.board` got set to some value with a different type. Speeding up investigations is an important function of tests.

## Verify the test without the solution
Since this test builds on the previous one, the solution already exists. We still need to verify it though. Let's use the opportunity to examine some more JavaScript language features. 

Change `node.game.core.js` like so:
```
let board;
module.exports = {
  board
};
```

What's going on here? First, we're declaring `board` using `let`, which means we don't have to provide it a value (pop quiz: do you think the last test will pass or fail?).

Second, we're showing a convenience called "object property shorthand". Within an object initialization, if you leave out the assignmentpart of the syntax `propertyName: value`, JavaScript will look for a variable named `propertyName`, and include that variable. Objects are often composed of many variables, and you almost always want the object property to have the same name. This syntax saves the repetition of writing `board: board, player: player, game: game`.

Run the test to verify it fails. Then, you might try assigning some different values to `board`: 
- `5`
- `"5"`
- `{}`
- `[]`
