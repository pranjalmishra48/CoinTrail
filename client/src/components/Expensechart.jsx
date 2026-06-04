import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function ExpenseChart({ summary }) {
  if (!summary) return null;

  const data = {
    labels:
      summary.categoryTotals?.map(
        (item) => item.category
      ),

    datasets: [
      {
        data:
          summary.categoryTotals?.map(
            (item) => item.total
          ),
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mb-8">

      <h2 className="text-xl font-semibold mb-6">
        Expense Breakdown
      </h2>

      <div className="max-w-md mx-auto">
        <Pie data={data}
          options={{ responsive: true,
          plugins: { egend: {
          position: "bottom",
          },
          },
        }}/>
      </div>

    </div>
  );
}

export default ExpenseChart;