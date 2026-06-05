import { exportToCsv } from "../utils/exportCsv";
import { FaEdit, FaTrash,} from "react-icons/fa";

function ExpenseTable({
  expenses,
  onDelete,
  onEdit,
}) {
  if (!expenses.length) {
    return (
      <div className="bg-white rounded-2xl shadow-sm p-12 text-center">

        <div className="text-6xl mb-4">
          📭
        </div>

        <h3 className="text-2xl font-bold text-gray-800">
          No Expenses Yet
        </h3>

        <p className="text-gray-500 mt-3">
          Add your first expense to start tracking.
        </p>

      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

      {/* Header */}
      <div className="flex justify-between items-center p-5 border-b">

        <div>
          <h2 className="text-xl font-bold">
            Expense History
          </h2>

          <p className="text-sm text-gray-500">
            View and manage all recorded expenses
          </p>
        </div>

        <button
          onClick={() => exportToCsv(expenses)}
          className="
          bg-green-600
          hover:bg-green-700
          text-white
          font-medium
          px-4
          py-2
          rounded-xl
          shadow-sm
          transition
          "
        >
          Export CSV
        </button>

      </div>

      {/* Table */}
      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-slate-50">

            <tr>

              <th className="p-4 text-left font-semibold text-gray-600 uppercase text-sm">
                Date
              </th>

              <th className="p-4 text-left font-semibold text-gray-600 uppercase text-sm">
                Category
              </th>

              <th className="p-4 text-left font-semibold text-gray-600 uppercase text-sm">
                Amount
              </th>

              <th className="p-4 text-left font-semibold text-gray-600 uppercase text-sm">
                Note
              </th>

              <th className="p-4 text-left font-semibold text-gray-600 uppercase text-sm">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {expenses.map((expense) => (
              <tr
                key={expense.id}
                className="
                border-t
                hover:bg-slate-50
                transition-all
                duration-200
                "
              >

                <td className="p-4 text-gray-700">
                  {expense.date}
                </td>

                <td className="p-4">

                  <span
                    className="
                    bg-blue-100
                    text-blue-700
                    px-3
                    py-1
                    rounded-full
                    text-sm
                    font-medium
                    "
                  >
                    {expense.category}
                  </span>

                </td>

                <td className="p-4 font-bold text-green-600">
                  {new Intl.NumberFormat(
                    "en-IN",
                    {
                      style: "currency",
                      currency: "INR",
                    }
                  ).format(expense.amount)}
                </td>

                <td className="p-4 text-gray-600">
                  {expense.note || "-"}
                </td>

                <td className="p-4 flex gap-2">

                  <button onClick={() =>
                      onEdit(expense)
                    }
                    className=" bg-amber-500hover: bg-amber-600 text-white px-4 py-2 rounded-lg font-medium transition ">
                      <FaEdit />
                    Edit
                  </button>

                  <button onClick={() => {
                    const confirmed = window.confirm("Are you sure you want to delete this expense?");

                    if (confirmed) {
                      onDelete(expense.id);
                    }
                    }}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition">
                      <FaTrash />
                       Delete
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ExpenseTable;