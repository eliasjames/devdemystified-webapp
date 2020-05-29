document.addEventListener("DOMContentLoaded", ()=>{
  const myBoard = board.buildBoard();
  document.querySelector("body").appendChild(myBoard);
});

const board = {
  buildCell () {
    const myCell = document.createElement("td");
    myCell.addEventListener("click", (e)=>{
      myCell.dispatchEvent(new Event("markCell"));
    });
    myCell.addEventListener("markCell", (e)=>{
      myCell.innerHTML = "something";
    });
    return myCell;
  },
  buildRow () {
    const myRow = document.createElement("tr");
    for (var i=0; i<3; i++) {
      myRow.appendChild(this.buildCell());
    }
    return myRow;
  },
  buildBoard () {
    const myBoard = document.createElement("table");
    for (var i=0; i<3; i++) {
      myBoard.appendChild(this.buildRow());
    }
    return myBoard;
  },
};
