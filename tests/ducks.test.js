const chai = require("chai"); // assertions

const chaiHttp = require("chai-http"); // http requests

chai.use(chaiHttp); // adds the http plugin

const server = require("../index"); // imports the server so I can send requests to it

const { duckModel } = require("../db");

const mongoose = require("mongoose")

describe("duck tests", () => {

    let testDuck;

    beforeEach(async () => {
        try {
            await duckModel.deleteMany({});
            testDuck = await duckModel.create({
                name: "Barry",
                colour: "Blue",
                disposition: "Content"
            });
            testDuck = JSON.parse(JSON.stringify(testDuck));
            console.log();
        } catch(err) {
            console.error(err)
        }
    })



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
    });

    it("should get a duck", (done) => {
        chai.request(server).get("/ducks/getDuck/" + testDuck._id).end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body).to.include(testDuck);
            done(); // tells mocha the test has finished
        })
    });

    it("should get all ducks", (done) => {
        chai.request(server).get("/ducks/getAllDucks/").end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body).to.deep.include(testDuck);
            done(); // tells mocha the test has finished
        })
    });

    it("should update a duck", (done) => {
        chai.request(server).patch("/ducks/updateDuck/" + testDuck._id).query({
            name: "Harry"
        }).end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(200);
            testDuck.name = "Harry";
            chai.expect(res.body).to.include(testDuck);
            done(); // tells mocha the test has finished
        })
    });

    it("should delete a duck", (done) => {
        chai.request(server).delete("/ducks/removeDuck/" + testDuck._id).end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body).to.include(testDuck);
            done(); // tells mocha the test has finished
        })
    });

    after((done) => {
        mongoose.disconnect(() => done());
    })

})