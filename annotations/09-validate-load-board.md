# Contents
1. Overview
2. Git commit
3. Steps

# Overview
We have bad associations with getting computer errors, but the ones we hear about are "unhandled" errors. Using errors intentionally produces very solid code. Certain situations should never occur, and drawing boundaries that separate unacceptable conditions allows code to focus more accurately on correct situations. Errors which are "thrown" then get "handled" elsewhere, which allows that code to focus on doing the best there.

# Git commit
```
commit 2b32bfc9056c3761bc6f1ff168593be926e5a4ef
Author: Elias Carlston <elias@eliascarlston.com>
Date:   Mon May 18 11:58:43 2020 -0400

    load board constraints

+++ b/game.core.node.js
@@ -1,6 +1,11 @@
 module.exports = {
   board: [],
   loadBoard: function loadBoard(board) {
+    if (!(board instanceof Array)) throw new Error("board must be an array");
+    board.forEach(e => {
+      if ([1, 2].indexOf(e) > -1) { return; }
+      throw new Error("board values must be player numbers");
+    });
     this.board = board;
   },
 };
+++ b/game.core.node.test.js
@@ -14,9 +14,33 @@ const tests = [
+  {
+    label: "only load arrays",
+    condition: () => {
+      const testBoard = "1, 2, 3";
+      try {
+        ttt.loadBoard(testBoard);
+        return false; // should have errored
+      } catch(e) {
+        return (e.message === "board must be an array");
+      }
+    }
+  },
+  {
+    label: "array values must be player numbers",
+    condition: () => {
+      const testBoard = [1, 2, 3];
+      try {
+        ttt.loadBoard(testBoard);
+        return false; // should have errored
+      } catch(e) {
+        return (e.message === "board values must be player numbers") === true;
+      }
     }
   },
 ];
```

# Steps
1. Create the new test
2. Run the test without the solution
3. Add the solution
4. Run the test with the solution
5. Verify the test without the solution

## Create the new test
Add the test code. The new keywords are `try` and `catch`. These keywords work a little like `if` statements. `try` attempts to run all the code in its block (`{...}`). If an error is thrown, execution of the `try` block stops and control changes to the `catch` block. The object thrown by the error gets passed to `catch` just like a function argument. 

## Run the test without the solution
Without the error code, the `try` block will complete, returning `false`.

## Add the solution
In `game.core.node.js`, we have a couple new keywords. `throw` causes the function to abort and transfer control to `catch`. `Error` is a built-in JavaScript function, which returns an `Error` type object. 

Good to know: functions that are set up to return an object of the same type are called "constructors". Every object has a constructor. When we've been using the object literal, `{}`, in the background, JavaScript actually calls a function named `Object`.

Last, we're using a built-in method of the Array object: `[1, 2].indexOf(e)`. Yes, Arrays are a sub-type of objects! `indexOf` searches the elements of the array it belongs to (imagine how it uses `this`), and returns the array index if found. If not found, it returns -1 (because 0 represents the first element, so no array ever has an element in the -1 position).

## Run the test with the solution
The feature code errors, so the test goes into the `catch` block, and the test passes. 

## Verify the test without the solution
Change the error text in either the test or the feature code to prove the test works. 
