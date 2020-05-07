const testRunner = {
  testAndReport(testName, condition) {
    if (condition) {
      console.log(testName, condition);
    } else {
      alert(`${testName}: ${condition}`); 
    }
  },
};
