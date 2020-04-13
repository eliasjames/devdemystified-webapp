describe("The DOM layer", function() {
  it("smoke test", function() {
    let par = document.createElement("P");
    const text = document.createTextNode("some text");
    par.appendChild(text);
    document.body.appendChild(par);
    const parCount = document.getElementsByTagName("P");

    expect(document.body.innerHTML, 'not to be empty');
    expect(parCount.length, 'to be', 1);
  });
});
