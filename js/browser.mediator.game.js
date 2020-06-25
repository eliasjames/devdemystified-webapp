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
      }
    });
  board.game = game;
  board.takeTurn = function takeTurn (position) {
    communication.communicate("takeTurn", position)
      .then(respText =>  {
        board.game.takeTurn(position);
        board.markCell(position);
      });
  };
  board.addEventListener("clickCell", (e)=>{
    board.takeTurn(e.detail);
  });
  return board;
}
