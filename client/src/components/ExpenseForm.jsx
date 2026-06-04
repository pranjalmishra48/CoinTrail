import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaPlusCircle, FaEdit } from "react-icons/fa";

import API from "../services/expenseApi";

function ExpenseForm({
  onExpenseAdded,
  editingExpense,
  clearEditing,
}) {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
  } = useForm();

  useEffect(() => {
    if (editingExpense) {
      setValue("amount", editingExpense.amount);
      setValue("category", editingExpense.category);
      setValue("date", editingExpense.date);
      setValue("note", editingExpense.note);
    }
  }, [editingExpense, setValue]);

  const onSubmit = async (data) => {
    try {
      if (editingExpense) {
        await API.put(
          `/expenses/${editingExpense.id}`,
          data
        );

        toast.success(
          "Expense Updated Successfully"
        );

        clearEditing();
      } else {
        await API.post(
          "/expenses",
          data
        );

        toast.success(
          "Expense Added Successfully"
        );
      }

      reset();
      onExpenseAdded();

    } catch (error) {

      toast.error(
        "Operation Failed"
      );

      console.error(error);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">

      <div className="flex items-center gap-3 mb-6">

        {editingExpense ? (
          <FaEdit
            className="text-amber-500"
            size={24}
          />
        ) : (
          <FaPlusCircle
            className="text-blue-600"
            size={24}
          />
        )}

        <div>
          <h2 className="text-2xl font-bold">
            {editingExpense
              ? "Edit Expense"
              : "Add New Expense"}
          </h2>

          <p className="text-sm text-gray-500">
            {editingExpense
              ? "Update expense details"
              : "Record a new expense"}
          </p>
        </div>

      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >

        <input
          type="number"
          placeholder="Enter Amount"
          className="
          border
          border-gray-300
          rounded-xl
          p-3
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          transition
          "
          {...register("amount", {
            required: true,
            min: 1,
          })}
        />

        <select
          className="
          border
          border-gray-300
          rounded-xl
          p-3
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          transition
          "
          {...register("category", {
            required: true,
          })}
        >
          <option value="">
            Select Category
          </option>

          <option value="Food">
            🍔 Food
          </option>

          <option value="Transport">
            🚗 Transport
          </option>

          <option value="Bills">
            📄 Bills
          </option>

          <option value="Entertainment">
            🎬 Entertainment
          </option>

          <option value="Other">
            📦 Other
          </option>
        </select>

        <input
          type="date"
          className="
          border
          border-gray-300
          rounded-xl
          p-3
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          transition
          "
          {...register("date", {
            required: true,
          })}
        />

        <input
          type="text"
          placeholder="Add a note (optional)"
          className="
          border
          border-gray-300
          rounded-xl
          p-3
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          transition
          "
          {...register("note")}
        />

        <div className="md:col-span-2 flex gap-3">

          <button
            type="submit"
            className="
            bg-blue-600
            hover:bg-blue-700
            text-white
            font-medium
            px-6
            py-3
            rounded-xl
            shadow-sm
            transition
            "
          >
            {editingExpense
              ? "Update Expense"
              : "Add Expense"}
          </button>

          {editingExpense && (
            <button
              type="button"
              onClick={() => {
                clearEditing();
                reset();
              }}
              className="
              bg-gray-200
              hover:bg-gray-300
              text-gray-700
              font-medium
              px-6
              py-3
              rounded-xl
              transition
              "
            >
              Cancel
            </button>
          )}

        </div>

      </form>

    </div>
  );
}

export default ExpenseForm;