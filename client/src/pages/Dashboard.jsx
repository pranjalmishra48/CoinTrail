import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import SummaryCards from "../components/SummaryCards";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseTable from "../components/ExpenseTable";
import FilterPanel from "../components/FilterPanel";
import ExpenseChart from "../components/Expensechart";
import BudgetForm from "../components/BudgetForm";
import BudgetIndicator from "../components/BudgetIndicator";

import API from "../services/expenseApi";

function Dashboard() {
  const [summary, setSummary] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);
  const [budgets, setBudgets] = useState([]);

  const currentMonth = new Date().toLocaleString(
    "default",
    {
      month: "long",
      year: "numeric",
    }
  );

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
      const response = await API.get(
        "/expenses/summary"
      );

      setSummary(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchExpenses = async () => {
    try {
      const response = await API.get(
        "/expenses"
      );

      setExpenses(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchBudgets = async () => {
    try {
      const response = await API.get(
        "/budgets"
      );

      setBudgets(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteExpense = async (id) => {
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

  const applyFilters = async (
    filters
  ) => {
    try {
      let query = "/expenses?";

      if (filters.category) {
        query += `category=${filters.category}&`;
      }

      if (
        filters.startDate &&
        filters.endDate
      ) {
        query += `startDate=${filters.startDate}&endDate=${filters.endDate}`;
      }

      const response = await API.get(
        query
      );

      setExpenses(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className=" min-h-screen bg-gradient-to-br from-slate-100via-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto p-6">

          {/* Hero Section */}

          <div className="bg-white rounded-3xl p-8 shadow-sm mb-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">

              <div>
                <h1 className="text-4xl font-bold text-gray-900">
                  Welcome Back 👋
                </h1>

                <p className="text-gray-600 mt-3 text-lg">
                  Track spending,
                  manage budgets,
                  and stay in control
                  of your finances.
                </p>
              </div>

              <div className="mt-5 md:mt-0">

                <div className="bg-blue-600text-white px-6 py-4 rounded-2xl shadow-md text-center">
                  <p className="text-sm opacity-90">
                    Current Month
                  </p>

                  <p className="text-xl font-bold">
                    {currentMonth}
                  </p>
                </div>

              </div>

            </div>
          </div>

          {/* Summary Cards */}

          <SummaryCards
            summary={summary}
          />

          {/* Expense Chart */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

            {/* Chart */}

            <ExpenseChart summary={summary}/>

            {/* Budget Section */}

           <div className="space-y-6">

            <BudgetForm onBudgetSaved={fetchBudgets}/>

            <BudgetIndicator budgets={budgets}
              summary={summary}/>

          </div>

         </div>

          {/* Filters */}

          <div className="mb-8">
            <FilterPanel
              onFilter={
                applyFilters
              }
            />
          </div>

          {/* Expense Form */}

          <div className="mb-8">
            <ExpenseForm
              onExpenseAdded={() => {
                fetchSummary();
                fetchExpenses();
              }}
              editingExpense={
                editingExpense
              }
              clearEditing={
                clearEditing
              }
            />
          </div>

          {/* Expense Table */}

          <ExpenseTable
            expenses={expenses}
            onDelete={deleteExpense}
            onEdit={handleEdit}
          />

          {/* Footer */}

          <footer className="text-center py-10 text-gray-500">
            Built with ❤️ using React,
            Express & SQLite | &copy; 2026 Pranjal Mishra
          </footer>

        </div>
      </div>
    </>
  );
}

export default Dashboard;
