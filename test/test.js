var expect = require("chai").expect;
var sut = require("../src/letvsvar/let_inLoops");

describe("Let in Loops Test", function () {
    it("loops correctly", function () {

        expect(sut.loadProfiles(["Sam", "Max"])).to.equal("Sam Max");
    });
});

