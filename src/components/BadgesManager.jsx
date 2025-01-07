import EditableTable from './NewTable'; // Importation du composant utilisé
import { useEffect, useState } from 'react';

export default function BadgesManager() {
  const [apiEndpoint, setApiEndpoint] = useState(`${import.meta.env.VITE_BASE_URL}/users/1/badges`);
  const [columns, setColumns] = useState(["rarity", "name", "purchase_price", "efficiency"]); // Définition des colonnes à afficher

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Gestion des Badges</h2>
      <EditableTable apiEndpoint={apiEndpoint} columnsToShow={columns} />
    </div>
  );
}
