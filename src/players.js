document.addEventListener("DOMContentLoaded", ()=>{
  const playerInput = document.getElementById("player-one-name");
  playerInput.addEventListener("change", (e) => {
    ttt.setPlayer(e.target.value);
  });
  ttt.eventTarget.addEventListener(
    ttt.setPlayerEventName,
    (e) => {
      playerInput.value = e.detail;
    }
  );
});
