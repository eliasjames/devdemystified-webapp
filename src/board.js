document.addEventListener("DOMContentLoaded", function pageLoad() {
  const tttTable = document.getElementsByClassName("ttt-board")[0];

  function createRow(rowNumber) {
    const tableRow = document.createElement("tr");
    for (let i=0; i<3; i++) {
      const eachCell = document.createElement("td");
      const cellID = i + rowNumber * 3;
      eachCell.innerHTML = ttt.board[cellID];
      eachCell.setAttribute("data-ttt-cell-id", cellID);
      eachCell.addEventListener("click", ()=>{
        eachCell.innerHTML = ttt.takeTurn(cellID);
      });
      tableRow.appendChild(eachCell);
    }
    return tableRow;
  }

  function fillTable() {
    for (let i=0; i<3; i++) {
      tttTable.appendChild(
        createRow(i)
      );
    }
  }
  fillTable();

  const tttNewGame = document.getElementsByClassName("ttt-new-game")[0];
  tttNewGame.addEventListener("click", ()=>{
    ttt.loadBoard([]);
    tttTable.innerHTML = "";
    fillTable();
  });
});
