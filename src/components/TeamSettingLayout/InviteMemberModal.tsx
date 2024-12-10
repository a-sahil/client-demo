'use client';
import React from 'react';
import { Input, Radio, Modal } from 'antd';
import type { RadioChangeEvent } from 'antd';
import './customRadio.css'; 

interface InviteMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInvite: (email: string, type: 'Member' | 'Admin') => void;
}

const InviteMemberModal: React.FC<InviteMemberModalProps> = ({
  isOpen,
  onClose,
  onInvite,
}) => {
  const [email, setEmail] = React.useState('');
  const [memberType, setMemberType] = React.useState<'Member' | 'Admin'>('Member');

  const handleTypeChange = (e: RadioChangeEvent) => {
    setMemberType(e.target.value);
  };

  const handleSubmit = () => {
    if (email) {
      onInvite(email, memberType);
      setEmail('');
      setMemberType('Member');
      onClose();
    }
  };

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width={500}
      bodyStyle={{ padding: 0 }}
      style={{
        borderRadius: '50px', 
        overflow: 'hidden', 
      }}
      modalRender={(modal) => (
        <div style={{ borderRadius: '50px', overflow: 'hidden' }}>
          {modal}
        </div>
      )}
    >
      <div className="px-6 py-5">
  
        <h2 className="text-2xl font-semibold text-[#000000] -mb-6">
          Invite Member
        </h2>

        <hr className="h-px my-8 bg-[#D7DEDD] border-0" />
     
        <div className="mb-3">
          <label className="block text-sm font-medium text-[#333333] mb-2">
            Add Email Address
          </label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-64 rounded-lg border-gray-200"
            size="large"
          />
        </div>

     
        <div className="mb-8">
          <label className="block text-sm font-medium text-[#333333] mb-3">
            Member Type
          </label>
          <Radio.Group 
            onChange={handleTypeChange} 
            value={memberType}
            className="flex flex-col gap-4"
          >
            <Radio value="Member" className="items-start custom-radio">
              <div className="flex flex-col">
                <span className="font-medium text-[#1E1E1E]">Member</span>
                <span className="text-sm text-[#757575] mt-1">
                  Member can manage bounties and projects, can assign winners and make payments
                </span>
              </div>
            </Radio>
            <Radio value="Admin" className="items-start custom-radio">
              <div className="flex flex-col">
                <span className="font-medium text-[#1E1E1E]">Admin</span>
                <span className="text-sm text-[#757575] mt-1">
                  Admin will have all privileges
                </span>
              </div>
            </Radio>
          </Radio.Group>
        </div>


        <button
          onClick={handleSubmit}
          className="w-full py-2.5 bg-[#0ACD6C] text-white rounded-3xl
                  transition-colors font-medium
                   focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        >
          Send Invite
        </button>
      </div>
    </Modal>
  );
};

export default InviteMemberModal;
