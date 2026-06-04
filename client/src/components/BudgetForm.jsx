import { useState } from "react";
import toast from "react-hot-toast";
import API from "../services/expenseApi";

function BudgetForm({ onBudgetSaved }) {
  const [category, setCategory] =
    useState("");

  const [limitAmount, setLimitAmount] =
    useState("");

  const saveBudget = async (e) => {
    e.preventDefault();

    try {
      await API.post("/budgets", {
        category,
        limitAmount,
      });

      toast.success(
        "Budget Saved"
      );

      setCategory("");
      setLimitAmount("");

      onBudgetSaved();

    } catch (error) {

      toast.error(
        "Failed to Save Budget"
      );

      console.error(error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mb-8">

      <h2 className="text-xl font-semibold mb-4">
        Set Budget
      </h2>

      <form
        onSubmit={saveBudget}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >

        <select
          value={category}
          onChange={(e) =>
            setCategory(
              e.target.value
            )
          }
          className="border rounded-lg p-3"
          required
        >
          <option value="">
            Select Category
          </option>

          <option value="Food">
            Food
          </option>

          <option value="Transport">
            Transport
          </option>

          <option value="Bills">
            Bills
          </option>

          <option value="Entertainment">
            Entertainment
          </option>

          <option value="Other">
            Other
          </option>
        </select>

        <input
          type="number"
          placeholder="Budget Amount"
          value={limitAmount}
          onChange={(e) =>
            setLimitAmount(
              e.target.value
            )
          }
          className="border rounded-lg p-3"
          required
        />

        <button
          type="submit"
          className="
          bg-green-600
          text-white
          rounded-lg
          p-3
          hover:bg-green-700
          "
        >
          Save Budget
        </button>

      </form>

    </div>
  );
}

export default BudgetForm;