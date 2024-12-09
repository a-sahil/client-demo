// components/Header/SearchHeader.tsx
import { FC } from 'react';
import { Search } from 'lucide-react';
import { Button } from 'antd';
import { useRouter } from 'next/navigation';

export const SearchHeader: FC = () => {
  const router = useRouter();
  return (
    <div className="px-6 py-4 mt-6 flex justify-between items-center">
      <div className="relative flex-1 max-w-2xl">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Search for bounties"
          className="w-full pl-10 pr-4 py-2 rounded-lg focus:outline-none border border-gray-400 text-black"
        />
      </div>
      
      <Button
              type="primary"
              htmlType="submit"
              className=" h-10 border-none text-lg rounded-md"
              style={{
                background: "linear-gradient(to right, #1FBF4A, #22CC77)",
                borderColor: "none",
              }}
              onClick={() => router.push('/BountyListingBasic')}
            >
              Create Bounty
            </Button>
    </div>
  );
};