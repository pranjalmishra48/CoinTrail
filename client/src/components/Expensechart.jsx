import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";
import { FaChartPie } from "react-icons/fa";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function ExpenseChart({ summary }) {
  if (!summary) return null;

  const data = {
    labels: summary.categoryTotals?.map(
      (item) => item.category
    ),

    datasets: [
      {
        data: summary.categoryTotals?.map(
          (item) => item.total
        ),

        backgroundColor: [
          "#3B82F6",
          "#10B981",
          "#F59E0B",
          "#EF4444",
          "#8B5CF6",
        ],

        borderWidth: 2,
        borderColor: "#ffffff",
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        position: "bottom",

        labels: {
          padding: 20,
          font: {
            size: 14,
          },
        },
      },

      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: ₹${context.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 h-full">

      {/* Header */}

      <div className="flex items-center gap-3 mb-6">

        <div
          className="
          bg-blue-100
          p-3
          rounded-xl
          "
        >
          <FaChartPie
            className="text-blue-600"
            size={20}
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            Expense Breakdown
          </h2>

          <p className="text-gray-500 text-sm">
            Category-wise spending analysis
          </p>
        </div>

      </div>

      {/* Chart */}

      <div className="max-w-md mx-auto">
        <Pie
          data={data}
          options={options}
        />
      </div>

    </div>
  );
}

export default ExpenseChart;