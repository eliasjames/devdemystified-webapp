document.addEventListener("DOMContentLoaded", ()=>{
  const playerInput = document.getElementById("player-one-name");
  playerInput.value = "Elias";
  playerInput.dispatchEvent(new Event("change"));

  testRunner.testAndReport("playerInput", ttt.players.x === "Elias");
});
