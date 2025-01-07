function transposeData(columns, data) {
  return columns.map(column => ({
    header: column.label || column,
    values: data.map(row => row[column.accessor || column]),
    accessor: column.accessor
  }));
}

const getRarityColor = (rarity) => {
  switch (rarity?.toLowerCase()) {
    case "common":
      return "border-2 border-gray-400 text-slate-100";
    case "uncommon":
      return "border-2 border-green-400 text-slate-100";
    case "rare":
      return "border-2 border-blue-400 text-slate-100";
    case "epic":
      return "border-2 border-purple-400 text-slate-100";
    case "legendary":
      return "border-2 border-orange-400 text-slate-100";
    case "mythic":
      return "border-2 border-yellow-400 text-slate-100";
    case "exalted":
      return "border-2 border-pink-400 text-slate-100";
    case "exotic":
      return "border-2 border-[#e879f9] text-slate-100";
    case "transcendent":
      return "border-2 border-red-400 text-slate-100";
    case "unique":
      return "border-2 border-rose-400 text-slate-100";
    default:
      return "border-2 border-zinc-400 text-slate-100";
  }
};

export default function TransposedTable({ columns, data }) {
  const transposedData = transposeData(columns, data);

  return (
    <table className="table-auto w-1/2">
      <tbody>
        {transposedData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td
              className={`px-4 py-2 bg-gray-800 text-slate-100 text-sm font-semibold ${
                columns[rowIndex].highlight ? "text-red-700" : columns[rowIndex].lighting ? "text-green-600" : ""
              }`}
            >
              {row.header}
            </td>
            {row.values.map((value, colIndex) => (
              <td
                key={colIndex}
                className={`border-b border-gray-500 bg-black px-4 py-2 text-slate-100 text-sm ${
                  columns[colIndex].highlight ? "text-red-700" : columns[colIndex].lighting ? "text-green-600" : ""
                }`}
              >
                {row.accessor === "rarity" ? (
                  <span
                    className={`px-2 py-1 rounded-lg text-sm font-semibold ${getRarityColor(value)}`}
                  >
                    {value}
                  </span>
                ) : (
                  <span className="text-md">{String(value)}</span>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
