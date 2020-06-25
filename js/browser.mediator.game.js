document.addEventListener("DOMContentLoaded", ()=>{
  const myBoard = boardGameFactory(
    board.buildBoard(), 
    module.exports()
  );
  document.querySelector("body").appendChild(myBoard);
});

function boardGameFactory(board, game) {
  communication.communicate("gameStatus")
    .then(respText =>  {
      if (respText === "not started") {
        communication.communicate("newGame")
          .catch(e => alert("error: " + e.message));
      }
    }).catch(e => alert("error: " + e.message));
  board.game = game;
  board.takeTurn = function takeTurn (position) {
    board.game.takeTurn(position);
    board.markCell(position);
  };
  return board;
}
