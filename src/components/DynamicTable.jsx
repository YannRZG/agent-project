import React, { useState, useEffect } from "react";

const DynamicTable = ({ fetchData, actions, customHeaders }) => {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    // Fetch data from the provided API function
    const loadData = async () => {
      try {
        const response = await fetchData(); // Assumes fetchData is a promise
        if (response.length > 0) {
          setColumns(Object.keys(response[0])); // Dynamically set columns
        }
        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    loadData();
  }, [fetchData]);

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse border border-gray-700">
        <thead className="bg-gray-800 text-white">
          <tr>
            {columns.map((col, index) => (
              <th key={index} className="px-4 py-2 text-center">
                {customHeaders?.[col] || col} {/* Use custom headers if provided */}
              </th>
            ))}
            {actions && <th className="px-4 py-2 text-center">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-700">
                {columns.map((col, colIndex) => (
                  <td key={colIndex} className="px-4 py-2 text-center border border-gray-700">
                    {row[col] !== null ? row[col] : "N/A"}
                  </td>
                ))}
                {actions && (
                  <td className="px-4 py-2 text-center">
                    {actions.map(({ label, onClick, icon: Icon }, actionIndex) => (
                      <button
                        key={actionIndex}
                        onClick={() => onClick(row)}
                        className="text-blue-500 hover:text-blue-700 mx-2"
                      >
                        {Icon && <Icon className="inline-block mr-1" />}
                        {label}
                      </button>
                    ))}
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length + (actions ? 1 : 0)} className="text-center py-4 text-gray-300">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
