const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/tdp_db", {
    useNewUrlParser: true
}).then(() => console.log("Connected to MongoDB")).catch(err => console.error(err));

// makes a new Schema
const duckSchema = new mongoose.Schema({
    disposition: {
        type: String,
        required: true
    },
    colour: String,
    name: {
        type: String,
        required: true
    }
});

// will create a PLURALISED version
const duckModel = mongoose.model("duck", duckSchema); // object with all the mongo functions

module.exports = {
    duckModel
}