const { v4: uuidv4 } = require("uuid");

const {
  getAllExpenses,
  createExpense,
  updateExpense,
  deleteExpense
} = require("../models/expenseModel");

const getExpenses = async (req, res) => {
  try {
    const expenses = await getAllExpenses();

    res.status(200).json({
      success: true,
      data: expenses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const addExpense = async (req, res) => {
  try {
    const { amount, category, date, note } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({
        success: false,
        message: "Amount must be greater than 0",
      });
    }

    if (!category) {
      return res.status(400).json({
        success: false,
        message: "Category is required",
      });
    }

    const expense = {
      id: uuidv4(),
      amount,
      category,
      date,
      note,
    };

    const newExpense = await createExpense(expense);

    res.status(201).json({
      success: true,
      data: newExpense,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const editExpense = async (req, res) => {
  try {
    const { id } = req.params;

    const { amount, category, date, note } = req.body;

    const updated = await updateExpense(id, {
      amount,
      category,
      date,
      note
    });

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "Expense not found"
      });
    }

    res.json({
      success: true,
      message: "Expense updated successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const removeExpense = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await deleteExpense(id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Expense not found"
      });
    }

    res.json({
      success: true,
      message: "Expense deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  getExpenses,
  addExpense,
  editExpense,
  removeExpense
};