testRunner.testAll([
  {
		"label": "mediator marks board on game turn",
		"condition": ()=>{
      const myGame = gameCoreFactory();
      const myBoard = board.buildBoard();
      const myMediator = boardGameFactory(myBoard, myGame);
      myMediator.takeTurn(4);
      return myBoard.children[1].children[1].innerHTML !== ""
        && myGame.board[4] !== undefined;
    }
	},
]);
