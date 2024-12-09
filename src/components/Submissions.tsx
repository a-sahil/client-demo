import React, { useState } from "react";
import Leaderboard from "./Leaderboard";
import Recent from "./Recent";

interface PrizeDistribution {
  position: string;
  amount: number;
  rank: string;
  image?: string; // Optional image field
}

export default function Submissions() {
  const [activeTab, setActiveTab] = useState<"leaderboard" | "recent">(
    "leaderboard"
  );

  const prizeDistribution: PrizeDistribution[] = [
    { position: "1st", amount: 11000, rank: "1st", image: "/Img_margin.png" },
    { position: "2nd", amount: 8000, rank: "2nd" },
    { position: "3rd", amount: 6000, rank: "3rd" },
    { position: "4th", amount: 5000, rank: "4th" },
    { position: "5th", amount: 4000, rank: "5th" },
    { position: "6th-8th", amount: 2000, rank: "6th - 8th" },
  ];

  return (
    <div className="min-h-screen bg-[#1A1919] text-gray-100 p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Submissions Section */}
        <div className="flex flex-col space-y-4 lg:col-span-2">
        <div className="flex justify-between items-center mb-4">
  <h2 className="text-2xl font-semibold">Bounty Submissions</h2>
  <div className="flex bg-[#252525] rounded-lg overflow-hidden p-1 space-x-4">
    <button
      className={`px-6 py-2 text-sm font-medium transition-all duration-300 ${
        activeTab === "leaderboard"
          ? "text-white bg-[#1A1919] p-1 py-1 rounded-md" // Active button style
          : "text-gray-400 bg-transparent hover:text-white"
      }`}
      onClick={() => setActiveTab("leaderboard")}
    >
      Leaderboard
    </button>
    <button
      className={`px-6 py-2 text-sm font-medium transition-all duration-300 ${
        activeTab === "recent"
          ? "text-white bg-[#1A1919] rounded-md" // Active button style
          : "text-gray-400 bg-transparent hover:text-white"
      }`}
      onClick={() => setActiveTab("recent")}
    >
      Recent
    </button>
  </div>
</div>



          {/* Render Active Tab */}
          {activeTab === "leaderboard" ? <Leaderboard /> : <Recent />}
        </div>

        {/* Prize Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Bounty Prize</h2>
          <div className="bg-[#252525] rounded-lg p-6 shadow-lg">
            <div className="text-gray-400 mb-4">
              Prize Pool
              <div className="text-3xl font-bold text-white mt-1">40,000 TON</div>
            </div>

            <div className="space-y-4 relative"> {/* Add relative positioning here */}
  {/* Line connecting dots */}
  <div className="absolute left-[14px] top-20 h-[70%] w-[0.5px] bg-white z-0"></div> {/* Line connecting dots */}

  {prizeDistribution.map((prize, index) => (
    <div
      key={prize.position}
      className="relative flex items-center gap-4 p-2 z-10" // Ensure dots are above the line
    >
      {prize.image && index === 0 ? (
        <img
          src={prize.image}
          alt={prize.position}
          className="w-8 h-8 object-cover rounded-full"
        />
      ) : (
        <div className="w-3 h-3 bg-[#E2E8F0] rounded-full"></div>
      )}
      <div>
        <span className="text-lg font-semibold">
          {prize.amount.toLocaleString()} TON
        </span>
        <span className="ml-2 text-gray-400">{prize.rank}</span>
      </div>
    </div>
  ))}
</div>

          </div>
        </div>
      </div>
    </div>
  );
}
