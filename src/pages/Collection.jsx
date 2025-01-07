import { useEffect, useState } from "react";
import EditableTable from "../components/EditTable";


export default function Collection() {
  // États pour stocker les données récupérées
  const [table1Data, setTable1Data] = useState([]);
  const [table2Data, setTable2Data] = useState([]);
  const [table3Data, setTable3Data] = useState([]);
  const [table4Data, setTable4Data] = useState([]);
  const [loading, setLoading] = useState(true);  // Ajouter un état pour gérer le chargement

  // Utilisateur à définir manuellement
  const userId = 1;  // Définir l'ID de l'utilisateur manuellement

  useEffect(() => {
    if (userId) {
  
      const fetchData = async () => {
        try {
          const [userContracts, userBadges, rarities] = await Promise.all([
            fetch(`${import.meta.env.VITE_BASE_URL}/users/${userId}/showrunner_contracts`).then(res => res.json()),
            fetch(`${import.meta.env.VITE_BASE_URL}/users/${userId}/badges`).then(res => res.json()),
            fetch(`${import.meta.env.VITE_BASE_URL}/rarities`).then(res => res.json())
          ]);
  
          console.log("Données récupérées :", { userContracts, userBadges, rarities });
  
          // Créer un dictionnaire pour les rarities basé sur leur id
          const rarityMap = rarities.reduce((acc, { id, name }) => {
            acc[id] = name;
            return acc;
          }, {});
  
          // Formatter les données avec les noms de rarités
          const formatData = (data) => 
            data.map(({ rarity_id, name, id, purchase_price, efficiency }) => ({
              rarity: rarityMap[rarity_id] || "Unknown",
              name,
              id,
              purchase_price: purchase_price || null,
              efficiency: efficiency !== null ? efficiency : "Unknown",  // Gestion de la valeur null
            }));
          
  
          setTable1Data(formatData(userContracts));
          setTable2Data(formatData(userBadges));
          setTable3Data(formatData(rarities));
        } catch (error) {
          console.error("Erreur lors de la récupération des données : ", error);
        } finally {
          setLoading(false); // Fin du chargement
        }
      };
  
      fetchData();
    }
  }, [userId]);
  
  
  

  if (loading) {
    return <div>Chargement...</div>;  // Afficher un message de chargement si les données ne sont pas encore disponibles
  }

  return (
    <div className="p-6 mx-10 rounded-lg bg-zinc-900">
      <h1 className="text-3xl font-bold mb-8 text-yellow-400">My Collection</h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="p-4">
          <h2 className="text-xl text-slate-100 font-semibold mb-4">
            SHOWRUNNER CONTRACTS
          </h2>
          <EditableTable type="showrunner_contracts" initialData={table1Data}  />
        </div>
        <div className="p-4">
          <h2 className="text-xl text-slate-100 font-semibold mb-4">
            MULTIPLIER & PERKS
          </h2>
          <EditableTable initialData={[]} />
        </div>
        <div className="p-4">
          <h2 className="text-xl text-slate-100 font-semibold mb-4">BADGES</h2>
          <EditableTable type="badges" initialData={table2Data} />
        </div>
        <div className="p-4">
          <h2 className="text-xl text-slate-100 font-semibold mb-4">
            RECHARGE DISCOUNT
          </h2>
          <EditableTable initialData={[]} />
        </div>
      </div>
    </div>
  );
}
