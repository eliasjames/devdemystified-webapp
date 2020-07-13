# Contents
1. Overview
2. Git commit
3. Steps

# Overview
All languages intended for professional software development (as opposed to, say, academic research) have some tools for a 'build' process. The build is whatever needs to happen in order to get the software ready to "ship" or "deploy" (make public). Passing tests are often made a mandatory condition in build processes. Linting, which we mentioned earlier, is another common requirement.

Node.js comes with a package management tool called NPM (Node Package Manager). Packages are public bundles of software, so NPM also supports some build tools. The most useful one is the ability to write "scripts" - simple aliases for simple or repetive build commands. 

We're going to create a script to run our tests for us. To do so, we have to register our project with NPM, which requires creating a text file called `package.json`. NPM includes a "wizard" to auto-create it - `npm init` - but since the output is plain text, we'll create it ourselves.

JSON stands for JavaScript Object Notation. It is a format for "serializing" objects. To serialize is to store in such a way that can be easily stored or transmitted. JSON looks almost identical to in-program JavaScript, with a couple minor exceptions: 
- double quotes (`"`) are required for all text, including property names and values.
- "hanging" commas on the last item in a list (object properties or array elements) are not allowed.
- data types are restricted to the basics (no custom types).
By sticking to these serialization rules, it's much easier for computers to move JSON around. JSON has quickly become the standard for web apps to communicate with servers over the internet using HTTP.

In this case, `npm` will use the `package.json` file as a "manifest", a table of contents and instructions for the project. The `scripts` section gets especially handy. In NPM scripts, we can blend operating system command line arguments with Node.js programs in useful ways, and give them short, memorable names.  

We're going to start by creating a script, `npm run test`, that will substitute for `node test.runner.js`. Eventually we can hook up NPM to run `test` automatically when any source file changes (called a "watcher"). For now, the big advantage is that we can move or rename the test runner file, and the `npm run test` command stays the same. 

# Git commit
```
commit 4e294bedde695c387ebef75978ed0c6a247896b3
Author: Elias Carlston <elias@eliascarlston.com>
Date:   Mon May 18 10:57:45 2020 -0400

    package json

new file mode 100644
--- /dev/null
+++ b/package.json
@@ -0,0 +1,19 @@
+{
+  "name": "devdemystified-webapp",
+  "version": "1.0.0",
+  "description": "Full stack web app for training purposes",
+  "main": "game.core.node.js",
+  "scripts": {
+    "test": "node test.runner.js"
+  },
+  "repository": {
+    "type": "git",
+    "url": "git+https://github.com/eliasjames/devdemystified-webapp.git"
+  },
+  "author": "Elias Carlston",
+  "license": "ISC",
+  "bugs": {
+    "url": "https://github.com/eliasjames/devdemystified-webapp/issues"
+  },
+  "homepage": "https://github.com/eliasjames/devdemystified-webapp#readme"
+}
```

# Steps
1. Create the file
2. Run the tests with NPM
3. Optional: create Bash alias

## Create the file
Open your text editor and input the object above. The property names must be exact, but you can edit the values if you want. The value you shouldn't change is the one assigned to `"test"`. 

The `scripts` section of `package.json` gets super useful. The text we assign here, `npm` will execute as a command-line argument. So we no longer have to remember `node test.runner.js` - after creating the `package.json`, we can type `npm run test` (`npm` looks for whatever comes after `run` as a property in the `scripts` section). 

Save the file in your text editor.

## Run the tests with NPM
Once the file is saved, you should be able to execute `npm run test`.

We don't need to write a test for this, because it's a build tool, not a feature of our program code.

## Optional: create command line alias
Command line environments support the use of "aliases", which are user-created command names which shortcut to a longer command. I use an alias `nrt` that shortcuts to `npm run test`. No matter what project I'm in, my fingers can muscle-memory type `nrt` to kick off a test run. 

Many good tutorials on aliases are already available. Search for "how to set command alias" followed by your operating system.
