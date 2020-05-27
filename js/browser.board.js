document.addEventListener("DOMContentLoaded", ()=>{
  const myTable = board.buildTable();
  document.querySelector("body").appendChild(myTable);
});

const board = {
  buildCell () { return document.createElement("td"); },
  buildRow () {
    const myRow = document.createElement("tr");
    for (var i=0; i<3; i++) {
      myRow.appendChild(this.buildCell());
    }
    return myRow;
  },
  buildTable () {
    const myTable = document.createElement("table");
    for (var i=0; i<3; i++) {
      myTable.appendChild(this.buildRow());
    }
    return myTable;
  },
};
