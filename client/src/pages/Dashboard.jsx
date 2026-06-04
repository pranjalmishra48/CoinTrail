import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import SummaryCards from "../components/SummaryCards";
import ExpenseForm from "../components/ExpenseForm";

import API from "../services/expenseApi";

function Dashboard() {

  const [summary, setSummary] = useState(null);

  useEffect(() => {
    fetchSummary();
  }, []);

  const fetchSummary = async () => {
    try {

      const response =
        await API.get("/expenses/summary");

      setSummary(response.data.data);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto p-6">

        <h2 className="text-3xl font-bold mb-8">
          Expense Dashboard
        </h2>

        <SummaryCards
          summary={summary}
        />

        <ExpenseForm onExpenseAdded={fetchSummary} />

      </div>
    </>
  );
}

export default Dashboard;