# Contents
1. Overview
2. Git commit
3. Steps

# Overview
A good test should be able to turn on and off like a switch. There should be one thing you can change in the environment to make the test pass or fail. 

A test that never fails, or doesn't fail when it should, can be worse than no test at all (because it gives you a false sense of security). These tests are called "evergreen" since they never change color. 

A test that fails when it shouldn't is a false alarms. False alarms are dangerous, because you're tempted to ignore them, and then when there really is a problem you don't notice. Don't tolerate a failing test - fix it or remove it.

You need to prove to yourself that your test works by turning the switch off and on. Write the test, run it, see it fail; then write the solution. If your test passes without the solution, that's an important indication your test has a problem. Once you've implemented the solution and the test passes, change the solution and verify that it goes back to failing. 

In this example, the presence or absence of a specific file will be the switch.

# Git commit
```
git show 9aa015d052ae5fca34993aaddec1349e01adaa89

Author: Elias Carlston <elias@eliascarlston.com>
Date:   Mon May 18 10:31:17 2020 -0400

    First test files

diff --git a/game.core.node.js b/game.core.node.js
new file mode 100644
index 0000000..f053ebf
--- /dev/null
+++ b/game.core.node.js
@@ -0,0 +1 @@
+module.exports = {};
diff --git a/game.core.node.test.js b/game.core.node.test.js
new file mode 100644
index 0000000..da7f39d
--- /dev/null
+++ b/game.core.node.test.js
@@ -0,0 +1,3 @@
+const ttt = require("./game.core.node.js");
+
+console.log("ttt", ttt);
```

# Steps
1. Create the test file
2. Run the program without the source file
3. Create the source file
4. Run the test with the source
5. Verify the test without the source

## Create the test file
Using your text editor, create the file `game.core.node.test.js` (we'll see the reason for this file naming convention as we go along). Add this text to the blank file and save it:
```
const ttt = require("./game.core.node.js");

console.log("ttt", ttt);
```
### Line one explanation
`const` is one of several javascript keywords that declares a new variable. All variables are placeholders in run-time memory where we can store data. We give this variable the name `ttt` (for "tic tac toe").

Variables declared with the `const` keyword can only be assigned a value when they are created (hence `const`, from the scientific term 'constant'). It's good practice to use `const` everywhere unless you specifically know re-assignment will be needed; when reading a program, it's helpful to know which placeholders might change value and which will not. 

On the right hand side, `require` is a Node.js function that does three things:
- reads a file from disk ("disk" meaning any long term memory),
- interprets and executes the contents as a JavaScript program,
- and returns the result.
The file to be read and returned is passed as an 'argument' to the function, inside the parentheses. Notice the file name is inside quotes, because we're passing it as text. The `./` at the beginning of the file name tells Node, "look in the current directory" (it's also common to see `../`, meaning "look in the parent directory"). 

The single equals sign operator performs assignment. It takes the return value from the right hand expression, and puts a placeholder for that value into the variable on the left.

### Line two explanation
`console` is a Node.js object that organizes communication. `log` is a function that prints data where the user can see it. By passing in the `ttt` variable, log() will print out the variable's data. We also pass in "ttt" as text. This labels the output, and in case the variable has no data, something will still be printed.

## Run the program without the source file
Run this with the command `node game.core.node.test.js`. You should get an error that Node could not find the "game.core.node.js" file. That's good - we know it's (not) working as expected. If you got a different error, check the text in `game.core.node.test.js` following the main project instructions in the README.

## Create the source file
Once you've seen the 'Cannot find' error from Node, use the text editor to create the `game.core.node.js` file with the contents: `module.exports = {};` 

`module` is another Node object. It communicates with the `require` function. When `require` reads a file, `module` returns whatever gets assigned to its `exports` property.

## Run the test with the source
Run the command `node game.core.node.test.js` again. You'll now see the two curly brackets, `{}`, being printed by `console.log`. The curly brackets are JavaScript syntax for objects - so now the variable `ttt` contains a JavaScript object, just like `console` and `module` (although the `ttt` object is empty for now). 

## Verify the test without the source
Finally, rename the `game.core.node.js` file to something else. Run the test command again and verify that the 'Cannot find' error comes back. Once verified, rename the file back to `game.core.node.js`.
