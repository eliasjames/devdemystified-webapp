document.addEventListener("DOMContentLoaded", ()=>{
  const myBoard = board.buildBoard();
  document.querySelector("body").appendChild(myBoard);
});

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
    const myBoard = document.createElement("table");
    for (var i=0; i<3; i++) {
      myBoard.appendChild(this.buildRow(i));
    }
    return myBoard;
  },
};
