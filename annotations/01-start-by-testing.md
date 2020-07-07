# Contents
1. Overview
2. Git commit
3. Steps

# Overview
The first commit is always empty. Where do we start? We start with the most important thing. In software, the most important thing is that _it works_.

1. Software development is about testing
2. Automated testing
3. Test in order to build

## Software development is about testing
To guarantee software works requires testing. Discussions of testing in software development get terribly complicated, but the concept itself isn't.

Adding features to software is like putting spaghetti on a plate. The first few noodles will stack on top of each other, and the pile will rise. 

But the pile quickly becomes steep enough that any noodle you put on top just slides down the side. The pile will spread out and get wider, but never any taller. 

All software development requires some form of testing. It's often just manual: you make a change to the code, you go "try it out". You refresh the page, click the button, and watch what it does.

This works fine for a little while - maybe for quite a while, if you're really really good at it - but the weight of the increasing number of requirements inevitably becomes unmanageable. At some point, just based on the total time, you can't manually check every feature. 

Little problems start to creep in. Enough little problems constitute a big problem, because you can no longer understand how the parts interact. 

## Automated testing
Automated testing works like this: for every feature in your source code, you write another piece of code - the test - that calls the feature, and examines the result. Then you write a third piece of code, which calls all the tests and prints the results.

This has two huge benefits. 

One, as you add new features, tests will tell you if the changes have affected any previous features. The manual way, you'd often find out you broke something long after you wrote it, maybe in the worst case when users started reporting a problem. Automated testing tells you something broke in seconds, in private, instead of days later, in public. 

Two, writing feature code in such a way that test code can call it actually has the side effect of producing many fewer bugs. Testable code has to be well defined, single purpose, and self contained. In other words, simple. Turns out simple code leaves much fewer places for bugs to hide. 

A third, hidden benefit: your test code becomes documentation of source code. New developer wants to learn how the project works? Just read the tests. 

## Test in order to build
Doing testing is like building with _raw_ spaghetti. Put a piece on top, the pieces below don't shift. Pull one piece out from the side, none of the other pieces come with it. Arrange pieces in a square, a dab of glue at the corners, walls and towers start to rise. 

# Git commit 
```
git show 890c7a994b37e19cf3aa85f42241f7c40277e496

Author: Elias Carlston <elias@eliascarlston.com>
Date:   Mon May 18 10:26:59 2020 -0400

    Reset 20200518

diff --git a/assets/styles/style.css b/assets/styles/style.css
deleted file mode 100644
index f9cf2ac..0000000
--- a/assets/styles/style.css
+++ /dev/null
@@ -1,3 +0,0 @@
-.ttt-board td {
-  padding: 1em;
-}
diff --git a/index.html b/index.html
deleted file mode 100644
...
```
# Steps
No actions on a blank commit. Since automated tests are so important, we'll start setting them up in the next one. 
