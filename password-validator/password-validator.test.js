describe("Password Validator", function () {
  it("should result in valid password", function () {
    const result = validatePassword("!a1b2c3d4#");
    chai.expect(result.valid).to.equal(true);
    chai.expect(result.reasons.length).to.equal(0);
  });

  it("should result in invalid password because of duplicate special character", function () {
    const result = validatePassword("!!a1b2c3d4");
    chai.expect(result.valid).to.equal(false);
    chai.expect(result.reasons.length).to.equal(1);
    chai
      .expect(result.reasons.includes("duplicate special character"))
      .to.equal(true);
  });

  it("should result in invalid password because of consecutive character", function () {
    const result = validatePassword("?ab1#c3d4!");
    chai.expect(result.valid).to.equal(false);
    chai.expect(result.reasons.length).to.equal(1);
    chai
      .expect(result.reasons.includes("consecutive character"))
      .to.equal(true);
  });

  it("should result in invalid password because of consecutive number", function () {
    const result = validatePassword("?a12c3d4!9");
    chai.expect(result.valid).to.equal(false);
    chai.expect(result.reasons.length).to.equal(1);
    chai.expect(result.reasons.includes("consecutive number")).to.equal(true);
  });

  it("should result in invalid password because of duplicate number", function () {
    const result = validatePassword("?a2b2c3d4!");
    console.log(result);
    chai.expect(result.valid).to.equal(false);
    chai.expect(result.reasons.length).to.equal(1);
    chai.expect(result.reasons.includes("duplicate number")).to.equal(true);
  });

  it("should result in invalid password because of min length", function () {
    const result = validatePassword("!a1b2c3d");
    chai.expect(result.valid).to.equal(false);
    chai.expect(result.reasons.length).to.equal(1);
    chai.expect(result.reasons.includes("min length")).to.equal(true);
  });
});
