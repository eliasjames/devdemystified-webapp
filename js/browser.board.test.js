testRunner.testAndReport("smoke", ()=>{ return 1 === 1; });
testRunner.testAndReport("built table is a DOM element", ()=>{
  const myTable = board.buildTable();
  return myTable instanceof HTMLElement;
});
testRunner.testAndReport("build a cell", ()=>{
  const myCell = board.buildCell();
  return myCell instanceof HTMLElement;
});
testRunner.testAndReport("build a row", ()=>{
  const myRow = board.buildRow();
  return myRow instanceof HTMLElement;
});
testRunner.testAndReport("row has three cells", ()=>{
  const myRow = board.buildRow();
  return myRow.children.length === 3;
});
