import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import SummaryCards from "../components/SummaryCards";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseTable from "../components/ExpenseTable";

import API from "../services/expenseApi";

function Dashboard() {

  const [summary, setSummary] = useState(null);
  const [expenses, setExpenses] =useState([]);
  const [editingExpense, setEditingExpense] = useState(null);
  const clearEditing = () => {setEditingExpense(null);
};
  const handleEdit = (expense) => {
  setEditingExpense(expense);
  };

  useEffect(() => {
    fetchSummary();
    fetchExpenses();
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