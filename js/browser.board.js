document.addEventListener("DOMContentLoaded", ()=>{
  document.querySelectorAll("td").forEach(eachTD => {
    eachTD.addEventListener("click", (e)=>{
      console.log(e.target);
    });
  });
});

const board = {
  buildCell () { return document.createElement("td"); },
  buildRow () {
    const myRow = document.createElement("tr");
    for (var i=0; i<3; i++) {
      myRow.appendChild(this.buildCell());
    }
    return myRow;
  },
  buildTable () { return document.createElement("table"); }
};
