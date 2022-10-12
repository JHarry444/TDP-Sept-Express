const { expect } = require("chai");
const reverseFact = require("../solutions/factorial");

describe("test factorial", () => {
    it("should return 5!", () => {
        expect(reverseFact(120)).to.equal("5!");
    });

    it("should return NONE", () => {
        expect(reverseFact(150)).to.equal("NONE");
    });
})