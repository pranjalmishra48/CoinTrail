function SummaryCards({ summary }) {

  if (!summary) {
    return (
      <div className="text-center py-8">
        Loading summary...
      </div>
    );
  }

  const categoryCount =
    summary.categoryTotals?.length || 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition">
        <h3 className="text-gray-500">
          Total Spending
        </h3>

        <p className="text-3xl font-bold mt-2 text-blue-600">
          {new Intl.NumberFormat(
             "en-IN",
            {
               style: "currency",
              currency: "INR"
           }
          ).format(summary.monthlyTotal)}
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition">
        <h3 className="text-gray-500">
          Highest Expense
        </h3>

        <p className="text-3xl font-bold mt-2 text-red-500">
          {new Intl.NumberFormat(
            "en-IN",
            {
              style: "currency",
              currency: "INR"
            }
          ).format(summary.highestExpense?.amount || 0)}
        </p>

        <p className="text-sm text-gray-500 mt-2">
          {summary.highestExpense?.category}
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition">
        <h3 className="text-gray-500">
          Categories
        </h3>

        <p className="text-3xl font-bold mt-2 text-green-600">
          {categoryCount}
        </p>
      </div>

    </div>
  );
}

export default SummaryCards;