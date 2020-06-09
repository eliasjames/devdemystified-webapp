document.addEventListener("DOMContentLoaded", ()=>{
  const myBoard = board.buildBoard();
  document.querySelector("body").appendChild(myBoard);
});

let myBoard;

const board = {
  buildCell (cellID) {
    const myCell = document.createElement("td");
    myCell.setAttribute("data-cell-id", cellID);
    myCell.addEventListener("click", (e)=>{
      myCell.dispatchEvent(new Event("markCell"));
    });
    myCell.addEventListener("markCell", (e)=>{
      myCell.innerHTML = "something";
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
  markCell (cellNumber) {
    const rowIndex = Math.floor(cellNumber / 3);
    const cellIndex = cellNumber % 3;
    const myCell = myBoard.children[rowIndex].children[cellIndex];
    myCell.dispatchEvent(new Event("markCell"));
  },
};
