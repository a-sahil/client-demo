'use client';
import React, { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const router = useRouter();
  const [modalState, setModalState] = useState('closed'); // 'closed', 'opening', 'open', 'closing'

  useEffect(() => {
    if (isOpen) {
      setModalState('opening');
      const timer = setTimeout(() => setModalState('open'), 10);
      return () => clearTimeout(timer);
    } else {
      if (modalState !== 'closed') {
        setModalState('closing');
        const timer = setTimeout(() => setModalState('closed'), 300);
        return () => clearTimeout(timer);
      }
    }
  }, [isOpen]);

  if (modalState === 'closed') return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleGoogleSignIn = () => {
    console.log('Google sign-in clicked');
  };

  const handleEmailSignIn = () => {
    router.push('/email-signin');
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4
        ${modalState === 'opening' ? 'bg-opacity-0' : 'bg-opacity-50'}
        ${modalState === 'closing' ? 'bg-opacity-0' : 'bg-opacity-50'}
        bg-black transition-all duration-300`}
      onClick={handleBackdropClick}
    >
      <div 
        className={`w-full max-w-md bg-black rounded-3xl shadow-2xl p-8 md:p-10 relative
          transform transition-all duration-300 ease-out
          ${modalState === 'opening' ? 'scale-95 opacity-0 translate-y-4' : 'scale-100 opacity-100 translate-y-0'}
          ${modalState === 'closing' ? 'scale-95 opacity-0 translate-y-4' : 'scale-100 opacity-100 translate-y-0'}
        `}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white
                   transition-colors duration-200 p-2 rounded-full
                   hover:bg-gray-800"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className={`text-center mb-8 md:mb-10 transition-all duration-300 delay-150
          ${modalState === 'opening' ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}
          ${modalState === 'closing' ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}
        `}>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
            You&apos;re one step away
          </h1>
          <p className="text-gray-400 text-sm md:text-base">
            From earning in global standards
          </p>
        </div>

        <div className={`space-y-4 transition-all duration-300 delay-200
          ${modalState === 'opening' ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}
          ${modalState === 'closing' ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}
        `}>
          {/* Google Sign In Button */}
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 
                     bg-transparent border border-gray-700 rounded-lg text-white
                     hover:bg-gray-900 transition-all duration-200
                     focus:outline-none focus:ring-2 focus:ring-gray-500
                     hover:scale-[1.02] active:scale-[0.98]"
          >
            <Image
              src="/google.svg"
              alt="Google"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <span className="text-sm md:text-base">Sign in with Google</span>
          </button>

          {/* Email Sign In Button */}
          <button
            onClick={handleEmailSignIn}
            className="w-full flex items-center justify-center gap-3 px-4 py-3
                     bg-transparent border border-gray-700 rounded-lg text-white
                     hover:bg-gray-900 transition-all duration-200
                     focus:outline-none focus:ring-2 focus:ring-gray-500
                     hover:scale-[1.02] active:scale-[0.98]"
          >
            <Mail className="w-5 h-5" />
            <span className="text-sm md:text-base">Continue with Email</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;