document.addEventListener("DOMContentLoaded", ()=>{
  const playerInput = document.getElementById("player-one-name");
  playerInput.addEventListener("change", (e) => {
    ttt.setPlayer(e.target.value);
  });
});
