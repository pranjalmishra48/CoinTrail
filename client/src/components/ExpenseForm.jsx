import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import API from "../services/expenseApi";

function ExpenseForm({ onExpenseAdded }) {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await API.post("/expenses", data);

      toast.success("Expense Added");

      reset();

      onExpenseAdded();

    } catch (error) {
      toast.error("Failed to add expense");
      console.error(error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mb-8">

      <h2 className="text-xl font-semibold mb-4">
        Add Expense
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >

        <input
          type="number"
          placeholder="Amount"
          className="border rounded-lg p-3"
          {...register("amount", {
            required: true,
            min: 1,
          })}
        />

        <select
          className="border rounded-lg p-3"
          {...register("category", {
            required: true,
          })}
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
          type="date"
          className="border rounded-lg p-3"
          {...register("date", {
            required: true,
          })}
        />

        <input
          type="text"
          placeholder="Note"
          className="border rounded-lg p-3"
          {...register("note")}
        />

        <button
          type="submit"
          className="
          bg-blue-600
          text-white
          rounded-lg
          p-3
          hover:bg-blue-700
          transition
          "
        >
          Add Expense
        </button>

      </form>
    </div>
  );
}

export default ExpenseForm;