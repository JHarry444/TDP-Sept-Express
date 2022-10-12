const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const duckRoutes = require("./routes/ducks");

app.use(bodyParser.json());

// app.use - adds a piece of middleware to the chain
app.use((req, res, next) => {
    console.log("Request recevied at", new Date());
   return next(); // calls the next func
})

// IS the next function
app.use((req, res, next) => {
    console.log("I just exist to be an example");
    // return next("ruh-roh");
    return  next();
})

app.get("/hello", (req, res) => {
    res.send("Hello, World!")
});

app.use("/ducks", duckRoutes);

app.use((req, res) => {
    console.log("Thom example");
})

app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.message || "oops");
})
const server = app.listen(4494, () => console.log(`Server successfully started on port ${server.address().port}`));

module.exports = server; // exported so I can use it for tests