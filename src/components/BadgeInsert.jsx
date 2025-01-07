import { useEffect, useState } from "react";

export default function BadgeInsert() {
  const [rarities, setRarities] = useState([]);

  const getRarityColor = (rarity) => {
    switch (rarity?.toLowerCase()) {
      case "common":
        return "border-2 border-gray-400 text-slate-100 text-xs";
      case "uncommon":
        return "border-2 border-green-400 text-slate-100 text-xs";
      case "rare":
        return "border-2 border-blue-400 text-slate-100 text-xs";
      case "epic":
        return "border-2 border-purple-400 text-slate-100 text-xs";
      case "legendary":
        return "border-2 border-orange-400 text-slate-100 text-xs";
      case "mythic":
        return "border-2 border-yellow-400 text-slate-100 text-xs";
      case "exalted":
        return "border-2 border-pink-400 text-slate-100 text-xs";
      case "exotic":
        return "border-2 border-[#e879f9] text-slate-100 text-xs";
      case "transcendent":
        return "border-2 border-red-400 text-slate-100 text-xs";
      case "unique":
        return "border-2 border-rose-400 text-slate-100 text-xs";
      default:
        return "border-2 border-zinc-400 text-slate-100 text-xs";
    }
  };

  useEffect(() => {
    const fetchRarities = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/rarities`
        );
        const data = await response.json();
        setRarities(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching rarities:", error);
      }
    };

    fetchRarities();
  }, []);

  return (
    <div className="h-auto flex flex-col">
      <h1 className="text-2xl font-bold text-center text-white mb-6">
        Badge Rarities
      </h1>
      <div className="flex flex-row justify-center gap-8 flex-wrap p-6 mx-10">
        {rarities.map((rarity) => {
          console.log("Rarity value:", rarity.name);
          return (
            <div key={rarity.id} className="flex flex-col items-center gap-2" >
              <div
                className={`px-2 py-2 rounded-lg gap-2 text-sm font-semibold ${getRarityColor(
                  rarity.name
                )}`}
              >
                {rarity.name || "Non défini"}
              </div>
              <input type="text" className="w-10 rounded p-1 text-center" placeholder="0"/>
            </div>
          );
        })}
      </div>
    </div>
  );
}
