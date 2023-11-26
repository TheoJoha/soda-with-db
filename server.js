//-----------------------------------------------
// dependencies
//-----------------------------------------------
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
 


//-----------------------------------------------
// application object
//-----------------------------------------------
const app = express()

//-----------------------------------------------
// middleware
//-----------------------------------------------
app.use(morgan("default"))
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended: true}))
app.use("/static", express.static("public"))


//-----------------------------------------------
// routes
//-----------------------------------------------
app.get("/", (req, res) => {
    res.send("Server is working")
})

//-----------------------------------------------
// server listener
//-----------------------------------------------
PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`)
})

//-----------------------------------------------
// dependencies
//-----------------------------------------------