document.addEventListener("DOMContentLoaded", ()=>{
  const playerInput = document.getElementById("player-one-name");

  // set player x name through UI input
  playerInput.value = "Elias";
  playerInput.dispatchEvent(new Event("change"));
  testRunner.testAndReport("playerInputChangesTTT", ttt.players.x === "Elias");

  // set player x name through model method
  ttt.setPlayer("Junior", "x");
  testRunner.testAndReport("TTTChangesPlayerInput", playerInput.value === "Junior");

  // set player o name, player x name unchanged
  const playerTwoInput = document.getElementById("player-two-name");
  ttt.setPlayer("Mudd", "o");
  testRunner.testAndReport("TTTChangesInputForPlayerO", playerTwoInput.value === "Mudd");
  testRunner.testAndReport("ChangeODoesNotChangeX", playerInput.value === "Junior");
});
