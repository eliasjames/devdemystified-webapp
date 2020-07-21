# Contents
1. Overview
2. Git commit
3. Steps

# Overview
We've written a bunch of tests for checking a winner. We're about to move on to taking turns. But our test file is getting too big. 

The general rule for any code file is the entire thing should be able to fit on your monitor at normal size. If you can't see the entire file at one time, it becomes way harder to keep it all straight in your mind as well. 

There's never really a good reason to let a file get bigger than one screen. The code should be divided into small functions, so if you have too many small functions it should be easy to move some into another file. Files can then hold groups of related functions.

# Git commit
```
commit c4eb46d230ae2b27d9458abbf668fb97b8c8c41a
Author: Elias Carlston <elias@eliascarlston.com>
Date:   Mon May 18 12:30:35 2020 -0400

    Refactor test runner for multiple files

+++ b/test.runner.js
@@ -1,17 +1,24 @@
-const tttTests = require("./game.core.node.test.js");
+const coreTests = require("./game.core.node.test.js");
+const checkWinTests = require("./game.check-win.node.test.js");
+const tttTests = [
+  coreTests,
+  checkWinTests,
+];
 
-tttTests.forEach(e => {
-  const errorColor = "\x1b[31m%s\x1b[0m";
-  const dimOutput = "\x1b[2m%s\x1b[0m";
-  if (!e.condition()) {
+tttTests.forEach(eachTestGroup => {
+  eachTestGroup.forEach(e => {
+    const errorColor = "\x1b[31m%s\x1b[0m";
+    const dimOutput = "\x1b[2m%s\x1b[0m";
+    if (!e.condition()) {
+      console.log(
+        errorColor,
+        e.label,
+      );
+      return;
+    }

...

+  });
 });
```

# Steps
1. Create the new file
1. Add loop within test runner

## Create the new file
Create `game.check-win.node.test.js`, and move the corresponding tests there.

## Add loop within test runner
Test runner used to loop through one array containing tests. Now it will loop through an array of arrays. 

A group of related tests like this is called a "suite". Eventually we'll create an "initializer" function, some setup which runs before each test in the suite. 

Refactor, so there's no need for any tests.
