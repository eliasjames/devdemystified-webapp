testRunner.testAll([
  {
		"label": "smoke",
		"condition": ()=>{ return 1 === 1; }
	},
  {
		"label": "built board is a DOM element",
		"condition": ()=>{
      const myBoard = board.buildBoard();
      return myBoard instanceof HTMLElement;
		}
	},
  {
		"label": "build a cell",
		"condition": ()=>{
			const myCell = board.buildCell();
			return myCell instanceof HTMLElement;
		}
	},
  {
		"label": "build a row",
		"condition": ()=>{
			const myRow = board.buildRow();
			return myRow instanceof HTMLElement;
		}
	},
  {
		"label": "row has three cells",
		"condition": ()=>{
			const myRow = board.buildRow();
			return myRow.children.length === 3;
		}
	},
  {
		"label": "board has three rows",
		"condition": ()=>{
			const myBoard = board.buildBoard();
			return myBoard.children.length === 3;
		}
	},
  {
    "label": "clicking cell marks cell",
    "condition": ()=>{
      const myBoard = board.buildBoard();
      const myCell = myBoard.children[0].children[0];
      let test;

      myCell.click();
      return myCell.innerHTML !== undefined;
    }
  },
  {
    "label": "cell has ID",
    "condition": ()=>{
      const myBoard = board.buildBoard();
      const myCell = myBoard.children[1].children[1];
      const dataCellId = myCell.getAttribute("data-cell-id");
      return dataCellId === "4";
    }
  },
]);
