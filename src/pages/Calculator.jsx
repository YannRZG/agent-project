import { useState, useEffect } from "react";
import ReusableTable from "../components/Table";
import TransposedTable from "../components/TransposedTable";
import BadgeInput from "../components/BadgeInput";
import BadgeInsert from "../components/BadgeInsert";

export default function TabsWithTables() {
  const [activeTab, setActiveTab] = useState(0);
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    // Récupération des données JSON
    fetch("/data/Tabs.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log("Réponse brute :", response);
        if (!response.ok) {
          throw new Error(`Erreur: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Données JSON récupérées :", data); // Log des données JSON
        setTabs(data);
      })
      .catch((error) => console.error("Erreur de récupération des données :", error));
  }, []);
  

  return (
    <div className="h-auto flex flex-col">
      {/* Autres éléments au-dessus, comme un header */}

      <div className="flex flex-col flex-grow p-6 mx-10 rounded-lg bg-zinc-800">
        <h1 className="text-4xl font-bold mb-8 text-yellow-400">DATA LAB</h1>
        <div className="flex flex-col flex-grow">
          {/* Onglets */}
          <div className="flex border-b-2 border-yellow-300 ">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 text-lg font-medium ${
                  activeTab === index ? "bg-yellow-300 m-1" : "bg-zinc-200 m-1"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Contenu de l'onglet actif */}
          <div className="flex-grow mt-4 pt-8 overflow-auto">
            {tabs[activeTab] && tabs[activeTab].label === "CRAFT" && (
              <div className="flex flex-col mb-4 w-1/4 ">
                <label className="mr-2 text-white text-xl py-2">ITEM</label>
                <select className="border border-gray-300 rounded-md p-2">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
            )}

            {/* Affichage du premier tableau */}
            {tabs[activeTab] && (
              <ReusableTable
                columns={tabs[activeTab].columns}
                data={tabs[activeTab].data}
              />
            )}

            {/* Affichage du second tableau uniquement dans l'onglet SLOT */}
            {activeTab === 0 && tabs[activeTab] && (
              <div className="mt-8 flex gap-10">
                <ReusableTable
                  columns={tabs[activeTab].additionalColumns}
                  data={tabs[activeTab].additionalData}
                />
                <div className="flex flex-col gap-4">
                  <BadgeInput />
                </div>
              </div>
            )}

            {/* Affichage d'une autre table dans l'onglet CONTRACT */}
            {activeTab === 1 && tabs[activeTab] && (
              <div className="mt-8">
                <ReusableTable
                  columns={tabs[activeTab].columns2}
                  data={tabs[activeTab].data2}
                  className="level"
                />
              </div>
            )}

            {/* Affichage d'une autre table dans l'onglet BADGE */}
            {activeTab === 2 && tabs[activeTab] && (
              <div className="mt-8 flex gap-10 basis-2/3">
                <TransposedTable
                  columns={tabs[activeTab].columns}
                  data={tabs[activeTab].data}
                  className="level"
                />
                <div className="flex gap-3">
                  <div className="flex flex-col">
                    <label className="text-lg font-bold text-slate-100">
                      SLOT USED
                    </label>
                    <select name="" id="">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-lg font-bold text-slate-100">$BFT Bonus Multiplier</label>
                    <textarea name="" id="" className="rounded h-8 w-10" placeholder="x1,0"></textarea>
                  </div>
                </div>
              </div>
            )}

            {/* Affichage d'une autre table dans l'onglet PLAYER CYCLE */}
            {activeTab === 4 && tabs[activeTab] && (
              <div className="mt-8 flex flex-col gap-10 basis-2/3">
                <BadgeInsert />
                <div className="flex flex-row justify-between">
                <TransposedTable
                  columns={tabs[activeTab].columns3}
                  data={tabs[activeTab].data3}
                />
                <div className="flex flex-col items-center gap-6">
                  <h1 className="text-center text-slate-100">TOTAL FOR 1 CYCLE</h1>
                <ReusableTable
                  columns={tabs[activeTab].columns4}
                  data={tabs[activeTab].data4}
                />
                <h1 className="text-center text-yellow-400">CRAFTING SIMULATION</h1>
                <ReusableTable
                  columns={tabs[activeTab].columns5}
                  data={tabs[activeTab].data5}
                />
                </div>
              </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
