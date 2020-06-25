const communication = {
  communicate (action, parameter) {
    const urlFragment = parameter !== undefined ?
      this.urlTable[action] + "/" + parameter.toString() :
      this.urlTable[action];

    return this.doFetch(urlFragment)
      .then(resp => {
        if (resp.status === 200) {
          return resp.text();
        }
        const errMessage = resp.text();
        throw new Error(`${action} ${resp.status} ${errMessage}`);
      }).catch(e => {
        alert("error: " + e.message);
        throw new Error(e.message);
      });
  },
  doFetch (urlFragment) {
    const hostDomain = "http://localhost:8080/";
    const urlFull = hostDomain + urlFragment;
    return fetch(urlFull);
  },
  urlTable: {
    gameStatus: "gamestatus",
    newGame: "newgame",
    takeTurn: "taketurn",
  },
};
