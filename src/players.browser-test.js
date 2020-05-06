document.addEventListener("DOMContentLoaded", ()=>{
  const playerInput = document.getElementById("player-one-name");
  playerInput.value = "Elias";
  playerInput.dispatchEvent(new Event("change"));
  console.log("playerInput", ttt.players.x === "Elias");
});
