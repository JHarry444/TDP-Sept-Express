const {sum} = require("../maths");
const { expect } = require("chai");

describe("maths tests", () => { // set of tests
    it("should equal 2", () => { // single test
        expect(sum(1, 1)).to.equal(2);

        // expect:
        // if (sum(1,1) === 2) {
        //     pass();
        // } else {
        //     fail();
        // }
     })
     it.skip("should fail", () => {
        expect(sum(1, 1)).to.equal(3);
     })
});