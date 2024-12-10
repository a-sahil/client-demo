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

interface SocialLinks {
  x?: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
}

interface UserData {
  firstName?: string;
  lastName?: string;
  username?: string;
  walletAddress?: string;
  profilePicture?: string;
  socialLinks?: SocialLinks;
  skills?: string[];
  subSkills?: string[];
  Bio?: string;
}