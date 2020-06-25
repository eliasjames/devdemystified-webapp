const communication = {
  communicate (action, parameter) {
    return this.doFetch(this.urlTable[action] + (parameter || ""));
  },
  doFetch (urlFragment) {
    const hostDomain = "http://localhost:8080/";
    const urlFull = hostDomain + urlFragment;
    return fetch(urlFull);
  },
  urlTable: {
    gameStatus: "gamestatus/",
  },
};
