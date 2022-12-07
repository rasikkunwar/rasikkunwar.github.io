describe("sum", function () {
    it("Sum of [10,5,5] us 20", function () {
      assert.equal(sum([10, 5, 5]), 20);
    });
  });
  
  describe("multiply", function () {
    it("Multiple of [10,5,5] us 250", function () {
      assert.equal(multiply([10, 5, 5]), 250);
    });
  });
  
  describe("reverse", () => {
    it("Reverse of 'application' is 'noitacilppa'", () => {
      assert.equal(reverse("application"), "noitacilppa");
    });
  });
  
  describe("filter long words", () => {
    it("the words longer than length 3 in array ['james', 'jen', 'harry', 'jim'] is ['james', 'harry']", () => {
      assert.equal(
        JSON.stringify(filterLongWords(['james', 'jen', 'harry', 'jim'], 3)),
        JSON.stringify(["james", "harry"])
      );
    });
  });