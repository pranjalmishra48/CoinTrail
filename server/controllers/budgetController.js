const {
  getBudgets,
  saveBudget,
} = require("../models/budgetModel");

const fetchBudgets = async (
  req,
  res
) => {
  try {
    const budgets =
      await getBudgets();

    res.json({
      success: true,
      data: budgets,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

const addBudget = async (
  req,
  res
) => {
  try {

    const {
      category,
      limitAmount,
    } = req.body;

    await saveBudget(
      category,
      limitAmount
    );

    res.json({
      success: true,
      message:
        "Budget Saved",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  fetchBudgets,
  addBudget,
};