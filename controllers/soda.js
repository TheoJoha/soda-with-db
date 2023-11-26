const express = require("express")
const Soda = require("../models/soda")

// create router
const router = express.Router()

// routes



// SEED ROUTE
router.get("/seed", async (req, res) => {
    await Soda.deleteMany()
    const sodas = await Soda.create([
        {name: "Orange Soda", color: "Orange", readyToSell: true},
        {name: "Cola", color: "Black", readyToSell: true},
        {name: "Root beer", color: "brown", readyToSell: false}
    ])
    res.send("hey")
})


// export the router
module.exports = router