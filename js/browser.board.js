let myBoard;

const board = {
  buildCell (cellID) {
    const myCell = document.createElement("td");
    const myCellID = cellID;
    myCell.setAttribute("data-cell-id", cellID);
    myCell.addEventListener("click", (e)=>{
      myBoard.dispatchEvent(new CustomEvent(
        "clickCell",
        { detail: myCellID },
      ));
    });
    myCell.addEventListener("markCell", (e)=>{
      if (e.detail === 1) myCell.innerHTML = "X";
      if (e.detail === 2) myCell.innerHTML = "O";
    });
    return myCell;
  },
  buildRow (rowID) {
    const myRow = document.createElement("tr");
    for (var i=0; i<3; i++) {
      myRow.appendChild(
        this.buildCell(
          (rowID * 3) + i
        )
      );
    }
    return myRow;
  },
  buildBoard () {
    myBoard = document.createElement("table");
    for (var i=0; i<3; i++) {
      myBoard.appendChild(this.buildRow(i));
    }
    myBoard.markCell = this.markCell;
    return myBoard;
  },
  markCell (cellNumber, playerID) {
    const rowIndex = Math.floor(cellNumber / 3);
    const cellIndex = cellNumber % 3;
    const myCell = myBoard.children[rowIndex].children[cellIndex];
    myCell.dispatchEvent(new CustomEvent(
      "markCell",
      { detail: playerID },
    ));
  },
};
