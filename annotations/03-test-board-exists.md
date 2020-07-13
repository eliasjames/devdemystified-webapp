# Contents
1. Overview
2. Git commit
3. Steps

# Overview
In the first commit, we learned the most important thing is to test software to ensure it works. Then we learned the characteristics of a good test. Now we start testing features. 

Like testing, we start with the most important feature first. What's the most important feature of a tic tac toe game? Probably the board. Players will mark their spots there, and we'll need to use the board to determine who wins. 

To represent the board, we'll use a JavaScript data structure called an array. An array can be thought of as an ordered list. Any JavaScript elements can be members of an array - strings, objects, or even other arrays. Each element can be referred to by a number, called the array index. 

Visually, the tic tac toe board is laid out in a 3x3 grid. New programmers often want to replicate that structure in program data by nesting three arrays inside one. However, this arrangement greatly increases complexity without providing corresponding benefits. 

Instead, we'll use a single array of 9 elements, where each one corresponds to a square on the board (think phone keypad). This will greatly simplify operations like checking for a winner and connecting the array to the browser UI.

# Git commit
```
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
```

# Steps
1. Create the new test
2. Run the test without the solution
3. Add the solution
4. Run the test with the solution
5. Verify the test without the solution

## Create the new test
In `game.core.node.test.js`, we can modify the `console.log` test statement on line 3. The absence of the `game.core.node.js` file will still cause the 'Cannot find' error.

As we've seen with `console.log` and `module.exports`, objects have properties, referred to after a dot. Here we're referring to a `.board` property on `ttt`, which we'll create in the next step.

We have a new operator, `!==`. Last time, we learned the single equals operator `=` performs assignment. The triple equals operator, `===`, performs comparison; it will return `true` or `false` valuesvalues  based on the whether the left and right arguments are identical. The exclamation represents negation in JavaScript; so `!==`, the non-identity operator, return `true` or `false` based on whether the left and right arguments are non-identical.

> Important side note: JavaScript's use of the equals symbols was/is controversial. One very common mistake is to use the assignment operator, `=`, when you meant to perform comparison. Other languages use a keyword operator for assignment, like "set", which is more clear. 
>
> In addition to the identity operator, `===`, JavaScript also has an equality operator, `==`. The equality operator tests whether two arguments are equivalent, but not necessarily identical. If that sounds confusing, you're right - the JavaScript community agrees `==` was a mistake. However it can't be removed from the language at this point. 
>
> To keep from falling into these quirky traps, JavaScript projects usually include a tool called a linter. Linters scan code while you work and warn you of misuse. We're not including a linter on this project to keep setup simple, because the code is pre-written.

We also have a new keyword, `undefined`. JavaScript returns `undefined` when a placeholder in memory has no value. For example, if we reference an object property which has no value - like `ttt.bored` - we'd get `undefined`. Referencing a variable which has not been declared causes an error; but a variable that has not had a value set returns `undefined` (`const` requires a value be set at the same time as declaration, `var` and `let` do not).

## Run the test without the solution
When we run this test, it will not error the way the last one did. Referencing the non-existent object property `ttt.board` will return `undefined`. Then the negation comparison operator, `!==`, will return `false` (because `ttt.board === undefined` is `true`). Finally, `console.log` will print the returned ``false`` value, and that will be our failing test.

Run `node game.core.node.test.js`, and verify that it outputs `false`.

## Add the solution
Open `game.core.node.js`, and expand line 1. Inside the curly brackets, which represent the object declaration, add the property name, `board`. Within an object declaration, a colon represents assignment of a value to a property (`:` instead of `=`). Following the colon comes the value. This value of square brackets, `[]`, represents an array declaration.  

## Run the test with the solution
`ttt.board` now contains an empty array instead of `undefined`. That makes the negation comparison `true`, because `[]` does not equal `undefined`. Run `node game.core.node.test.js` again. Verify that it now outputs `true`.

## Verify the test without the solution
We have to make sure our test switches on and off.  Change `game.core.node.js` back to `module.exports = {};`. Run the test and verify it prints false.
