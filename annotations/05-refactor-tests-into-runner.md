# Contents
1. Overview
2. Git commit
3. Steps

# Overview
We've got tests started. However we're starting to see some duplication. We're calling `console.log` over and over. And we don't have a mechanism for organization: if we put all our tests in this one file it will get huge and unmanagable. 

Software development consists of two activities: translating features into code, and managing complexity. The second half often gets ignored, but at the project's peril! Managing complexity is half the work.

When you manage complexity, the most common task you do is refactoring. To refactor is to change how the code works internally, without changing the inputs or outputs. Think of how a business might improve its internal process in such a way that customers don't have change how they order and receive.

We're going to refactor our tests into two files: the labels and conditions in one, the condition execution and output printing in another. 

We don't have to write tests for a refactor, because by definition, _what_ the code does hasn't changed, only _how_ it does it. We do still have to verify tests "switch" on and off though.

# Git commit
```
commit ac752320975c6bcd5337d6ef539ed93c0aac7da5
Author: Elias Carlston <elias@eliascarlston.com>
Date:   Mon May 18 10:41:50 2020 -0400

    Refactor tests into runner

+++ b/game.core.node.test.js
@@ -1,7 +1,16 @@
+const tests = [
+  {
+    label: "ttt has a board", 
+    condition: () => { return ttt.board !== undefined; },
+  },
+  {
+    label: "ttt board is an array", 
+    condition: () => { 
+      return (ttt.board instanceof Array) === true;
+    }
+  },
+];
+
+module.exports = tests;
+++ b/test.runner.js
@@ -0,0 +1,8 @@
+const tttTests = require("./game.core.node.test.js");
+
+tttTests.forEach(function eachTest (e) {
+  console.log(
+    e.label, 
+    e.condition()
+  );
+});
```

# Steps
1. Refactor
2. Verify the tests

## Refactor
### The test runner, and declaring functions
Create the file `test.runner.js`. Line 1 should look familiar. We're creating a variable and assigning the return value of a file into it.

Line 2 introduces `forEach`, a built-in feature of JavaScript arrays (glance at the test file quickly, see the square brackets? `require` returns an array into `tttTests`). For each element in the array, `forEach` executes a function that we pass to it as an argument.

We declare a function using the keyword of the same name. Functions can be anonymous, but naming them is almost always better. The name will show up in stack traces and error logs, making it easier to find; and the engine that executes JavaScript code can optimize named functions more efficiently.

Following the name, we declare the function's parameters. When calling functions, the values we passed were "arguments"; when declaring a function, the variables the function will receive are "paramters". You will hear the two words often used interchangably, but they do have specific computer-science definitions. 

Parameters become variables inside the function, so they have the same naming rules. It's common to give parameters much shorter names though. Parameter variables only exist inside their function, so they never conflict with variables of the same name elsewhere. And since they only exist inside their function, it's much easier to remember what they stand for, so a longer, meaningful name (that takes longer to type and read) is less valuable. I always use `e` in `forEach` functions, to remind me it represents *e*ach *e*lement.

The curly brackets in a function definition represent the function body. Inside the function body, you add statements that will be executed when the function gets called. Here, we move our `console.log` inside, so we don't have to repeat it in every test. 

Notice that the second argument to `console.log` is a function call. Before, we executed a statement directly. But if we put the statement into a separate file as-is, it will execute at the time the file passes through `require()`. In the `.test.js` file, we wrap the statement inside a function definition so that we can delay execution until the right time. This is an important technique: we can pass function definitions whereever needed, and then only use them when we want. 

### The test file, and another function declaration syntax
The test runner is eventually going to "consume" many test files. Each file will follow the same pattern: it will be an array, with each element an individual test. 

To contain data within each element, we declare objects (the curly brackets). Each element is separated by a comma. It's good practice to end every element with a comma, even the last one. Two benefits: if you rearrange the elements you can cut-and-paste entire sections without having to think about adding the comma. Also, version control software will treat adding or removing the comma as a difference, even if nothing else changed. This can complicate certain version control operations because automatic merging will abort.

In the test file, we have an alternate syntax for function declaration. For shortness, we can leave out the `function` keyword and the name, and put the "arrow" symbol (`=>`) between the parentheses and the curly brackets. Arrow functions are slightly different than full `functions`, but the differences are subtle and advanced. For the time being you can consider them identical except for the fact that arrow functions are always anonymous. The test runner only has a named function for example purposes; you can change it to an arrow function and everything will work the same. 

Functions have their own operator, `return`. After evaluating the statement on the right hand side, `return` stops the function's execution and sends back the value. A function can have multiple `return` statements, inside of if/then blocks. In that case, the code after the if/then does not execute. Some programmers believe this is bad practice, that a function should only have one `return`, but they are a small minority in the JavaScript community. Note that the statement being returned is exactly like the ones originally in the `console.log` directly. 

## Verify the tests
Exactly the same as the previous step, run the tests with the switches on and off to prove that introducing the test runner code has not affected the test behavior.
