import {
  FaWallet,
  FaFire,
  FaChartPie,
} from "react-icons/fa";

function SummaryCards({ summary }) {
  if (!summary) {
    return (
      <div className="text-center py-8 text-gray-500">
        Loading summary...
      </div>
    );
  }

  const categoryCount =
    summary.categoryTotals?.length || 0;

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

      {/* Total Spending */}
      <div
        className="
        bg-gradient-to-r
        from-blue-500
        to-blue-600
        text-white
        p-6
        rounded-2xl
        shadow-lg
        hover:scale-105
        transition-all
        duration-300
      "
      >
        <FaWallet size={28} />

        <h3 className="mt-4 text-sm uppercase tracking-wide opacity-90">
          Total Spending
        </h3>

        <p className="text-3xl font-bold mt-2">
          {formatCurrency(summary.monthlyTotal)}
        </p>
      </div>

      {/* Highest Expense */}
      <div
        className="
        bg-gradient-to-r
        from-red-500
        to-red-600
        text-white
        p-6
        rounded-2xl
        shadow-lg
        hover:scale-105
        transition-all
        duration-300
      "
      >
        <FaFire size={28} />

        <h3 className="mt-4 text-sm uppercase tracking-wide opacity-90">
          Highest Expense
        </h3>

        <p className="text-3xl font-bold mt-2">
          {formatCurrency(
            summary.highestExpense?.amount || 0
          )}
        </p>

        <p className="mt-2 text-sm opacity-90">
          {summary.highestExpense?.category ||
            "No Data"}
        </p>
      </div>

      {/* Categories */}
      <div
        className="
        bg-gradient-to-r
        from-green-500
        to-green-600
        text-white
        p-6
        rounded-2xl
        shadow-lg
        hover:scale-105
        transition-all
        duration-300
      "
      >
        <FaChartPie size={28} />

        <h3 className="mt-4 text-sm uppercase tracking-wide opacity-90">
          Categories
        </h3>

        <p className="text-3xl font-bold mt-2">
          {categoryCount}
        </p>

        <p className="mt-2 text-sm opacity-90">
          Active Categories
        </p>
      </div>

    </div>
  );
}

export default SummaryCards;