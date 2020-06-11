document.addEventListener("DOMContentLoaded", ()=>{
  const myBoard = boardGameFactory(
    board.buildBoard(), 
    module.exports()
  );
  document.querySelector("body").appendChild(myBoard);
});

function boardGameFactory(board, game) {
  board.game = game;
  board.takeTurn = function takeTurn (position) {
    board.game.takeTurn(position);
    board.markCell(position);
  };
  return board;
}
