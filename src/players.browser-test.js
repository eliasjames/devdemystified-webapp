document.addEventListener("DOMContentLoaded", ()=>{
  const playerInput = document.getElementById("player-one-name");
  playerInput.value = "Elias";
  playerInput.dispatchEvent(new Event("change"));

  testRunner.testAndReport("playerInputChangesTTT", ttt.players.x === "Elias");

  ttt.setPlayer("Junior", "x");
  testRunner.testAndReport("TTTChangesPlayerInput", playerInput.value === "Junior");
});
