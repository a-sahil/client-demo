import React from "react";

interface Submission {
  rank: number;
  username: string;
  position: string;
  color: string;
}

const Leaderboard: React.FC = () => {
  const submissions: Submission[] = [
    { rank: 1, username: "@abcd", position: "1st", color: "text-orange-500" },
    { rank: 2, username: "@izzetc", position: "2nd", color: "text-green-500" },
  ];

  return (
    <div className="bg-[#252525] rounded-lg p-6 shadow-lg">
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-gray-400 text-sm border-b border-gray-600">
            <th className="text-left py-3 px-4">Rank</th>
            <th className="text-left py-3 px-4">Username</th>
            <th className="text-left py-3 px-4">Position</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission) => (
            <tr
              key={submission.rank}
              className="border-b border-gray-700 transition-colors"
            >
              <td className="py-4 px-4">
                <span className={`${submission.color} font-medium`}>
                  {submission.rank}
                </span>
              </td>
              <td className="py-4 px-4">{submission.username}</td>
              <td className="py-4 px-4">{submission.position}</td>
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

export default Leaderboard;
