"use client";

import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useRouter } from 'next/navigation';

const SuccessMessage = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen flex items-start p-4 md:p-6">
      <div className="w-full max-w-md space-y-4">
        {/* Animation container */}
        <div className="relative w-[300px] -ml-16 sm:-ml-20 md:-ml-24">
          <DotLottieReact
            src="https://lottie.host/f5fec153-6504-4465-b154-f1a41783a4de/cmLnhdTr73.lottie"
            loop
            autoplay
          />
        </div>
        
        <div className="space-y-2">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            Bounty Listed Successfully
          </h2>
          
          <p className="text-sm md:text-base text-gray-600">
            Your bounty will be under verification and will be live under 24 hours
          </p>
        </div>

        <div
        className="my-4"
        style={{
          borderTop: "2px dotted #D3D3D3",
        }}
      ></div>
        
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button className="text-left text-blue-500 hover:text-blue-600 transition-colors"
          onClick={() => router.push('/BountyDashboard')}
          >
            View bounty page
          </button>
          <button className="text-left text-blue-500 hover:text-blue-600 transition-colors">
            Go back to dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;