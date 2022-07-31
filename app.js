const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
    console.log("this code runs for every request")
    next();
})
const transactionsController = require("./controllers/transactionsController")
app.get("/", (req, res) => {
    res.send("Welcome to the BudgetApp API")
})

app.use("/transactions", transactionsController)

app.get("*", (req, res) => {
    res.status(404).json({error: "Item not found"})
})

module.exports = app