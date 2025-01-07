import  EditableTable from './NewTable'; // Importation du composant utilisé
import { useEffect, useState } from 'react';

export default function ShowrunnerContractsManager() {
  const [apiEndpoint, setApiEndpoint] = useState(`${import.meta.env.VITE_BASE_URL}/users/1/showrunner_contracts`);
  const [columns, setColumns] = useState(["rarity", "name", "purchase_price"]); // Définition des colonnes à afficher

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Gestion des contrats Showrunner</h2>
      <EditableTable apiEndpoint={apiEndpoint} columnsToShow={columns} />
    </div>
  );
}
