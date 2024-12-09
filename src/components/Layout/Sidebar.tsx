// components/Layout/Sidebar.tsx
'use client'
import { FC } from 'react';
import { List, MessageSquare, UserRoundCog } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type SidebarProps = {
  setActiveComponent: (component: string) => void;
  activeComponent: string;
};

export const Sidebar: FC<SidebarProps> = ({ setActiveComponent, activeComponent }) => {
  const router = useRouter();
  const handleButtonClick = (component: string) => {
    if (component === 'GetHelp') {
      window.open('https://t.me/Sahil0x49', '_blank');
    } else {
      setActiveComponent(component);
    }
  };

  return (
    <aside className="fixed top-0 left-0 w-60 h-screen border-r border-gray-200 bg-white">
      <div className="p-4 mt-4">
        <div className="mb-4">
          <Image src="/Group.png" alt="Logo" width={26} height={25} />
        </div>

        <div className="space-y-2 mt-12">
          <div
            className={`flex items-center cursor-pointer px-4 py-2 rounded-md ${
              activeComponent === 'MyListing' ? 'bg-green-50 text-green-600' : 'bg-gray-50 text-gray-600'
            }`}
            onClick={() => handleButtonClick('MyListing')}
          >
            <List size={15} />
            <span className="text-sm ml-3">My Listings</span>
          </div>

          <div
            className={`flex items-center cursor-pointer px-4 py-2 rounded-md ${
              activeComponent === 'TeamSettings' ? 'bg-green-50 text-green-600' : 'text-gray-600'
            }`}
            onClick={() => handleButtonClick('TeamSettings')}
          >
            <UserRoundCog size={15} />
            <span className="text-sm ml-3">Team Settings</span>
          </div>

          <div
            className={`flex items-center cursor-pointer px-4 py-2 rounded-md ${
              activeComponent === 'GetHelp' ? 'bg-green-50 text-green-600' : 'text-gray-600'
            }`}
            onClick={() => handleButtonClick('GetHelp')}
          >
            <MessageSquare size={15} />
            <span className="text-sm ml-3">Get Help</span>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="absolute bottom-4 left-4">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gray-200 mr-2 flex justify-center items-center">
            <span className="text-gray-500">P</span>
          </div>
          <div>
            <div className="text-sm font-medium">Parry</div>
            <button
              className="text-xs text-gray-500"
              onClick={() => router.push('/EditProfile')}
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
