require("dotenv").config();
require("./database/db");

const express = require("express");
const cors = require("cors");
const expenseRoutes = require("./routes/expenseRoutes");
const budgetRoutes = require("./routes/budgetRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/expenses", expenseRoutes);
app.use("/api/budgets", budgetRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "CoinTrail API Running"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});