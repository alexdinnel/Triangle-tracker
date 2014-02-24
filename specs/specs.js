describe("Triangle", function() {
  describe("type", function() {
    it("returns the type of triangle it is", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.name = "Equilateral";
      testTriangle.invalid = false;
      testTriangle.type().should.equal("Equilateral triangle");
    });
    it("returns this is a invalid triangle", function() {
      var testTriangle2 = Object.create(Triangle);
      testTriangle2.name = "invalid";
      testTriangle2.invalid = true;
      testTriangle2.type().should.equal("invalid triangle");
    })
  });
});

