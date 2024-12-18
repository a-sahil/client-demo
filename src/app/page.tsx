"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Dashboard from "@/components/Dashboard";

import Link from "next/link";

const BountyPlatform = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const categories = [
    "DepIn",
    "DeFi",
    "Infrastructure",
    "Gaming",
    "DAO",
    "Dev Tooling",
  ];

  const router = useRouter();

  return (
    <div className="min-h-screen">
      <nav className="flex flex-col sm:flex-row justify-between items-center p-4 sm:mb-12 sm:ml-12 sm:mt-4 sm:mr-6 gap-4">
        <div className="text-green-500 text-2xl font-bold">
          <Link href="/">
            <Image src="/Group.png" alt="logo" height={30} width={30} />
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <button
            className="px-4 py-2 border border-green-500 text-green-500 rounded-lg hover:bg-green-500/10 transition-colors w-full sm:w-auto"
            onClick={() => router.push("/BecomeSponsor")}
          >
            Become a Sponsor
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 
                   transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
            onClick={() => router.push("signup")}
          >
            Sign Up
          </button>
        </div>
      </nav>

      <header className="relative p-4 sm:p-6 mx-2 sm:mx-[35px]">
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,111,255,0.3)] via-[rgba(10,205,108,0.3)] to-[rgba(180,224,22,0.3)] blur-sm -z-10"></div>
        <div className="w-full mx-0 px-0 relative">
          <div className="w-full">
            <h1 className="text-xl md:text-3xl font-bold text-white mb-4 leading-tight text-left">
              Maybe the real DApps were friends{" "}
              <br className="hidden sm:block" /> we made all along
            </h1>
            <p className="text-gray-200 text-base md:text-lg text-left">
              Hottest TON Bounty discovery platform you can&apos;t afford to
              miss
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-8xl mx-2 sm:mx-[35px] px-0 py-4 sm:py-8">
        <div className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-12 items-stretch sm:items-center">
          <div className="relative flex-1 flex items-center border border-gray-700 rounded-lg">
            <input
              type="text"
              placeholder="Search bounties"
              className="text-white bg-transparent pl-4 pr-12 py-2 focus:ring-0 focus:outline-none w-full"
            />
            <span className="absolute right-3 text-gray-400 hidden sm:block">
              ⌘K
            </span>
          </div>
          <div className="relative w-full sm:w-auto">
            <button
              onClick={toggleDropdown}
              className="w-full sm:w-[200px] flex items-center justify-between border border-gray-700 rounded-lg px-4 py-2 text-white"
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              Hottest Bounties today 🔥
            </h2>

            <div className="space-y-4 sm:space-y-6">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-[#1A1A1A] rounded-lg p-3 sm:p-4 cursor-pointer"
                  onClick={openModal}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 gap-2">
                    <div className="flex items-center space-x-3 sm:space-x-6">
                      <Image
                        src="/Frame 1.png"
                        alt="Frame 1"
                        height={36}
                        width={36}
                        className="mt-4"
                      />
                      <div className="flex flex-col sm:flex-row sm:space-x-6 gap-2">
                        <h3 className="text-white font-semibold text-lg">
                          Iknowspots
                        </h3>
                        <div className="flex flex-wrap gap-2 mt-1">
                          <span className="px-3 py-0.5 rounded-full text-sm bg-yellow-500/20 text-yellow-500">
                            DeFi
                          </span>
                          <span className="px-3 py-0.5 rounded-full text-sm bg-purple-500/20 text-purple-500">
                            Gaming
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2">
                      <Image
                        src="/Img_margin.png"
                        alt="ton-currency-logo"
                        height={15}
                        width={15}
                      />
                      <span className="text-white font-semibold">40k</span>
                      <span className="text-gray-400">TON</span>
                    </div>
                  </div>

                  <p className="text-white mb-4 ml-14 -mt-2">
                    A professional Web3 event handling website with strong
                    fundamentals
                  </p>

                  <div
                    className="my-4"
                    style={{ borderTop: "2px dotted #3A3A3A" }}
                  ></div>

                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm text-gray-500 ml-4 sm:ml-10">
                    <div className="flex items-center gap-2">
                      <span className="h-4 w-4 text-white fill-current">
                        ⭐
                      </span>
                      <span>Bounty</span>
                    </div>
                    <div className="hidden sm:block h-4 w-px bg-gray-600"></div>
                    <span>Ends in 24d</span>
                    <div className="hidden sm:block h-4 w-px bg-gray-600"></div>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                      <span className="text-green-500">Featured</span>
                    </div>
                  </div>
                </div>
              ))}

              {isModalOpen && (
                <>
                  <style jsx global>{`
                    body {
                      overflow: hidden;
                      margin: 0;
                      padding: 0;
                    }

                    .scrollbar-hide {
                      -ms-overflow-style: none;
                      scrollbar-width: none;
                    }

                    .scrollbar-hide::-webkit-scrollbar {
                      display: none;
                    }

                    .modal-backdrop {
                      position: fixed;
                      inset: 0;
                      min-height: 100vh;
                      min-width: 100vw;
                      background: rgba(0, 0, 0, 0.8);
                      backdrop-filter: blur(16px);
                      -webkit-backdrop-filter: blur(16px);
                      z-index: 40;
                    }

                    #portal-root {
                      position: relative;
                      z-index: 50;
                    }
                  `}</style>

                  <div className="modal-backdrop" />
                  <div className="fixed inset-0 w-full flex justify-center items-start z-50">
                    <div className="bg-[#1A1A1A] rounded-lg relative w-full max-w-7xl h-[90vh] mt-8 mx-4 overflow-hidden">
                      <div className="h-full overflow-y-auto scrollbar-hide p-8">
                        <Dashboard />
                      </div>

                      <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white text-xl z-[60]"
                      >
                        &times;
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="mt-6 lg:mt-0">
            <h2 className="text-xl font-bold text-white mb-4 sm:mb-6">
              Recent Submissions
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="bg-[#1A1A1A] rounded-lg p-3 sm:p-4 flex items-center gap-3 sm:gap-4"
                >
                  <Image
                    src="/fre"
                    alt="Avatar"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-medium truncate">
                      Niko Shestov
                    </h3>
                    <p className="text-gray-400 text-sm truncate">
                      XYZ Bounty Challenge
                    </p>
                  </div>
                  <span className="text-gray-500 text-sm whitespace-nowrap">
                    20 mins ago
                  </span>
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
