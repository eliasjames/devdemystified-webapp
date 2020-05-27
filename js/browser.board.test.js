testRunner.testAll([
  {
		"label": "smoke",
		"condition": ()=>{ return 1 === 1; }
	},
  {
		"label": "built table is a DOM element",
		"condition": ()=>{
      const myTable = board.buildTable();
      return myTable instanceof HTMLElement;
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
		"label": "table has three rows",
		"condition": ()=>{
			const myTable = board.buildTable();
			return myTable.children.length === 3;
		}
	},
]);
