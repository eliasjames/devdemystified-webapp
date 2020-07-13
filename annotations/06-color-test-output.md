# Contents
1. Overview
2. Git commit
3. Steps

# Overview
Failing tests need to jump out and grab you. We're going to color failing tests bright red, and passing tests light gray.

# Git commit
```
commit 1eeb7e37471f9f258b3f780dd07e8a414c7672ba
Author: Elias Carlston <elias@eliascarlston.com>
Date:   Mon May 18 10:56:46 2020 -0400

    Improve output

+++ b/test.runner.js
@@ -1,8 +1,17 @@
 const tttTests = require("./game.core.node.test.js");

 tttTests.forEach(e => {
+  const errorColor = "\x1b[31m%s\x1b[0m";
+  const dimOutput = "\x1b[2m%s\x1b[0m";
+  if (!e.condition()) {
+    console.log(
+      errorColor,
+      e.label,
+    );
+    return;
+  }
   console.log(
+    dimOutput,
     e.label,
-    e.condition()
   );
 });
```

# Steps
1. Refactor
2. Verify the tests

## Refactor
Open `test.runner.js`. 

### Lines 4 and 5
Add the `const` variables and their assignments.

The values are plain strings of characters, just like `"ttt"` in the first `console.log` example. The content of these strings has special meaning to the terminal though. They're called "escape sequences", and they tell the terminal to interpret them as settings for the terminal environment instead of sending to the operating system for execution. In this case, the escape sequence tells the terminal to change the color of the text. 

### Line 6 to 12
The JavaScript operator `if` tests whether the condition that follows in the parentheses is `true` or `false`, and executes the following code block (inside `{}`) accordingly. If the condition returns `false`, the negation operator (`!`, here by itself instead of part of `!==`) flips the condition to `true`, and `if` executes the code block.

The code block sets the terminal color and prints the label from the failing test. Since the output is now colored, we don't need to print the value from the condition. 

Finally, the code block uses an empty `return` statement to exit the function. 

### Line 13 to 16
In the case of a failing test, the `return` on line 11 would have exited the function. Therefore any code after that code block will only execute when the condition passed. `if` does have a corresponding operators `else` and  `else if`, but when program logic does not absolutely require using them, it's best to leave them out. 

This code outputs the light gray escape sequence and the test label. Like the failing case, the test condition doesn't need to be printed. 

JavaScript functions end themselves when they run out of statements to execute. If a return value has not been specified, `undefined` is used instead. Explicitly adding an empty `return` statement everywhere bloats your code with no real benefit, and is not recommended.

## Verify the tests
Same as the last verification, flip the test switches. This time watch the output light up!
