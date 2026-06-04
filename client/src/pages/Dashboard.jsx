import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import SummaryCards from "../components/SummaryCards";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseTable from "../components/ExpenseTable";
import FilterPanel from "../components/FilterPanel";
import ExpenseChart from "../components/ExpenseChart";
import BudgetForm from "../components/BudgetForm";
import BudgetIndicator from "../components/BudgetIndicator";

import API from "../services/expenseApi";

function Dashboard() {

  const [summary, setSummary] = useState(null);

  const [expenses, setExpenses] =useState([]);

  const [editingExpense, setEditingExpense] = useState(null);

  const [budgets, setBudgets] = useState([]);

  const clearEditing = () => {
    setEditingExpense(null);
  };
  
  const handleEdit = (expense) => {
    setEditingExpense(expense);
  };

  useEffect(() => {
    fetchSummary();
    fetchExpenses();
    fetchBudgets();
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

  const fetchExpenses = async () => {
  try {

    const response =
      await API.get("/expenses");

    setExpenses(
      response.data.data
    );

    } catch (error) {
    console.error(error);
  }
  };

  const deleteExpense = async (
  id) => {
   try {

    await API.delete(
      `/expenses/${id}`
    );

    fetchSummary();
    fetchExpenses();

   } catch (error) {
    console.error(error);
   }
  };

  const applyFilters = async (filters) => {
    try {
      let query =
      "/expenses?";

    if (filters.category) {
      query += `category=${filters.category}&`;
    }

    if (filters.startDate && filters.endDate) {
      query +=
        `startDate=${filters.startDate}&endDate=${filters.endDate}`;
    }

    const response = await API.get(query);

    setExpenses( response.data.data);

    } catch (error) {

    console.error(error);

    }
  };

  const fetchBudgets = async () => {
   try { const response =
    await API.get("/budgets");
    setBudgets(response.data.data);
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

        <ExpenseChart summary={summary} />

        <BudgetForm onBudgetSaved={fetchBudgets}/>

        <BudgetIndicator budgets={budgets} 
          summary={summary}/>

        <FilterPanel onFilter={applyFilters}/>

        <ExpenseForm onExpenseAdded={() => {
          fetchSummary();
          fetchExpenses();
          }}

          editingExpense={editingExpense}
          clearEditing={clearEditing}
         />

        <ExpenseTable expenses={expenses}
          onDelete={deleteExpense}
          onEdit={handleEdit}/>

      </div>
    </>
  );
}

export default Dashboard;