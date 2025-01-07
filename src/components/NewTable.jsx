import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function EditableTable({ apiEndpoint }) {
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  const [newRow, setNewRow] = useState({});
  const [rarities, setRarities] = useState(null);


  useEffect(() => {
    const fetchRarities = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/rarities`);
        if (!response.ok) throw new Error("Failed to fetch rarities");
        const raritiesData = await response.json();
        setRarities(raritiesData);
        console.log(raritiesData);
      } catch (error) {
        console.error("Error fetching rarities:", error);
      }
    };
    fetchRarities();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await fetch(apiEndpoint);
          if (!response.ok) throw new Error("Failed to fetch data");
          const result = await response.json();
          console.log("Fetched data:", result); // Debug
          if (result.length > 0) {
            setColumns(Object.keys(result[0]));
            setData(result);
          } else {
            setColumns([]);
            setData([]);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      
    fetchData();
  }, [apiEndpoint]);

  const handleAddRow = async () => {
    if (Object.values(newRow).some(val => val === "")) {
      console.error("Please fill all fields");
      return;
    }

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRow),
      });

      if (!response.ok) throw new Error("Failed to add row");

      const addedData = await response.json();
      setData([...data, addedData]);
      setNewRow({});
    } catch (error) {
      console.error("Error adding row:", error);
    }
  };

  const handleDeleteRow = async (rowId) => {
    try {
      const response = await fetch(`${apiEndpoint}/${rowId}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete row");

      setData(data.filter(item => item.id !== rowId));
    } catch (error) {
      console.error("Error deleting row:", error);
    }
  };

  const handleChange = (key, value) => {
    setNewRow(prevRow => ({ ...prevRow, [key]: value }));
  };

  const getRarityColor = (rarity) => {
    const colors = {
      common: "border-gray-400",
      uncommon: "border-green-400",
      rare: "border-blue-400",
      epic: "border-purple-400",
      legendary: "border-orange-400",
      mythic: "border-yellow-400",
      exalted: "border-pink-400",
      exotic: "border-[#e879f9]",
      transcendent: "border-red-400",
      unique: "border-rose-400",
    };
    return `border-2 ${colors[rarity?.toLowerCase()] || "border-zinc-400"} text-slate-100`;
  };

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse">
        <thead className="bg-gray-800 text-white">
          <tr>
            {columns.map((column, index) => (
              <th key={index} className="px-4 py-2 text-center text-sm">
                {column}
              </th>
            ))}
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr key={row.id}>
{columns.map((column, colIndex) => (
  <td key={colIndex} className={`px-4 py-2 ${column === "rarity" ? getRarityColor(row[column]) : 'text-zinc-300'}`}>
    {column === "rarity" ? (
      <span className={`px-2 py-1 rounded-full text-sm font-semibold ${getRarityColor(row[column])}`}>
        {row[column]}
      </span>
    ) : (
      row[column]
    )}
  </td>
))}

                <td className="px-4 py-2 flex">
                  <button
                    onClick={() => handleDeleteRow(row.id)}
                    className="text-red-500 hover:text-red-700 mr-2"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length + 1} className="text-center py-4 text-gray-300">
                No data available. Please add a row.
              </td>
            </tr>
          )}
          <tr className="bg-gray-700">
            {columns.map((column, colIndex) => (
              <td key={colIndex} className="px-4 py-2">
                <input
                  type="text"
                  value={newRow[column] || ""}
                  onChange={(e) => handleChange(column, e.target.value)}
                  placeholder={`Add ${column}`}
                  className="p-1 border border-gray-400 rounded w-full"
                />
              </td>
            ))}
            <td className="px-4 py-2">
              <button
                onClick={handleAddRow}
                className="text-green-500 hover:text-green-700"
              >
                <FaPlus className="text-xl" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
