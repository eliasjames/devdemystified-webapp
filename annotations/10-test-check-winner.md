# Contents
1. Overview
2. Git commit
3. Steps

# Overview
We have a big change, but don't be scared: it's variations on a theme.

We want a method that will examine the board and tell us whether either player has won. This is where storing the board as a single array is going to pay off. 

To check, we pull out the array elements which correspond to a possible win: all three cells in the top row, middle, row, bottom row; same for the three columns, and finally the two diagonals. Then for each possible win, we simply loop through the cell elements and compare the values. If at any point, they are all the same (all one player), we can stop looking.

Novice developers often try to solve this problem without a loop.  Instead they build one enormous test statement, connecting all the possible cases with a bunch of "or" operators. This approach is almost too complicated for the tic tac toe game, but it can be made to work with a whole lot of careful typing and trial-and-error debugging.

As an algorithm gets more complicated, the one-shot solution gets twice as hard to manage. Loops have tremendous power in programming because whatever the final intended action, you only have to enter it once. Imagine if you wanted to change how the board stored marked positions - using the loop method, only one line would need changing. 

The programming principle at work is called DRY, for "Don't Repeat Yourself". Separating the repetitive parts from the different parts - the variations from the theme - is the essence of managing complexity.

# Git commit
```
commit d7da5484531649da44b2becf00799f11fdaf15c0
Author: Elias Carlston <elias@eliascarlston.com>
Date:   Mon May 18 15:00:34 2020 -0400

    Check winner functions

+++ b/game.check-win.node.test.js
@@ -0,0 +1,47 @@
+  {
+    label: "can check winner",
+    condition: () => { return ttt.checkWinner() !== undefined; },
+  },
+  {
+    label: "check no winner",
+    condition: () => { 
+      ttt.loadBoard([1, 1]);
+      return ttt.checkWinner() === 0; 
+    },
+  },
+  {
+    label: "check winner across",
+    condition: () => { 
+      const player = 1;
+      ttt.loadBoard([player, player, player]);
+      return ttt.checkWinner() === player; 
+    },
+  },
+  {
+    label: "check winner down",
+    condition: () => { 
+      const testBoard = [];
+      const player = 1;
+
+      testBoard[1] = player, testBoard[4] = player, testBoard[7] = player; 
+      ttt.loadBoard(testBoard);
+      return ttt.checkWinner() === player; 
+    },
+  },
+  {
+    label: "check winner diagonal",
+    condition: () => { 
+      const testBoard = [];
+      const player = 1;
+
+      testBoard[2] = player, testBoard[4] = player, testBoard[6] = player; 
+      ttt.loadBoard(testBoard);
+      return ttt.checkWinner() === player; 
+    },
+  },
+];
+

+++ b/game.core.node.js
@@ -1,9 +1,35 @@
+const validPlayers = [1, 2];
+
 module.exports = {
   board: [],
+  checkWinner: function checkWinner() {
+    const directions = [
+      [0, 1, 2],
+      [3, 4, 5],
+      [6, 7, 8],
+      [0, 3, 6],
+      [1, 4, 7],
+      [2, 5, 8],
+      [0, 4, 8],
+      [2, 4, 6],
+    ];
+    let winState;
+
+    for (i = 0; i < directions.length; i++) {
+      let e = directions[i];
+      winState = (
+        this.board[e[0]] === this.board[e[1]]
+        && this.board[e[1]] === this.board[e[2]]
+        && this.board[e[0]] !== undefined
+      );
+      if (winState) return this.board[e[0]];
+    }
+    return 0;
+  },
   loadBoard: function loadBoard(board) {
     if (!(board instanceof Array)) throw new Error("board must be an array");
     board.forEach(e => {
-      if ([1, 2].indexOf(e) > -1) { return; }
+      if (validPlayers.indexOf(e) > -1) { return; }
       throw new Error("board values must be player numbers");
     });
     this.board = board;
```

# Steps
1. Create the new tests one at a time
1. Check winner across - placeholder code
1. Check winner down - functional code
1. Check winner diagonal - test coverage
1. Write your own tests

## Create the new tests one at a time
The first test should look familiar - we're just confirming that the method exists. The second test documents a new assumption - `0` represents a state with no winner. Make both tests pass by adding the `checkWinner` function, and having it simply `return 0;`.

## Check winner across - placeholder code
Testing has a principle that at first, you should write as little code as possible to make the test pass, even if the code is nonsensical. We can use that technique for this test. 

Alter `checkWinner` so it returns `0` unless the board matches `[1,1,1]` exactly. This seems pointless right now, because it's not testing "real" code. But what we're *really* doing is setting up the boundaries that the "real", final solution will operate within.

## Check winner down - functional code
Once we introduce this test, the "fake" or placeholder solution above won't work. In order for "across" and "down" to pass tests at the same time, we need real code. 

The solution works like this: `[0,1,2]` is a win across the top row; meaning if you examine `board` and found that the same player number was in `board[0]`, `board[1]` and `board[2]`, that player would be the winner. 

Instead of typing out every single combination of `board` and possible wins, we store the possible wins in `directions`, and loop through.

Start with only one "direction" in the array: the `[0,1,2]` to make the "across" test pass. Then add in the down direction to make that test pass. 

## Check winner diagonal - test coverage
Now that the checking process is accomplished by a loop, checking the diagonals is simply a matter of adding the corresponding elements to `directions` (`[0,4,8]` and `[2,4,6]`). This is the power of the loop based approach - cases can be added or removed from the list by changing array elements instead of rewriting code. In fact, this list could come from somewhere other than code entirely - it could be stored on local disk, or fetched over HTTP. 

The decision about whether to test every possible win is a matter of opinion. Some folks like the "belt and suspenders" approach where every last combination is explicitly tested (every row, column and diagonal). I personally prefer a more declarative approach, where you have at least one representative of each _case_. However with the loop based approach, once the case is handled, additional cases should behave the same way. 

## Write your own tests - optional
We have several positive test cases here but only one negative case. Write a few more tests where `checkWinner` correctly identifies a non-winning situation.
