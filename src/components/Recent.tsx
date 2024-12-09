import React from "react";

interface Recent {
  rank:number;
  username: string;
  time: string;
  color: string;
}

const Recent: React.FC = () => {
  const recents: Recent[] = [
    {rank:1, username: "@abcd", time: "20 mins", color: "text-orange-500" },
    {rank:1, username: "@izzetc", time: "20 mins", color: "text-green-500" },
  ];

  return (
    <div className="bg-[#252525] rounded-lg p-6 shadow-lg">
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-gray-400 text-sm border-b border-gray-600">
            <th className="text-left py-3 px-4">Rank</th>
            <th className="text-left py-3 px-4">Username</th>
            <th className="text-left py-3 px-4">Submitted</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {recents.map((recents) => (
            <tr
              key={recents.rank}
              className="border-b border-gray-700  transition-colors"
            >
              <td className="py-4 px-4">
                <span className={`${recents.color} font-medium`}>
                  {recents.rank}
                </span>
              </td>
              <td className="py-4 px-4">{recents.username}</td>
              <td className="py-4 px-4">{recents.time}</td>
              <td className="py-4 px-4 text-right">
                <button className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>


  );
};

export default Recent;
