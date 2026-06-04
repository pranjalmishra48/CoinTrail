const db = require("../database/db");

const getAllExpenses = () => {
  return new Promise((resolve, reject) => {
    db.all(
      `
      SELECT * FROM expenses
      ORDER BY date DESC
      `,
      [],
      (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      }
    );
  });
};

const createExpense = (expense) => {
  return new Promise((resolve, reject) => {
    db.run(
      `
      INSERT INTO expenses
      (id, amount, category, date, note)
      VALUES (?, ?, ?, ?, ?)
      `,
      [
        expense.id,
        expense.amount,
        expense.category,
        expense.date,
        expense.note
      ],
      function (err) {
        if (err) reject(err);
        else resolve(expense);
      }
    );
  });
};

const updateExpense = (id, expense) => {
  return new Promise((resolve, reject) => {
    db.run(
      `
      UPDATE expenses
      SET amount = ?, category = ?, date = ?, note = ?
      WHERE id = ?
      `,
      [
        expense.amount,
        expense.category,
        expense.date,
        expense.note,
        id
      ],
      function (err) {
        if (err) reject(err);
        else resolve(this.changes);
      }
    );
  });
};

const deleteExpense = (id) => {
  return new Promise((resolve, reject) => {
    db.run(
      `
      DELETE FROM expenses
      WHERE id = ?
      `,
      [id],
      function (err) {
        if (err) reject(err);
        else resolve(this.changes);
      }
    );
  });
};

module.exports = {
  getAllExpenses,
  createExpense,
  updateExpense,
  deleteExpense
};