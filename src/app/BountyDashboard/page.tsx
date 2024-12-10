'use client';

import { FC, useState, useEffect } from 'react';
import { Sidebar } from '@/components/Layout/Sidebar';
import MyListing from '@/components/TeamSettingLayout/MyListing';
import TeamMembers from '@/components/TeamSettingLayout/TeamMembers';
import BountyModal from '../../components/BountyPopup/BountyModal';
import { Menu } from 'lucide-react'; 

const BountyDashboard: FC = () => {
  const [activeComponent, setActiveComponent] = useState<string>('MyListing');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false); 

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  const handleCreateBounty = () => {
    console.log('Creating bounty...');
    setIsModalOpen(false);
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'MyListing':
        return <MyListing />;
      case 'TeamSettings':
        return <TeamMembers />;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
   
      <div className="hidden lg:block w-60">
        <Sidebar setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
      </div>

      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 lg:hidden" onClick={() => setIsSidebarOpen(false)}>
          <div className="w-60 bg-white min-h-full">
            <Sidebar setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
          </div>
        </div>
      )}

      {!isSidebarOpen && ( 
        <button
          className="lg:hidden fixed top-2 left-5 z-50 p-2 bg-white shadow-md rounded-full" 
          onClick={() => setIsSidebarOpen(true)}
        >
          <Menu size={24} />
        </button>
      )}

      <div className="flex-1 p-4">
        {renderActiveComponent()}

        <BountyModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onCreateBounty={handleCreateBounty}
        />
      </div>
    </div>
  );
};

export default BountyDashboard;
