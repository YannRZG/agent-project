import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { useState, useEffect, useReducer } from "react";
import { useMemo } from "react";

export default function EditableTable({ initialData, userId, type }) {
  const [rarities, setRarities] = useState([]);
  const [columns, setColumns] = useState([]);
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_DATA":
          return { ...state, data: action.payload };
        case "SET_NEW_ROW":
          return { ...state, newRow: action.payload };
        case "SET_IS_EDITING":
          return { ...state, isEditing: action.payload };
        default:
          return state;
      }
    },
    {
      data: initialData,
      isEditing: null,
      newRow: {},
    }
  );

  useEffect(() => {
    if (initialData.length > 0) {
      setColumns(Object.keys(initialData[0]));
    } else if (type === "showrunner_contracts") {
      setColumns(["rarity", "name", "price"]);
    } else if (type === "badges") {
      setColumns(["rarity", "name", "efficiency", "purchase_price"]);
    }
  }, [initialData, type]);

  useEffect(() => {
    const fetchRarities = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/rarities`);
        if (!response.ok) throw new Error("Failed to fetch rarities");
        const raritiesData = await response.json();
        setRarities(raritiesData);
      } catch (error) {
        console.error("Error fetching rarities:", error);
      }
    };
    fetchRarities();
  }, []);

  const handleAddRow = async () => {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    let endpoint = "";
    let bodyData = {};

    switch (type) {
      case "showrunner_contracts":
        endpoint = `/users/1/showrunner_contracts`;
        bodyData = {
          showrunner_contract: {
            name: state.newRow.name,
            purchase_price: state.newRow.purchase_price,
            rarity_id: rarities.find((r) => r.name === state.newRow.rarity)?.id,
            user_id: userId,
          },
        };
        break;
      case "badges":
        endpoint = `/users/1/badges`;
        bodyData = {
          badge: {
            name: state.newRow.name,
            rarity_id: rarities.find((r) => r.name === state.newRow.rarity)?.id,
            efficiency: state.newRow.efficiency,
            purchase_price: state.newRow.purchase_price,
            user_id: userId,
          },
        };
        break;
      default:
        console.error("Unsupported type:", type);
        return;
    }

    try {
      const response = await fetch(`${baseUrl}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData),
      });

      if (!response.ok) {
        console.error("Error adding row:", response.statusText);
        return;
      }

      const addedData = await response.json();

      // Associer directement la couleur après l'ajout
      const newRowWithColor = {
        ...addedData,
        rarity: addedData.rarity || state.newRow.rarity,
        colorClass: getRarityColor(addedData.rarity || state.newRow.rarity),
      };

      dispatch({ type: "SET_DATA", payload: [...state.data, newRowWithColor] });
      dispatch({ type: "SET_NEW_ROW", payload: {} });
    } catch (error) {
      console.error("Network error adding row:", error);
    }
  };

  const handleDeleteRow = async (rowIndex) => {
    const rowToDelete = state.data[rowIndex];
    let endpoint = "";

    if (type === "showrunner_contracts") {
      endpoint = `/showrunner_contracts/${rowToDelete.id}`;
    } else if (type === "badges") {
      endpoint = `/badges/${rowToDelete.id}`;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}${endpoint}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        console.error("Error deleting row:", response.statusText);
        return;
      }

      const updatedData = state.data.filter((_, index) => index !== rowIndex);
      dispatch({ type: "SET_DATA", payload: updatedData });
    } catch (error) {
      console.error("Network error deleting row:", error);
    }
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
        <thead className="bg-[#1e272e] text-white">
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
          {state.data.length > 0 ? (
            state.data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="px-4 py-2 text-zinc-300">
                    {column === "rarity" ? (
                      <span
                        className={`px-2 py-1 rounded-full text-sm font-semibold ${getRarityColor(
                          row[column]
                        )}`}
                      >
                        {row[column]}
                      </span>
                    ) : (
                      row[column]
                    )}
                  </td>
                ))}
                <td className="px-4 py-2 flex">
                  <button
                    onClick={() => dispatch({ type: "SET_IS_EDITING", payload: rowIndex })}
                    className="text-blue-500 hover:text-blue-700 mr-2"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDeleteRow(rowIndex)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length + 1} className="text-center py-4 text-zinc-300">
                No data available. Please add a row.
              </td>
            </tr>
          )}
          <tr className="bg-zinc-600">
            {columns.map((column, colIndex) => (
              <td key={colIndex} className="px-4 py-2">
                {column === "rarity" ? (
                  <select
                    value={state.newRow[column] || ""}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_NEW_ROW",
                        payload: { ...state.newRow, [column]: e.target.value },
                      })
                    }
                    className="p-1 border border-gray-400 rounded w-full"
                  >
                    <option value="" disabled>
                      Select Rarity
                    </option>
                    {rarities.map((rarity) => (
                      <option key={rarity.id} value={rarity.name}>
                        {rarity.name}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type="text"
                    value={state.newRow[column] || ""}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_NEW_ROW",
                        payload: { ...state.newRow, [column]: e.target.value },
                      })
                    }
                    placeholder={`Add ${column}`}
                    className="p-1 border border-gray-400 rounded w-full"
                  />
                )}
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
