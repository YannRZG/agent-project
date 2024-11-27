import { useState, useEffect } from "react";
import Switch from "react-switch";
import EditableTable from "../components/EditTable";
import DailyCount from "../components/DailyCount";

export default function Daily() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const handleSwitchChange = (checked) => {
    setIsSwitchOn(checked);
    console.log("Switch toggled:", checked);
  };

  useEffect(() => {
    fetch("/src/data/daily.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des données");
        }
        return response.json();
      })
      .then((jsonData) => {
        console.log("Données récupérées :", jsonData);

        setData(jsonData.daily);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors du fetch :", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col flex-grow">
      <div className="flex flex-col p-6 mx-10 space-y-2 rounded-lg bg-zinc-800 flex-grow">
        <div className="flex flex-row items-center mb-8">
          <h1 className="text-3xl font-bold text-yellow-400 mr-4">DAILY</h1>
          <p className="mx-6 text-xl text-slate-100">Streamer mode</p>
          <Switch
            onChange={handleSwitchChange}
            checked={isSwitchOn}
            offColor="#888"
            onColor="#2563eb"
            uncheckedIcon={false}
            checkedIcon={false}
            height={20}
            width={40}
          />
        </div>
        <DailyCount />
        <div>
          {isLoading ? (
            <p className="text-white">Chargement des données...</p>
          ) : (
            <EditableTable initialData={data} />
          )}
        </div>
      </div>
    </div>
  );
}
