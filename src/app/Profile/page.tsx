'use client'
import React, { useEffect, useState } from 'react';
import { Share, Edit, X, Linkedin, Github, Globe } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Proof from '@/components/ProfileProof/ProjectProofForm';
import ProjectProofForm from '@/components/ProfileProof/ProjectProofForm';

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

const ProfilePage = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const router = useRouter();

  useEffect(() => {
    try {
      const storedData = localStorage.getItem('userData');
      if (storedData) {
        setUserData(JSON.parse(storedData));
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }, []);

  if (!userData) {
    return (
      <div className="min-h-screen bg-[#0D0D0D] text-white flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  const renderSocialLinks = () => {
    const { socialLinks } = userData;
    
    return (
      <div className="flex gap-4 mb-12">
        {socialLinks?.x && (
          <a href={socialLinks.x} target="_blank" rel="noopener noreferrer">
            <X className="w-6 h-6 text-[#ACACAC] hover:text-white transition-colors" />
          </a>
        )}
        {socialLinks?.linkedin && (
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 text-[#ACACAC] hover:text-white transition-colors" />
          </a>
        )}
        {socialLinks?.github && (
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 text-[#ACACAC] hover:text-white transition-colors" />
          </a>
        )}
        {socialLinks?.portfolio && (
          <a href={socialLinks.portfolio} target="_blank" rel="noopener noreferrer">
            <Globe className="w-6 h-6 text-[#ACACAC] hover:text-white transition-colors" />
          </a>
        )}
      </div>
    );
  };

  const renderSkills = () => {
    const defaultSkillGroups = {
      Frontend: ['React'],
      BLOCKCHAIN: ['Solidity'],
      DESIGN: ['UI/UX Design', 'Graphic Design', 'Illustration'],
    };

    if (userData.skills && Array.isArray(userData.skills)) {
      return (
        <div>
          <p className="text-[#ACACAC] mb-2">Skills</p>
          <div className="flex flex-wrap gap-2">
            {userData.skills.map((skill, index) => (
              <span key={index} className="px-3 py-1 bg-[#1A1A1A] rounded-full text-sm text-[#D5DDF0]">
                {skill}
              </span>
            ))}
          </div>
        </div>
      );
    }

    return Object.entries(defaultSkillGroups).map(([category, skills]) => (
      <div key={category}>
        <p className="text-[#ACACAC] mb-2">{category}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span key={index} className="px-3 py-1 bg-[#1A1A1A] rounded-full text-sm text-[#D5DDF0]">
              {skill}
            </span>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white p-8">
      <div className="max-w-3xl mx-auto">
        {/* Profile Header */}
        <div className="flex justify-between items-start mb-8">
          <div className="items-start gap-4">
            {userData.profilePicture ? (
              <div className="relative w-24 h-24 right-8 shadow-md">
                <Image 
                  src={userData.profilePicture}
                  alt="Profile"
                  width={96}
                  height={96}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            ) : (
              <div className="w-24 h-24 bg-[#1A1A1A] rounded-full"/>
            )}
            <div>
              <h1 className="text-2xl font-bold text-[#D5DDF0]">
                {`${userData.firstName || ''} ${userData.lastName || ''}`}
              </h1>
              <p className="text-[#ACACAC]">@{userData.username || 'username'}</p>
              <p className="text-[#D5DDF0] mt-1">Ton Wallet: {userData.walletAddress || 'Not provided'}</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <button 
              className="px-4 py-2 bg-[#1A1A1A] border rounded-lg flex items-center gap-2 text-[#ACACAC] hover:bg-[#252525] transition-colors"
              onClick={() => router.push('/updateProfile')}
            >
              <Edit className="w-4 h-4" /> Edit Profile
            </button>
            <button className="px-4 py-2 bg-[#0D0D0D] border border-[#ACACAC] text-[#ACACAC] rounded-lg flex items-center gap-2 hover:bg-[#1A1A1A] transition-colors">
              <Share className="w-4 h-4" /> Share
            </button>
          </div>
        </div>

        <hr className="h-px my-8 bg-[#18212E] border-0" />

        {/* Stats */}
        <div className="flex gap-8 mb-8">
  {/* Stats */}
  <div className="flex gap-8">
    <div>
      <p className="text-lg font-bold text-[#D3D9E5]">$0</p>
      <p className="text-[#ACACAC]">Earned</p>
    </div>
    <div>
      <p className="text-lg font-bold text-[#D3D9E5]">0</p>
      <p className="text-[#ACACAC]">Submissions</p>
    </div>
    <div>
      <p className="text-lg font-bold text-[#D3D9E5]">0</p>
      <p className="text-[#ACACAC]">Bounties Won</p>
    </div>
  </div>
 <div className="ml-auto">
            <h2 className="text-xl font-semibold mb-4 text-[#D5DDF0]">Skills</h2>
            <div className="space-y-4">
              {renderSkills()}
              {userData.subSkills && Array.isArray(userData.subSkills) && (
                <div>
                  <p className="text-[#ACACAC] mb-2">Sub Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {userData.subSkills.map((skill: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined, index: React.Key | null | undefined) => (
                      <span key={index} className="px-3 py-1 bg-[#1A1A1A] rounded-full text-sm text-[#D5DDF0]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

                  {/* Details and Skills */}
                  <div className="grid grid-cols-2 gap-8 mb-12 -mt-28">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-[#D5DDF0]">Details</h2>
            <div className="space-y-2 text-[#ACACAC]">
              <p>{userData.Bio || "Looking for Freelance Opportunities"}</p>
              <p>Works at Student</p>
              <p>Based in India</p>
            </div>
          </div>

        </div>

        {/* Social Links */}
        {renderSocialLinks()}

        <hr className="h-px my-4 bg-[#18212E] border-0" />

        {/* Proof of Work */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">Proof of Work</h2>
          <hr className="h-px my-4 bg-[#18212E] border-0" />
          
          <div className="flex gap-4 text-[#D5DDF0] items-end justify-end mb-8">
            <button className="px-4 py-2 border-b-2 border-transparent hover:border-green-500 transition-colors">
              Activity Feed
            </button>
            <button className="px-4 py-2 border-b-2 border-transparent hover:border-green-500 transition-colors">
              Personal Projects
            </button>
          </div>
          
          <div className="text-center py-16 rounded-lg mb-4">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Image 
                src="/talent-empty.svg.png"
                alt="Empty state illustration"
                height={99}
                width={99}
                priority
              />
            </div>
            <p className="text-[#ACACAC] mb-2">Add Some Proof Of Work</p>
            <p className="text-[#666666] mb-4">To Build Your Profile</p>
            <button className="px-20 py-2 bg-gradient-to-r from-[#1FBF4A] to-[#22CC77]  rounded-lg mb-4  transition-colors">Add</button>
            <div>
              <button className="px-8 py-2 bg-[#0D0D0D] text-[#ACACAC] border border-[#ACACAC] rounded-lg hover:bg-[#1A1A1A] transition-colors">
                Browse Bounties
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;