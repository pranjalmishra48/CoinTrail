function BudgetIndicator({
  budgets,
  summary,
}) {

  if (
    !budgets.length ||
    !summary
  ) {
    return null;
  }

  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm ">

      <h2 className="text-xl font-semibold mb-6">
        Budget Tracking
      </h2>

      {budgets.map(
        (budget) => {

          const spent =
            summary.categoryTotals?.find(
              (item) =>
                item.category ===
                budget.category
            )?.total || 0;

          const percentage =
            Math.min(
              (spent /
                budget.limitAmount) *
                100,
              100
            );

          return (
            <div
              key={
                budget.category
              }
              className="mb-6"
            >

              <div className="flex justify-between mb-2">

                <span>
                  {
                    budget.category
                  }
                </span>

                <span>
                  ₹{spent} /
                  ₹{
                    budget.limitAmount
                  }
                </span>

              </div>

              <div className="w-full bg-gray-200 rounded-full h-4">

                <div
                  className={`h-4 rounded-full ${
                    spent >
                    budget.limitAmount
                      ? "bg-red-500"
                      : "bg-green-500"
                  }`}
                  style={{
                    width:
                      `${percentage}%`,
                  }}
                />

              </div>

              {spent >
                budget.limitAmount && (
                <p className="text-red-500 mt-2">
                  ⚠ Budget
                  Exceeded
                </p>
              )}

            </div>
          );
        }
      )}

    </div>
  );
}

export default BudgetIndicator;