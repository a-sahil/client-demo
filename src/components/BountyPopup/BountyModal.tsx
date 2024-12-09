'use client';
import React from 'react';
import { Zap, X } from 'lucide-react';
import { Button, Modal } from 'antd';
import { useRouter } from 'next/navigation';

interface BountyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateBounty: () => void;
}

const BountyModal: React.FC<BountyModalProps> = ({
  
  isOpen,
  onClose,
}) => {
  const router = useRouter();

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width={460}
      closeIcon={
        <button 
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 
                     transition-colors focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>
      }
      className="rounded-2xl"
    >
      <div className="pt-12 pb-8 px-8 text-center">
        {/* Bounty Icon */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 text-purple-600 font-medium">
            <Zap className="w-5 h-5" />
            <span>Bounty</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-3xl font-semibold text-gray-900 mb-4">
          Host a Work Competition
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-md mx-auto">
          All participants complete your scope <br />
          of work, and the best submission(s) <br />
          are rewarded. Get multiple options to <br />
          choose from.
        </p>

        {/* Create Button */}
        <Button
              type="primary"
              htmlType="submit"
              className="w-full h-12 border-none text-lg rounded-xl"
              style={{
                background: "linear-gradient(to right, #1FBF4A, #22CC77)",
                borderColor: "none",
              }}
              onClick={() => router.push('/BountyListingBasic')}
            >
              Create Bounty
            </Button>
      </div>
    </Modal>
  );
};

export default BountyModal;
