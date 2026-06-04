function ExpenseTable({
  expenses,
  onDelete,
  onEdit,
}) {
  if (!expenses.length) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-sm text-center">
        <h3 className="text-lg font-semibold">
          No Expenses Found
        </h3>

        <p className="text-gray-500 mt-2">
          Add your first expense.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>
              <th className="p-4 text-left">
                Date
              </th>

              <th className="p-4 text-left">
                Category
              </th>

              <th className="p-4 text-left">
                Amount
              </th>

              <th className="p-4 text-left">
                Note
              </th>

              <th className="p-4 text-left">
                Actions
              </th>
            </tr>

          </thead>

          <tbody>

            {expenses.map((expense) => (
              <tr
                key={expense.id}
                className="border-t"
              >
                <td className="p-4">
                  {expense.date}
                </td>

                <td className="p-4">
                  {expense.category}
                </td>

                <td className="p-4 font-semibold">
                  {new Intl.NumberFormat(
                    "en-IN",
                    {
                      style: "currency",
                      currency: "INR",
                    }
                  ).format(expense.amount)}
                </td>

                <td className="p-4">
                  {expense.note}
                </td>

                <td className="p-4 flex gap-2">

                  <button
                    onClick={() =>
                      onEdit(expense)
                    }
                    className="
                    bg-yellow-500
                    text-white
                    px-3
                    py-1
                    rounded
                    "
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      onDelete(expense.id)
                    }
                    className="
                    bg-red-500
                    text-white
                    px-3
                    py-1
                    rounded
                    "
                  >
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