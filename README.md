# devdemystified-webapp
Full stack web app for training purposes.

The intention of this project is to explain the fundamentals of software development to a user who may have no experience whatsoever. Users with software development experience may still find some of the examples helpful, as advanced and difficult concepts have been distilled down to their simplest possible examples.

The `annotations` folder contains a description of every commit in this repository. Follow the steps in each annotation in order to complete the working example.

## Contents
1. ### Prerequisites
1. ### Getting Started
1. ### Annotations

---

## Prerequisites
1. Browser
1. Node.js
1. Git
1. Text editor

#### Browser
You'll need a web browser, updated to the latest version. Chrome is strongly preferred. Firefox and Safari are supported. Other browsers may work but are not guaranteed.
#### Node.js
You will need a recent version (>6) of Node.js installed. Node is used to run JavaScript programs outside of the browser. Node is free and open source (FOSS), available [here](https://nodejs.org/en/download/). 
#### Git
Git allows us to walk through changes to codebase one at a time, and provides a unique ID to refer to each change. Like Node, Git is also FOSS. Follow [these instructions](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) to install.
#### Text editor

A text editor is a program specifically intended to edit raw text files. Word processor software like MS Word or Google Docs will NOT work, the WYSIWYG functions add "helpful" word processing data to the raw file which cause programs to error. Built-in, Windows Notepad or Mac TextEdit are enough to get by. For a much better experience, I recommend installing the FOSS editor [Atom](https://atom.io/).

## Getting started
### How it works
This repository contains step-by-step instructions on how to build a working web app. 
By following the steps, you'll build your files into a working web app. You'll run the app as you go using Node.js and the browser. If you run into a problem, you'll use Git to find what's different between your files and the examples.

###Download the repository
1. Install the prerequisites (above).
1. Create a new folder somewhere on your computer. 
2. Click the green "Code" button on this page, and choose "Download ZIP". 
3. In the new folder you created, unzip the download. 

###Reset to the beginning
The entire project is now in your folder. However, Git defaults to the most recent Git commit, which is the end of the project. 

1. 
## Annotations
Each annotation starts with the output of a `git show` command (possibly edited for clarity). 

###reading a diff
`diff` is a programming term for a format which represents the differences between two files. A full explanation of diff is available [here](https://medium.com/@eliascarlston/software-is-made-of-tiny-differences-53e1371628bc]). Git uses diff to show differences before and after files are changed. Git outputs diff's standard format, wrapped in some Git-specific info. 

The first lines are self-explanatory: Author, Date, and comment. The lines afterwards represent differences from each file before and after each commit. Minus signs indicate lines from the file before the change, plus signs from the file after. 

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

In this excerpt, the file `game.core.node.js` has been created. The 
