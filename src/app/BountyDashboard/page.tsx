'use client';

import { FC, useState, useEffect } from 'react';
import { Sidebar } from '@/components/Layout/Sidebar';
import MyListing from '@/components/TeamSettingLayout/MyListing';
import TeamMembers from '@/components/TeamSettingLayout/TeamMembers';
import BountyModal from '../../components/BountyPopup/BountyModal';
import { Menu } from 'lucide-react'; // Import a menu icon for the mobile sidebar toggle

const BountyDashboard: FC = () => {
  const [activeComponent, setActiveComponent] = useState<string>('MyListing');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false); // Sidebar state for mobile view

  // Show the modal when the user visits the page for the first time
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
      {/* Sidebar for larger screens */}
      <div className="hidden lg:block w-60"> {/* Sidebar hidden on screens smaller than 'lg' */}
        <Sidebar setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
      </div>

      {/* Sidebar for mobile - toggled with the button */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 lg:hidden" onClick={() => setIsSidebarOpen(false)}>
          <div className="w-60 bg-white min-h-full">
            <Sidebar setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
          </div>
        </div>
      )}

      {/* Hamburger menu for smaller screens */}
      {!isSidebarOpen && ( // Only show the hamburger button when the sidebar is closed
        <button
          className="lg:hidden fixed top-2 left-5 z-50 p-2 bg-white shadow-md rounded-full" // Positioning the button at the top left
          onClick={() => setIsSidebarOpen(true)}
        >
          <Menu size={24} />
        </button>
      )}

      {/* Main content on the right */}
      <div className="flex-1 p-4">
        {renderActiveComponent()}

        {/* Modal */}
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
