import { useEffect, useState } from "react";
import EditableTable from "../components/EditTable";

export default function Collection() {
  // États pour stocker les données récupérées
  const [table1Data, setTable1Data] = useState([]);
  const [table2Data, setTable2Data] = useState([]);
  const [table3Data, setTable3Data] = useState([]);
  const [table4Data, setTable4Data] = useState([]);

  useEffect(() => {
    // Définir les chemins publics des fichiers JSON
    const jsonPaths = [
      "/data/ShowRunnerContracts.json",
      "/data/Multiplier.json",
      "/data/badges.json",
      "/data/Recharge.json",
    ];

    // Charger les fichiers JSON en parallèle
    Promise.all(jsonPaths.map((path) => fetch(path)))
      .then((responses) => {
        // Vérifiez si toutes les réponses sont OK
        if (!responses.every((response) => response.ok)) {
          throw new Error("Erreur lors de la récupération des données.");
        }

        // Parsez les fichiers JSON
        return Promise.all(responses.map((response) => response.json()));
      })
      .then((data) => {
        console.log("Données récupérées :", data);

        // Mettre à jour les états avec les données récupérées
        setTable1Data(data[0]?.showrunnerContracts || []);
        setTable2Data(data[1]?.multiplier || []);
        setTable3Data(data[2]?.badges || []);
        setTable4Data(data[3]?.Recharge || []);
      })
      .catch((error) => console.error("Erreur : ", error));
  }, []);

  return (
    <div className="p-6 mx-10 rounded-lg bg-zinc-900 ">
      <h1 className="text-3xl font-bold mb-8 text-yellow-400">My Collection</h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="p-4">
          <h2 className="text-xl text-slate-100 font-semibold mb-4">
            SHOWRUNNER CONTRACTS
          </h2>
          <EditableTable initialData={table1Data} />
        </div>
        <div className="p-4">
          <h2 className="text-xl text-slate-100 font-semibold mb-4">
            MULTIPLIER & PERKS
          </h2>
          <EditableTable initialData={table2Data} />
        </div>
        <div className="p-4">
          <h2 className="text-xl text-slate-100 font-semibold mb-4">BADGES</h2>
          <EditableTable initialData={table3Data} />
        </div>
        <div className="p-4">
          <h2 className="text-xl text-slate-100 font-semibold mb-4">
            RECHARGE DISCOUNT
          </h2>
          <EditableTable initialData={table4Data} />
        </div>
      </div>
    </div>
  );
}
