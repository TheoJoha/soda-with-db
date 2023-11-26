const express = require("express")
const Soda = require("../models/soda")

// create router
const router = express.Router()

// error handler
function errorHandler(error, res) {
    res.json(error)
}

// routes



// SEED ROUTE
router.get("/seed", async (req, res) => {
    await Soda.deleteMany().catch((error) => errorHandler(error, res))
    const sodas = await Soda.create([
        {name: "Orange Soda", color: "Orange", readyToSell: true},
        {name: "Cola", color: "Black", readyToSell: true},
        {name: "Root beer", color: "brown", readyToSell: false}
    ])
    res.json(sodas)
})

// induces
// index route - get all sodas
router.get("/", async (req, res) => {
    const sodas = await Soda.find({}).catch((error) => errorHandler(error, res))
    res.render("index.ejs", {sodas})
})

// new route - get - get the new form
router.get("/new", (req, res) => {
    res.render("new.ejs")
})

// destroy route - DELETE - DELETES ONE SODA

// UPDATE ROUTE - PUT - updates one soda

// CREATE ROUTE
router.post("/", async (req, res) => {

    //make sure readyToSell is true or false
    req.body.readyToSell = Boolean(req.body.readyToSell)
    
    // create the soda
    await Soda.create(req.body).catch((error) => errorHandler(error, res))

    // redirect back to main page
    res.redirect("/soda")
})

// SHOW ROUTE - GET - gets one soda
router.get("/:id", async (req, res) => {
    const soda = await Soda.findById(req.params.id)
    res.render("show.ejs", {soda})
})


// export the router
module.exports = router