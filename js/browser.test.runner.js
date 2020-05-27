const testRunner = {
  testAll(testArray){
    testArray.forEach(e => {
      this.testAndReport(e.label, e.condition);
    });
  },
  testAndReport(label, condition) {
    if (condition()) {
      console.log(label + " passed");
    } else {
      alert(label + " failed");
    }
  }
};
