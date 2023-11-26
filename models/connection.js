require("dotenv").config()
const mongoose = require("mongoose")

// establish connection
mongoose.connect(process.env.DATABASE_URL)

// connection events
mongoose.connection
    .on("open", () => {
        console.log("Connected to Mongo")
    })
    .on("close", () => {
        console.log("Disconnected from Mongo")
    })
    .on("error", (error) => {
        console.log(`${error}`)
    })

// export mongoose object
module.exports = mongoose