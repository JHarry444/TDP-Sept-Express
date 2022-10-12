const router = require("express").Router();
const { duckModel } = require("../db");

router.get("/getAllDucks", (req, res) => duckModel.find({}).then(results => res.send(results)).catch(err => next(err)));


router.get("/getDuck/:id", async (req, res, next) => {
    const {id} = req.params;
    try {
        const found = await duckModel.findById(id);
        res.send(found);
    } catch(err) {
        return next(err);
    }
});

router.post("/createDuck", async (req, res, next) => {
    if (!req.body.name) return next({ status: 400, message: "Missing name"})
    try { // attempts to create the doc
        const result = await duckModel.create(req.body);
        res.status(201).send(result);
    } catch(err) { // catches any errors
        return next(err);
    }
});


router.patch("/updateDuck/:id", async (req, res, next) => { 
    try {
        await duckModel.findByIdAndUpdate(req.params.id, req.query)
        const newDuck = await duckModel.findById(req.params.id);
        res.send(newDuck);
    } catch(err) {
        return next(err);
    }
})

const deleteMiddleware = (req, res, next) => {
    console.log("You're trying to DELETE A DUCK? YOU MONSTER!!!");
    next();
}

router.delete("/removeDuck/:id", deleteMiddleware, (req, res, next) => {
    const {id}  = req.params;
    console.log("ID:", id);
    duckModel.findByIdAndDelete(id).then(result => res.send(result)).catch(err => next(err));
});


module.exports = router;