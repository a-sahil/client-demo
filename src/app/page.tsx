'use client';
import React, { useState } from 'react';
import { ChevronDown, Flame, ChevronUp } from 'lucide-react';
import Image from 'next/image';

const BountyPlatform = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const categories = ['DepIn', 'DeFi', 'Infrastructure', 'Gaming', 'DAO', 'Dev Tooling'];

  return (
    <div className="min-h-screen">
      <nav className="flex justify-between items-center mb-12 ml-8 mt-10 mr-6">
        <div className="text-green-500 text-2xl font-bold">
          <Image src="/Group.png" alt="logo" height={30} width={30} />
        </div>
        <div className="space-x-4">
          <button className="px-4 py-2 border border-green-500 text-green-500 rounded-lg hover:bg-green-500/10 transition-colors">
            Become a Sponsor
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
            Sign Up
          </button>
        </div>
      </nav>

      <header className="relative p-6 mx-[35px]">
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,111,255,0.3)] via-[rgba(10,205,108,0.3)] to-[rgba(180,224,22,0.3)] blur-sm -z-10"></div>
        <div className="w-full mx-0 px-0 relative">
          <div className="w-full">
            <h1 className="text-xl md:text-3xl font-bold text-white mb-4 leading-tight text-left">
              Maybe the real DApps were the friends we made all along
            </h1>
            <p className="text-gray-200 text-lg md:text-lg text-left">
              Hottest TON Bounty discovery platform you can&apos;t afford to miss
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-0 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-12 items-center">
          <div className="relative flex items-center border border-gray-700 rounded-lg min-w-[250px]">
            <input
              type="text"
              placeholder="Search bounties"
              className="text-white bg-transparent pl-4 pr-2 md:pr-56 py-2 focus:ring-0 focus:outline-none w-full"
            />
            <span className="absolute right-3 text-gray-400">⌘K</span>
          </div>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center justify-between border border-gray-700 rounded-lg px-4 py-2 text-white min-w-[200px]"
            >
              <span>Categories</span>
              {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {isOpen && (
              <ul className="absolute mt-2 w-full border border-gray-700 rounded-lg bg-[#050505] shadow-lg z-10">
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-800 text-white cursor-pointer"
                    onClick={() => {
                      console.log(`Selected: ${category}`);
                      setIsOpen(false);
                    }}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Flame className="text-orange-500" />
              Hottest Bounties today
            </h2>
            <div className="space-y-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-[#1A1A1A] rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-6">
                      <h3 className="text-white font-semibold text-lg mb-2">Iknowspots</h3>
                      <div className="flex gap-2">
                        <span className="px-3 py-2 rounded-full text-sm bg-yellow-500/20 text-yellow-500">DeFi</span>
                        <span className="px-3 py-2 rounded-full text-sm bg-purple-500/20 text-purple-500">Gaming</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-[#1A1A1A] px-4 py-2 rounded-lg">
                      <span className="flex">
                        <Image src="/Img_margin.png" alt="ton-currency-logo" height={15} width={15} />40k
                      </span>
                      <span className="text-white">TON</span>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4">
                    A professional Web3 event handling website with strong fundamentals
                  </p>
                  <div className="border-t border-dotted border-gray-800 my-4"></div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>Bounty</span>
                    <span className="w-1 h-1 bg-[#1A1A1A] rounded-full"></span>
                    <span>Ends in 24d</span>
                    <span className="w-1 h-1 bg-[#1A1A1A] rounded-full"></span>
                    <span className="text-green-500">Featured</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-6">Recent Submissions</h2>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="bg-[#1A1A1A] rounded-lg p-4 flex items-center gap-4">
                  <Image
                    src="/api/placeholder/40/40"
                    alt="Avatar"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="flex-1">
                    <h3 className="text-white font-medium">Niko Shestov</h3>
                    <p className="text-gray-400 text-sm">XYZ Bounty Challenge</p>
                  </div>
                  <span className="text-gray-500 text-sm">20 mins ago</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BountyPlatform;
