import { useEffect, useState } from "react";
import EditableTable from "../components/EditTable";

export default function Collection() {
  // États pour stocker les données récupérées
  const [table1Data, setTable1Data] = useState([]);
  const [table2Data, setTable2Data] = useState([]);
  const [table3Data, setTable3Data] = useState([]);
  const [table4Data, setTable4Data] = useState([]);

  // Récupération des données JSON pour les tableaux
  useEffect(() => {
    // Fetch plusieurs fichiers JSON en parallèle
    Promise.all([
      fetch("/src/data/ShowRunnerContracts.json"),
      fetch("/src/data/multiplier.json"),
      fetch("/src/data/badges.json"),
      fetch("/src/data/Recharge.json"),
    ])
      .then(async (responses) => {
        // Vérification de la validité des réponses
        for (const response of responses) {
          if (!response.ok) {
            throw new Error("Erreur lors du chargement des données.");
          }
        }

        // Extraire les données JSON pour chaque fichier
        const data = await Promise.all(responses.map((response) => response.json()));

        console.log("Données récupérées :", data); // Vérification des données dans la console

        // Mise à jour des états avec les données correspondantes
        setTable1Data(data[0].showrunnerContracts || []);
        setTable2Data(data[1].multiplier || []);
        setTable3Data(data[2].badges || []);
        setTable4Data(data[3].Recharge || []);
        // Ajoutez plus de tableData si nécessaire
      })
      .catch((error) => console.error("Erreur : ", error));
  }, []);

  return (
    <div className="p-6 mx-10 rounded-lg bg-zinc-900 ">
      <h1 className="text-3xl font-bold mb-8 text-yellow-400">My Collection</h1>

      <div className="grid grid-cols-2 gap-6">
        <div className="p-4">
          <h2 className="text-xl text-slate-100 font-semibold mb-4">
            Showrunner Contracts
          </h2>
          <EditableTable initialData={table1Data} />
        </div>
        <div className="p-4">
          <h2 className="text-xl text-slate-100 font-semibold mb-4">
            Multiplier & Value Perks Multiplier
          </h2>
          <EditableTable initialData={table2Data} />
        </div>
        <div className="p-4">
          <h2 className="text-xl text-slate-100 font-semibold mb-4">Badges</h2>
          <EditableTable initialData={table3Data} />
        </div>
        <div className="p-4">
          <h2 className="text-xl text-slate-100 font-semibold mb-4">
            Recharge Discount
          </h2>
          <EditableTable initialData={table4Data} />
        </div>
      </div>
    </div>
  );
}
