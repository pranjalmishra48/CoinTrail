import { useState } from "react";

function FilterPanel({ onFilter }) {
  const [category, setCategory] =
    useState("");

  const [startDate, setStartDate] =
    useState("");

  const [endDate, setEndDate] =
    useState("");

  const applyFilter = () => {
    onFilter({
      category,
      startDate,
      endDate,
    });
  };

  const clearFilter = () => {
    setCategory("");
    setStartDate("");
    setEndDate("");

    onFilter({});
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mb-8">

      <h2 className="text-xl font-semibold mb-4">
        Filters
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
          className="border rounded-lg p-3"
        >
          <option value="">
            All Categories
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
          value={startDate}
          onChange={(e) =>
            setStartDate(e.target.value)
          }
          className="border rounded-lg p-3"
        />

        <input
          type="date"
          value={endDate}
          onChange={(e) =>
            setEndDate(e.target.value)
          }
          className="border rounded-lg p-3"
        />

        <div className="flex gap-2">

          <button
            onClick={applyFilter}
            className="
            bg-blue-600
            text-white
            px-4
            rounded-lg
            "
          >
            Apply
          </button>

          <button
            onClick={clearFilter}
            className="
            bg-gray-300
            px-4
            rounded-lg
            "
          >
            Clear
          </button>

        </div>

      </div>

    </div>
  );
}

export default FilterPanel;