const express =
  require("express");

const {
  fetchBudgets,
  addBudget,
} = require(
  "../controllers/budgetController"
);

const router =
  express.Router();

router.get(
  "/",
  fetchBudgets
);

router.post(
  "/",
  addBudget
);

module.exports = router;