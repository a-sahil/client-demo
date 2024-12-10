'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';
import InviteMemberModal from './InviteMemberModal'; // Import the InviteMemberModal

interface TeamMember {
  id: string;
  name: string;
  username: string;
  email: string;
  role: 'Admin' | 'Member';
  avatar: string;
}

const TeamMembers: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false); // State for modal visibility

  const members: TeamMember[] = [
    {
      id: '1',
      name: 'Saksham Tyagi',
      username: '@samscasm',
      email: 'sakshamtyagi2008@gmail.com',
      role: 'Admin',
      avatar: '/avatar.png',
    },
  ];


  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleInviteClick = () => {
    setIsInviteModalOpen(true); 
  };

  const handleInviteMember = (email: string, type: 'Member' | 'Admin') => {
    console.log('Inviting:', email, type);
   
  };

  const handleModalClose = () => {
    setIsInviteModalOpen(false); 
  };

  return (
    <div className="flex-1 min-h-screen">
      <div className="p-4 sm:p-6 -mt-5">
       
        <div className="mb-8 sm:mb-12">
          <h1 className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-800 mb-1 sm:mb-2">
            Team Members
          </h1>
          <p className="text-sm text-gray-500 sm:text-base">
            Manage who gets access to your sponsor profile
          </p>
        </div>

  
        <div className="relative flex flex-col sm:flex-row gap-4 mb-6">
  
          <div className="w-full sm:w-3/5 order-2 sm:order-1 sm:-mt-7">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search for Members"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 
                         focus:outline-none focus:ring-2 focus:ring-emerald-500/20 
                         focus:border-emerald-500 text-sm placeholder-gray-400"
              />
            </div>
          </div>

   
          <button
            className="w-full sm:w-auto px-4 py-2 bg-[#1FBF4A] text-white 
              rounded-lg hover:bg-[#22CC77] transition-colors 
              flex items-center justify-center text-sm font-medium
              order-1 sm:order-2 sm:-mt-8 ml-auto"
            onClick={handleInviteClick} 
          >
            <span className="mr-1">+</span>
            Invite Members
          </button>
        </div>

       
        <div className="-mx-4 sm:mx-0 overflow-auto">
          <div className="min-w-[600px] rounded-lg bg-gray-50">
            <table className="w-full">
              <thead>
                <tr className="text-left">
                  <th className="px-4 sm:px-6 py-3 text-sm font-medium text-gray-500">Member</th>
                  <th className="px-4 sm:px-6 py-3 text-sm font-medium text-gray-500">Role</th>
                  <th className="px-4 sm:px-6 py-3 text-sm font-medium text-gray-500">Email</th>
                </tr>
              </thead>

              <tbody className="bg-white">
                {filteredMembers.map((member) => (
                  <tr key={member.id} className="border-t border-gray-100">
                    <td className="px-4 sm:px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 relative rounded-full overflow-hidden mr-3 flex-shrink-0">
                          <Image src={member.avatar} alt={member.name} fill className="object-cover" />
                        </div>
                        <div className="min-w-0">
                          <div className="font-medium text-gray-900 truncate">{member.name}</div>
                          <div className="text-sm text-gray-500 truncate">{member.username}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 sm:px-6 py-4">
                      <span
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                                   bg-emerald-100 text-emerald-800"
                      >
                        {member.role}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-4">
                      <span className="text-gray-600 text-sm break-all">{member.email}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

       
            {filteredMembers.length === 0 && (
              <div className="text-center py-12 bg-white">
                <p className="text-gray-500 text-sm">No members found</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <InviteMemberModal
        isOpen={isInviteModalOpen} // Pass the modal open state
        onClose={handleModalClose} // Pass the modal close function
        onInvite={handleInviteMember} // Pass the invite handling function
      />
    </div>
  );
};

export default TeamMembers;
