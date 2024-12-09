// types.ts
interface Bounty {
  id: string;
  title: string;
  submissions: number;
  dueIn: {
    time: number;
    unit: string;
  };
  reward: {
    amount: number;
    currency: 'USDC' | 'TON';
  };
  status: 'active' | 'pending' | 'failed' | 'neutral';
}