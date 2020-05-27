const testRunner = {
  testAndReport(label, condition) {
    if (condition()) {
      console.log(label + " passed");
    } else {
      alert(label + " failed");
    }
  }
};
