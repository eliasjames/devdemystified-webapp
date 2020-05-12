const tttBoard = {
  init: function init() {
    this.tttTable = document.getElementsByClassName("ttt-board")[0];

    this.tttNewGame = document.getElementsByClassName("ttt-new-game")[0];
    this.tttNewGame.addEventListener("click", ()=>{
      this.boardNewGame();
    });

    this.tttPlayerIndicator = document.getElementsByClassName("ttt-player-indicator")[0];
    ttt.eventTarget.addEventListener("update-player-indicator", (e)=>{
      this.tttPlayerIndicator.innerHTML = "Current player: " + ttt.getCurrentPlayer();
    });
  },
  createRow: function createRow(rowNumber) {
    const tableRow = document.createElement("tr");
    for (let i=0; i<3; i++) {
      const eachCell = document.createElement("td");
      const cellID = i + rowNumber * 3;
      eachCell.innerHTML = ttt.board[cellID] === undefined ?
        "-"
        : ttt.board[cellID];
      eachCell.setAttribute("data-ttt-cell-id", cellID);
      eachCell.addEventListener("click", ()=>{
        if (!ttt.getCurrentStatus()) {
          fetch("http://localhost:8080/take-turn/" + cellID)
            .then(resp => {
              eachCell.innerHTML = ttt.takeTurn(cellID);
            });
        }
      });
      tableRow.appendChild(eachCell);
    }
    return tableRow;
  },
  fillTable: function fillTable() {
    for (let i=0; i<3; i++) {
      this.tttTable.appendChild(
        this.createRow(i)
      );
    }
  },
  boardNewGame: function boardNewGame() {
    fetch("http://localhost:8080/newgame")
    .then(resp => {
      ttt.newGame("two-player");
      this.tttTable.innerHTML = "";
      this.fillTable();
    });
  },
}

document.addEventListener("DOMContentLoaded", () => {
  tttBoard.init();
  tttBoard.boardNewGame();
});
