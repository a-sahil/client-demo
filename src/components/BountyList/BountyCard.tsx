// components/BountyList/BountyCard.tsx
import { Zap } from 'lucide-react';
import { FC } from 'react';

interface BountyCardProps {
  bounty: Bounty;
}

export const BountyCard: FC<BountyCardProps> = ({ bounty }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-emerald-500';
      case 'pending':
        return 'bg-yellow-500';
      case 'failed':
        return 'bg-red-500';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <div className="px-6 py-4 hover:bg-gray-50 cursor-pointer">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className="text-gray-900 font-medium mb-1">{bounty.title}</h3>
          <div className="flex items-center text-sm text-gray-500">
          <Zap size={14}  />
            <span>{bounty.submissions} Submissions</span>
            <span className="mx-2">•</span>
            <span>Due in {bounty.dueIn.time}{bounty.dueIn.unit}</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="font-medium">{bounty.reward.amount}</span>
          <span className="text-gray-500">{bounty.reward.currency}</span>
          <div className={`w-2 h-2 rounded-full ${getStatusColor(bounty.status)}`} />
        </div>
      </div>
    </div>
  );
};
