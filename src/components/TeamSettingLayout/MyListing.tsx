
import { FC } from 'react';
import {Sidebar} from '@/components/Layout/Sidebar';
import {SearchHeader} from '@/components/Header/SearchHeader';
import {TabsAndStats} from '@/components/Header/TabsAndStats';
import {BountyCard} from '@/components/BountyList/BountyCard';

const bounties: Bounty[] = [
  {
    id: '1',
    title: 'Recap for Hanoi Build Station Wormhole on Solana Ideathon',
    submissions: 24,
    dueIn: { time: 2, unit: 'h' },
    reward: { amount: 100, currency: 'USDC' },
    status: 'active',
  },
  {
    id: '2',
    title: 'Wormhole: Road to Sigma Malaysia Mini Hackathon',
    submissions: 54,
    dueIn: { time: 17, unit: 'h' },
    reward: { amount: 2000, currency: 'USDC' },
    status: 'pending',
  },
  {
    id: '3',
    title: 'DevOps - ArgoCD setup',
    submissions: 0,
    dueIn: { time: 17, unit: 'h' },
    reward: { amount: 300, currency: 'TON' },
    status: 'neutral',
  },
  {
    id: '4',
    title: 'DevOps - ArgoCD setup',
    submissions: 0,
    dueIn: { time: 17, unit: 'h' },
    reward: { amount: 300, currency: 'TON' },
    status: 'failed',
  },
];

const stats = {
  rewarded: 100000,
  listings: 3,
  submissions: 990,
};

const MyListing: FC = () => {
  return (
    <div className="flex min-h-screen bg-white">
      <main className="flex-1">
        <SearchHeader />
        <TabsAndStats stats={stats} />
        <div >
          {bounties.map((bounty) => (
            <BountyCard key={bounty.id} bounty={bounty} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default MyListing;