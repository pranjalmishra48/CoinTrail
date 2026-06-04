const express = require("express");

const {
  getExpenses,
  addExpense,
  editExpense,
  removeExpense
} = require("../controllers/expenseController");

const router = express.Router();

router.get("/", getExpenses);

router.post("/", addExpense);

router.put("/:id", editExpense);

router.delete("/:id", removeExpense);

module.exports = router;