const express = require("express");

const {
  getExpenses,
  addExpense,
  editExpense,
  removeExpense,
  fetchSummary
} = require("../controllers/expenseController");

const router = express.Router();

router.get("/summary", fetchSummary);

router.get("/", getExpenses);

router.post("/", addExpense);

router.put("/:id", editExpense);

router.delete("/:id", removeExpense);

module.exports = router;