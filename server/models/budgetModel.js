const db = require("../database/db");

const getBudgets = () => {
  return new Promise((resolve, reject) => {
    db.all(
      "SELECT * FROM budgets",
      [],
      (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      }
    );
  });
};

const saveBudget = (
  category,
  limitAmount
) => {
  return new Promise((resolve, reject) => {
    db.run(
      `
      INSERT OR REPLACE INTO budgets
      (category, limitAmount)
      VALUES (?, ?)
      `,
      [category, limitAmount],
      function (err) {
        if (err) reject(err);
        else resolve();
      }
    );
  });
};

module.exports = {
  getBudgets,
  saveBudget,
};