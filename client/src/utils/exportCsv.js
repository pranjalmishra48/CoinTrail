import toast from "react-hot-toast";

export const exportToCsv = (expenses) => {
  const headers = [
    "Date",
    "Category",
    "Amount",
    "Note",
  ];

  const rows = expenses.map(
    (expense) => [
      expense.date,
      expense.category,
      expense.amount,
      expense.note || "",
    ]
  );

  const csvContent = [
    headers,
    ...rows,
  ]
    .map((row) =>
      row.join(",")
    )
    .join("\n");

  const blob = new Blob(
    [csvContent],
    {
      type:
        "text/csv;charset=utf-8;",
    }
  );

  const link =
    document.createElement("a");

  link.href =
    URL.createObjectURL(blob);

  const today =
    new Date()
      .toISOString()
      .split("T")[0];

  link.download =
    `cointrail-expenses-${today}.csv`;

  link.click();
  toast.success( "CSV Exported Successfully");
};