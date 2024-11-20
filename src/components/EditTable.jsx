import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

export default function EditableTable({ initialData }) {
  const [data, setData] = useState(initialData);
  const [isEditing, setIsEditing] = useState(null); // Index de la ligne en cours d'édition
  const [newRow, setNewRow] = useState({}); // Stockage pour une nouvelle ligne

  // Mettre à jour les données chaque fois que initialData change
  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  // Gestion de la modification d'une cellule
  const handleEdit = (index, field, value) => {
    const updatedData = [...data];
    updatedData[index][field] = value;
    setData(updatedData);
  };

  // Sauvegarde d'une nouvelle ligne
  const handleAddRow = () => {
    if (Object.keys(newRow).length > 0) {
      setData([...data, newRow]);
      setNewRow({});
    }
  };

  // Suppression d'une ligne
  const handleDeleteRow = (index) => {
    const updatedData = data.filter((_, rowIndex) => rowIndex !== index);
    setData(updatedData);
  };

  // Déterminer les clés dynamiques des colonnes à partir des données
  const columns = data.length > 0 ? Object.keys(data[0]) : [];

  // Déterminer la couleur associée à une rarity
  const getRarityColor = (rarity) => {
    switch (rarity?.toLowerCase()) {
      case "common":
        return " border-2 border-gray-400 text-slate-100";
      case "uncommon":
        return "border-2 border-green-400 text-slate-100";
      case "rare":
        return "border-2 border-blue-400 text-slate-100";
      case "epic":
        return "border-2 border-purple-400 text-slate-100";
      case "legendary":
        return "border-2 border-yellow-400 text-slate-100";
      case "mythic":
        return "border-2 border-red-400 text-slate-100";
      default:
        return "border-2 border-zinc-400 text-slate-100";
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse">
        <thead className="bg-[#1e272e] text-white">
          <tr>
            {columns.map((column, index) => (
              <th key={index} className="px-4 py-2 text-sm text-left">
                {column}
              </th>
            ))}
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="px-4 py-2 text-zinc-300">
                  {column === "rarity" && !isEditing ? (
                    // Afficher un badge coloré pour la colonne "rarity"
                    <span
                      className={`px-2 py-1 rounded-lg text-sm font-semibold ${getRarityColor(
                        row[column]
                      )}`}
                    >
                      {row[column]}
                    </span>
                  ) : isEditing === rowIndex ? (
                    <input
                      type="text"
                      value={row[column] || ""}
                      onChange={(e) =>
                        handleEdit(rowIndex, column, e.target.value)
                      }
                      className="p-1 border border-gray-400 rounded"
                    />
                  ) : (
                    row[column]
                  )}
                </td>
              ))}
              <td className="px-4 py-2 flex">
                {isEditing === rowIndex ? (
                  <button
                    onClick={() => setIsEditing(null)}
                    className="text-green-500 hover:text-green-700 mr-2"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => setIsEditing(rowIndex)}
                    className="text-blue-500 hover:text-blue-700 mr-2"
                  >
                    <FaEdit />
                  </button>
                )}
                <button
                  onClick={() => handleDeleteRow(rowIndex)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}

          {/* Ligne pour ajouter une nouvelle ligne */}
          <tr className="bg-zinc-600">
            {columns.map((column, colIndex) => (
              <td key={colIndex} className="px-4 py-2">
                <input
                  type="text"
                  value={newRow[column] || ""}
                  onChange={(e) =>
                    setNewRow({ ...newRow, [column]: e.target.value })
                  }
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
