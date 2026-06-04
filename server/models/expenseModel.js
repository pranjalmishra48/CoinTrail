const db = require("../database/db");

const getAllExpenses = (filters = {}) => {
  return new Promise((resolve, reject) => {
    let query = `
      SELECT *
      FROM expenses
      WHERE 1=1
    `;

    let params = [];

    if (filters.category) {
      query += ` AND category = ?`;
      params.push(filters.category);
    }

    if (filters.startDate && filters.endDate) {
      query += ` AND date BETWEEN ? AND ?`;
      params.push(filters.startDate);
      params.push(filters.endDate);
    }

    query += ` ORDER BY date DESC`;

    db.all(query, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
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

const getSummary = () => {
  return new Promise((resolve, reject) => {

    db.all(
      `
      SELECT category,
      SUM(amount) as total
      FROM expenses
      GROUP BY category
      `,
      [],
      (err, categoryTotals) => {

        if (err) {
          reject(err);
          return;
        }

        db.get(
          `
          SELECT *
          FROM expenses
          ORDER BY amount DESC
          LIMIT 1
          `,
          [],
          (err, highestExpense) => {

            if (err) {
              reject(err);
              return;
            }

            db.get(
              `
              SELECT SUM(amount) as monthlyTotal
              FROM expenses
              `,
              [],
              (err, totalResult) => {

                if (err) {
                  reject(err);
                } else {
                  resolve({
                    monthlyTotal:
                      totalResult.monthlyTotal || 0,

                    highestExpense,

                    categoryTotals,
                  });
                }
              }
            );
          }
        );
      }
    );
  });
};



module.exports = {
  getAllExpenses,
  createExpense,
  updateExpense,
  deleteExpense,
  getSummary
};