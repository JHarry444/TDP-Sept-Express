const chai = require("chai"); // assertions

const chaiHttp = require("chai-http"); // http requests

chai.use(chaiHttp); // adds the http plugin

const server = require("../index"); // imports the server so I can send requests to it

describe("duck tests", () => {
    it("should create a duck", (done) => {
        const newDuck = {
            "name": "Daffy",
            "colour": "Black",
            "disposition": "eager for lunch"
        }
        chai.request(server).post("/ducks/createDuck").send(newDuck).end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(201);
            chai.expect(res.body).to.include(newDuck);
            done(); // tells mocha the test has finished
        })
    })
})