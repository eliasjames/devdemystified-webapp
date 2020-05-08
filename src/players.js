const tttPlayers = {
  init() {
    this.parentElement = document.getElementById("players");
    this.insertFields(0);
    this.insertFields(1);
  },
  insertFields(playerNumber) {
    const playerNumberFormats = [
      { number: 1, label: "one", letter: "x" },
      { number: 2, label: "two", letter: "o" },
    ];

    const playerLabel = document.createElement("label");
    playerLabel.for = `player-${
      playerNumberFormats[playerNumber].label
    }-name`;
    playerLabel.innerHTML = "Player "
      + playerNumberFormats[playerNumber].number;

    const playerInput = document.createElement("input");
    playerInput.id = `player-${
      playerNumberFormats[playerNumber].label
    }-name`;

    playerInput.addEventListener("change", (e) => {
      ttt.setPlayer(
        e.target.value,
        playerNumberFormats[playerNumber].letter
      );
    });
    ttt.eventTarget.addEventListener(
      ttt.setPlayerEventName,
      (e) => {
        if (e.detail.playerLetter === playerNumberFormats[playerNumber].letter) {
          playerInput.value = e.detail.playerName;
        }
      }
    );
    playerInput.type = "text";

    const lineBreak = document.createElement("br");

    this.parentElement.appendChild(playerLabel);
    this.parentElement.appendChild(playerInput);
    this.parentElement.appendChild(lineBreak);
  },
  parentElement: undefined
}
document.addEventListener("DOMContentLoaded", ()=>{
  tttPlayers.init();
});
