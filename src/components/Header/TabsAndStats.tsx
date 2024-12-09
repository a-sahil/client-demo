// components/Header/TabsAndStats.tsx
import { FC } from 'react';

interface TabsAndStatsProps {
  stats: {
    rewarded: number;
    listings: number;
    submissions: number;
  };
}

export const TabsAndStats: FC<TabsAndStatsProps> = ({ stats }) => {
  const tabs = ['All', 'Verified', 'Pending', 'Failed', 'Drafts'];
  
  return (
    <div className="flex justify-between items-center px-6 py-2">
      <div className="flex space-x-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`text-sm ${
              tab === 'All'
                ? 'text-gray-900 font-medium'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      
      <div className="flex items-center space-x-6 text-sm">
        <span className="text-gray-600">${stats.rewarded.toLocaleString()} Rewarded</span>
        <span className="text-gray-600">{stats.listings} Listings</span>
        <span className="text-gray-600">{stats.submissions} Submissions</span>
      </div>
    </div>
  );
};
