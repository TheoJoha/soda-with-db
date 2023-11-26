const mongoose = require("./connection")

// SODA SCHEMA - definition or shape of the data-type

const sodaSchema = new mongoose.Schema({
    name: {type: String, required: true},
    color: {type: String},
    readyToSell: Boolean
}, {timestamps: true})

// SODA model - interface with the database for sodas
const Soda = mongoose.model("Soda", sodaSchema)

// export soda model
module.exports = Soda




