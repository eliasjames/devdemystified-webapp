testRunner.testAll([
  {
    "label": "communication smoke",
    "condition": ()=>{ return communication !== undefined; }
  },
  {
    "label": "communication returns promise",
    "condition": ()=>{
      return communication.communicate("gameStatus") instanceof Promise;
    }
  },
]);
