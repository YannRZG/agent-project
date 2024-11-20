import React, { useState } from "react";
import ReusableTable from "../components/Table";

export default function TabsWithTables() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedItem, setSelectedItem] = useState("");

  const tabs = [
    {
      label: "SLOT",
      columns: [
        { label: "SLOT", accessor: "slot", highlight: false },
        { label: "NB FLEX", accessor: "flex", highlight: true },
        { label: "FLEX COST", accessor: "cost", highlight: true },
        { label: "BONUS $BFT/SLOT", accessor: "bonus", highlight: false },
        { label: "NORMAL PART $BFT/BADGE", accessor: "part", highlight: false },
        {
          label: "BONUS PART $BFT/BADGE",
          accessor: "bonuspart",
          highlight: false,
        },
      ],
      data: [
        {
          slot: 1,
          flex: 0,
          cost: "0",
          bonus: "0%",
          part: "14",
          bonuspart: "0",
        },
        {
          slot: 2,
          flex: 7000,
          cost: "$51,98",
          bonus: "5%",
          part: "14",
          bonuspart: "1",
        },
        {
          slot: 3,
          flex: 13000,
          cost: "$96,54",
          bonus: "10%",
          part: "14",
          bonuspart: "2",
        },
        {
          slot: 4,
          flex: 20000,
          cost: "$148,52",
          bonus: "15%",
          part: "14",
          bonuspart: "4",
        },
        {
          slot: 5,
          flex: 26000,
          cost: "193,07",
          bonus: "20%",
          part: "14",
          bonuspart: "6",
        },
      ],
      additionalColumns: [
        { label: "NB SLOT(S)", accessor: "nbSlot", highlight: false },
        { label: "TOTAL FLEX", accessor: "totalFlex", highlight: true },
        { label: "TOTAL COST", accessor: "totalCost", highlight: true },
        { label: "NB TOKENS ROI", accessor: "nbTokensRoi", highlight: false },
        {
          label: "NB DAYS ROI (x1,0)",
          accessor: "nbDaysRoi1",
          highlight: false,
        },
        {
          label: "NB DAYS ROI (x2,0)",
          accessor: "nbDaysRoi2",
          highlight: false,
        },
        {
          label: "NB DAYS ROI (x3,0)",
          accessor: "nbDaysRoi3",
          highlight: false,
        },
      ],
      additionalData: [
        {
          nbSlot: 1,
          totalFlex: 7000,
          totalCost: "$51,98",
          nbTokensRoi: 520,
          nbDaysRoi1: 6,
          nbDaysRoi2: 3,
          nbDaysRoi3: 2,
        },
        {
          nbSlot: 2,
          totalFlex: 20000,
          totalCost: "$96,54",
          nbTokensRoi: 1485,
          nbDaysRoi1: 15,
          nbDaysRoi2: 7,
          nbDaysRoi3: 5,
        },
        {
          nbSlot: 3,
          totalFlex: 40000,
          totalCost: "$148,52",
          nbTokensRoi: 2970,
          nbDaysRoi1: 30,
          nbDaysRoi2: 14,
          nbDaysRoi3: 10,
        },
        {
          nbSlot: 4,
          totalFlex: 66000,
          totalCost: "193,07",
          nbTokensRoi: 4901,
          nbDaysRoi1: 49,
          nbDaysRoi2: 21,
          nbDaysRoi3: 17,
        },
      ],
    },
    {
      label: "CONTRACT",
      columns: [
        { label: "RARITY", accessor: "rarity", highlight: false },
        { label: "ITEM", accessor: "item", highlight: false },
        { label: "SUPPLY", accessor: "supply", highlight: false },
        { label: "MAX CHARGES", accessor: "maxCharges", highlight: false },
        { label: "FLEX/CHARGES", accessor: "flexCharges", highlight: true },
        { label: "SP.M./CHARGE", accessor: "spPerCharge", highlight: true },
        { label: "CHARGE COST", accessor: "chargeCost", highlight: true },
        { label: "TIME TO CHARGE", accessor: "timeToCharge", highlight: false },
      ],
      data: [
        {
          rarity: "Common",
          item: "Rookie",
          supply: 50000,
          maxCharges: 1,
          flexCharges: 1400,
          spPerCharge: 7,
          chargeCost: "$10,37",
          timeToCharge: "8h00",
        },
        {
          rarity: "Uncommon",
          item: "Initiate",
          supply: 35000,
          maxCharges: 2,
          flexCharges: 2800,
          spPerCharge: 14,
          chargeCost: "$20,74",
          timeToCharge: "7h45",
        },
        {
          rarity: "Rare",
          item: "Encore",
          supply: 20000,
          maxCharges: 3,
          flexCharges: 200,
          spPerCharge: 21,
          chargeCost: "$31,11",
          timeToCharge: "7h30",
        },
        {
          rarity: "Epic",
          item: "Contender",
          supply: 10000,
          maxCharges: 4,
          flexCharges: 200,
          spPerCharge: 28,
          chargeCost: "$41,47",
          timeToCharge: "7h15",
        },
        {
          rarity: "Legendary",
          item: "Challenger",
          supply: 5000,
          maxCharges: 5,
          flexCharges: 200,
          spPerCharge: 35,
          chargeCost: "$51,83",
          timeToCharge: "7h00",
        },
        {
          rarity: "Mythic",
          item: "Veteran",
          supply: 2500,
          maxCharges: 6,
          flexCharges: 200,
          spPerCharge: 42,
          chargeCost: "$62,19",
          timeToCharge: "6h45",
        },
        {
          rarity: "Exalted",
          item: "Champion",
          supply: 1000,
          maxCharges: 7,
          flexCharges: 200,
          spPerCharge: 49,
          chargeCost: "$72,55",
          timeToCharge: "6h30",
        },
        {
          rarity: "Exotic",
          item: "Olympian",
          supply: 500,
          maxCharges: 8,
          flexCharges: 200,
          spPerCharge: 56,
          chargeCost: "$82,91",
          timeToCharge: "6h15",
        },
        {
          rarity: "Transcendent",
          item: "Prodigy",
          supply: 100,
          maxCharges: 9,
          flexCharges: 200,
          spPerCharge: 63,
          chargeCost: "$93,27",
          timeToCharge: "6h00",
        },
        {
          rarity: "Unique",
          item: "MVP",
          supply: 1,
          maxCharges: 10,
          flexCharges: 200,
          spPerCharge: 70,
          chargeCost: "$103,63",
          timeToCharge: "5h45",
        },
      ],
    },
    {
      label: "BADGE",
      columns: [
        { label: "RARITY", accessor: "rarity", highlight: false },
        { label: "ITEM", accessor: "item", highlight: false },
        { label: "SUPPLY", accessor: "supply", highlight: false },
        { label: "EFFICIENCY", accessor: "efficiency", highlight: false },
        { label: "DAILY RATIO", accessor: "dailyRatio", highlight: false },
        { label: "NB CHARGES", accessor: "nbCharge", highlight: false },
        { label: "MATCHES", accessor: "charges", highlight: false },
        { label: "IN-GAME TIME", accessor: "inGameTime", highlight: false },
        { label: "CHARGE COST", accessor: "chargeCost", highlight: true },
        { label: "TIME TO CHARGE", accessor: "timeToCharge", highlight: false },
        { label: "DAILY TOKENS", accessor: "dailyTokens", highlight: false },
        { label: "DAILY $", accessor: "daily$", highlight: false },
      ],
      data: [
        {
          rarity: "Common",
          item: "Potion",
          supply: 5000,
          efficiency: 85,
          dailyRatio: 120,
          nbCharge: 10,
          charges: 150,
          inGameTime: "2 hours",
          chargeCost: "$50",
          timeToCharge: "5 min",
          dailyTokens: 200,
          daily$: 5.0,
        },
        {
          rarity: "Uncommon",
          item: "Elixir",
          supply: 3000,
          efficiency: 75,
          dailyRatio: 100,
          nbCharge: 8,
          charges: 120,
          inGameTime: "1.5 hours",
          chargeCost: "$60",
          timeToCharge: "6 min",
          dailyTokens: 180,
          daily$: 4.5,
        },
        {
          rarity: "Rare",
          item: "Healing Potion",
          supply: 2000,
          efficiency: 90,
          dailyRatio: 150,
          nbCharge: 15,
          charges: 200,
          inGameTime: "3 hours",
          chargeCost: "$100",
          timeToCharge: "8 min",
          dailyTokens: 300,
          daily$: 7.5,
        },
        {
          rarity: "Epic",
          item: "Mana Potion",
          supply: 1500,
          efficiency: 95,
          dailyRatio: 180,
          nbCharge: 12,
          charges: 250,
          inGameTime: "4 hours",
          chargeCost: "$150",
          timeToCharge: "10 min",
          dailyTokens: 350,
          daily$: 9.0,
        },
        {
          rarity: "Legendary",
          item: "Elixir of Immortality",
          supply: 500,
          efficiency: 100,
          dailyRatio: 200,
          nbCharge: 20,
          charges: 300,
          inGameTime: "5 hours",
          chargeCost: "$200",
          timeToCharge: "15 min",
          dailyTokens: 500,
          daily$: 15.0,
        },
        {
          rarity: "Mythic",
          item: "Phoenix Feather",
          supply: 200,
          efficiency: 110,
          dailyRatio: 250,
          nbCharge: 25,
          charges: 350,
          inGameTime: "6 hours",
          chargeCost: "$300",
          timeToCharge: "20 min",
          dailyTokens: 600,
          daily$: 20.0,
        },
        {
          rarity: "Exalted",
          item: "Dragon Scale",
          supply: 100,
          efficiency: 120,
          dailyRatio: 300,
          nbCharge: 30,
          charges: 400,
          inGameTime: "7 hours",
          chargeCost: "$400",
          timeToCharge: "25 min",
          dailyTokens: 750,
          daily$: 25.0,
        },
        {
          rarity: "Exotic",
          item: "Eternal Flame",
          supply: 50,
          efficiency: 130,
          dailyRatio: 350,
          nbCharge: 35,
          charges: 450,
          inGameTime: "8 hours",
          chargeCost: "$500",
          timeToCharge: "30 min",
          dailyTokens: 900,
          daily$: 30.0,
        },
        {
          rarity: "Transcendent",
          item: "Soulstone",
          supply: 20,
          efficiency: 140,
          dailyRatio: 400,
          nbCharge: 40,
          charges: 500,
          inGameTime: "9 hours",
          chargeCost: "$600",
          timeToCharge: "35 min",
          dailyTokens: 1000,
          daily$: 35.0,
        },
        {
          rarity: "Unique",
          item: "Celestial Orb",
          supply: 10,
          efficiency: 150,
          dailyRatio: 500,
          nbCharge: 50,
          charges: 600,
          inGameTime: "10 hours",
          chargeCost: "$800",
          timeToCharge: "40 min",
          dailyTokens: 1200,
          daily$: 50.0,
        },
      ],
    },
    {
      label: "CRAFT",
      columns: [
        { label: "RARITY", accessor: "rarity" },
        { label: "SUPPLY", accessor: "supply" },
        { label: "NB PREVIOUS RARITY ITEM", accessor: "nbPreviousRarityItem" },
        { label: "NB $BFT", accessor: "nbBft" },
        { label: "$BFT COST", accessor: "bftCost" },
        { label: "TIME TO CRAFT", accessor: "timeToCraft" },
      ],
      data: [
        {
          rarity: "Common",
          supply: 5000,
          nbPreviousRarityItem: 0,
          nbBft: 100,
          bftCost: 50,
          timeToCraft: "2 min",
        },
        {
          rarity: "Uncommon",
          supply: 4000,
          nbPreviousRarityItem: 100,
          nbBft: 150,
          bftCost: 75,
          timeToCraft: "3 min",
        },
        {
          rarity: "Rare",
          supply: 2000,
          nbPreviousRarityItem: 250,
          nbBft: 200,
          bftCost: 100,
          timeToCraft: "5 min",
        },
        {
          rarity: "Epic",
          supply: 1500,
          nbPreviousRarityItem: 400,
          nbBft: 300,
          bftCost: 150,
          timeToCraft: "8 min",
        },
        {
          rarity: "Legendary",
          supply: 1000,
          nbPreviousRarityItem: 600,
          nbBft: 500,
          bftCost: 200,
          timeToCraft: "10 min",
        },
        {
          rarity: "Mythic",
          supply: 500,
          nbPreviousRarityItem: 800,
          nbBft: 600,
          bftCost: 300,
          timeToCraft: "15 min",
        },
        {
          rarity: "Exalted",
          supply: 200,
          nbPreviousRarityItem: 1000,
          nbBft: 800,
          bftCost: 400,
          timeToCraft: "20 min",
        },
        {
          rarity: "Exotic",
          supply: 100,
          nbPreviousRarityItem: 1200,
          nbBft: 1000,
          bftCost: 500,
          timeToCraft: "25 min",
        },
        {
          rarity: "Transcendent",
          supply: 50,
          nbPreviousRarityItem: 1500,
          nbBft: 1500,
          bftCost: 600,
          timeToCraft: "30 min",
        },
        {
          rarity: "Unique",
          supply: 10,
          nbPreviousRarityItem: 2000,
          nbBft: 2000,
          bftCost: 800,
          timeToCraft: "35 min",
        },
      ],
    },
  ];

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="h-auto flex flex-col">
      {/* Autres éléments au-dessus, comme un header */}

      <div className="flex flex-col flex-grow p-6 mx-10 rounded-lg bg-zinc-800">
        <h1 className="text-3xl font-bold mb-8 text-yellow-400">CALCULATORS</h1>
        <div className="flex flex-col flex-grow">
          {/* Onglets */}
          <div className="flex border-b-2 border-yellow-300">
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
          {tabs[activeTab].label === "CRAFT" && (
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
            <ReusableTable
              columns={tabs[activeTab].columns}
              data={tabs[activeTab].data}
            />

            {/* Affichage du second tableau uniquement dans l'onglet SLOT */}
            {activeTab === 0 && (
              <div className="mt-8">
                <ReusableTable
                  columns={tabs[activeTab].additionalColumns}
                  data={tabs[activeTab].additionalData}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
