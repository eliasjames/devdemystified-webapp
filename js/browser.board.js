document.addEventListener("DOMContentLoaded", ()=>{
  document.querySelectorAll("td").forEach(eachTD => {
    eachTD.addEventListener("click", (e)=>{
      console.log(e.target);
    });
  });
});
