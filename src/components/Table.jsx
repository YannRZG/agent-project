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

export default function ReusableTable({ columns = [], data = [] }) {


  return (
    <table className="table-auto w-2/3 text-left text-white">
      {/* En-tête */}
      <thead className="bg-gray-800 text-sm">
        <tr>
          {columns.map((column, index) => (
            <th
              key={index}
              className={`px-4 py-2 border-b border-gray-700 ${
                column.highlight ? "text-red-500" : column.lighting ? "text-green-600" : ""
              }`}
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>

      {/* Corps du tableau */}
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, colIndex) => (
              <td
                key={colIndex}
                className={`px-4 py-2 border-b-2 border-gray-500 bg-black text-sm ${
                 column.highlight ? "text-red-500" : column.lighting ? "text-green-600" : column.warning ? "text-yellow-400" : ""
                }`}
              >
                {/* Gestion du champ 'rarity' */}
                {column.accessor === "rarity" ? (
                  <span
                    className={`px-2 py-1 rounded-lg text-sm font-semibold ${getRarityColor(
                      row[column.accessor]
                    )}`}
                  >
                    {row[column.accessor] || "Non défini"}
                  </span>
                ) : (
                  // Affichage générique des autres colonnes
                  <span className="text-md">{row[column.accessor] || "—"}</span>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
