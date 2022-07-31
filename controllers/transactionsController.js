const express = require("express");
const transactions = express.Router();

const transactionsArray = require("../models/transaction.js");
const { validateURL } = require("../models/validations");

transactions.get("/", (req, res) => {
  res.json(transactionsArray)
});

transactions.get("/:arrayIndex", (req, res) => {
  const { arrayIndex } = req.params;
  if (!transactionsArray[arrayIndex]) {
    res.redirect(404).send({error:"no log found - sorry"});
  } else {
    res.json(transactionsArray[arrayIndex]);
  }
});

transactions.post("/", (req, res) => {
  transactionsArray.push(req.body);
  res.json(transactionsArray[transactionsArray.length - 1]);
});

transactions.delete("/:arrayIndex", (req, res) => {
  const {arrayIndex } =  req.params;
  const deletedtransactions = transactionsArray.splice(arrayIndex, 1)
  res.status(200).json(deletedtransactions)
});

transactions.put("/:arrayIndex", (req, res) => {
  const {arrayIndex } =  req.params;
  transactionsArray[arrayIndex] = req.body
  res.status(200).json(transactionsArray[arrayIndex])
})
module.exports = transactions;