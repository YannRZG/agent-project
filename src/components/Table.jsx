import React from "react";

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

export default function ReusableTable({ columns, data }) {
  return (
    <table className="table-auto w-full text-left text-white">
      <thead className="bg-gray-800">
        <tr>
          {columns.map((column, index) => (
            <th
              key={index}
              className={`px-4 py-2 border-b border-gray-700 ${
                column.highlight ? "text-red-500" : ""
              }`}
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, colIndex) => (
              <td
                key={colIndex}
                className={`px-4 py-2 border-b-2 border-gray-500 bg-black ${
                  (column.highlight || (column.accessor === "rarity" && row[column.accessor]?.toLowerCase() === "legendary")) 
                    ? "text-red-500" 
                    : ""
                }`}
              >
                {column.accessor === "rarity" ? (
                  <span
                    className={`px-2 py-1 rounded-lg text-sm font-semibold ${getRarityColor(
                      row[column.accessor]
                    )}`}
                  >
                    {row[column.accessor]}
                  </span>
                ) : (
                  row[column.accessor]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
