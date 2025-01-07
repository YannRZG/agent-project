import { useState, useEffect } from "react";

export default function BadgeInput() {
  const [badges, setBadges] = useState([]);
  const [rarities, setRarities] = useState([]);

  useEffect(() => {
    // Récupération des données JSON
    fetch(`${import.meta.env.VITE_BASE_URL}/rarities`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erreur: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setRarities(data); // Mettre à jour l'état avec les données
      })
      .catch((error) => console.error("Erreur de récupération des données:", error));
  }, []);

  const getRarityColor = (rarity) => {
    switch (rarity?.toLowerCase()) {
      case "common":
        return "border-2 border-gray-400 text-slate-100";
      case "uncommon":
        return "border-2 border-green-400 text-slate-100";
      case "rare":
        return "border-2 border-blue-400 text-slate-100";
      case "epic":
        return "border-2 border-purple-400 text-slate-100";
      case "legendary":
        return "border-2 border-orange-400 text-slate-100";
      case "mythic":
        return "border-2 border-yellow-400 text-slate-100";
      case "exalted":
        return "border-2 border-pink-400 text-slate-100";
      case "exotic":
        return "border-2 border-[#e879f9] text-slate-100";
      case "transcendent":
        return "border-2 border-red-400 text-slate-100";
      case "unique":
        return "border-2 border-rose-400 text-slate-100";
      default:
        return "border-2 border-zinc-400 text-slate-100";
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      <label htmlFor="rarity" className="text-slate-100 mb-2">
        Rarity
      </label>
      <select
        id="rarity"
        name="rarity"
        className="p-2 rounded border border-gray-300 bg-gray-800 text-white"
      >
        <option value="" disabled>
          Select a rarity
        </option>
        {rarities.map((rarity) => (
          <option
            key={rarity.id}
            value={rarity.name}
            className={getRarityColor(rarity.name)}
          >
            {rarity.name}
          </option>
        ))}
      </select>
    </div>
  );
}
