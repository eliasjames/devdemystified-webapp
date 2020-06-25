const communication = {
  communicate (action, parameter) {
    return this.doFetch(this.urlTable[action] + (parameter || ""))
      .then(resp => {
        if (resp.status === 200) {
          return resp.text();
        }
        alert(action + resp.status);
      });
  },
  doFetch (urlFragment) {
    const hostDomain = "http://localhost:8080/";
    const urlFull = hostDomain + urlFragment;
    return fetch(urlFull);
  },
  urlTable: {
    gameStatus: "gamestatus/",
    newGame: "newgame",
  },
};
