'use client';
import React, { useState, useEffect } from 'react';
import { Select, Input, Button } from 'antd';
import { SearchOutlined, DownOutlined } from '@ant-design/icons';
import Image from 'next/image';

interface Token {
  symbol: string;
  icon: string;
}

interface PrizeComponentProps {
  onPrizeChange?: (amount: number) => void;
  onValidate?: (isValid: boolean) => void; // Validation prop
}

const PrizeComponent: React.FC<PrizeComponentProps> = ({ onPrizeChange, onValidate }) => {
  const [selectedToken, setSelectedToken] = useState<string>('TON');
  const [prizeAmount, setPrizeAmount] = useState<string>('5000');
  const [isValid, setIsValid] = useState<boolean>(true); // Validation state

  const tokens: Token[] = [
    { symbol: 'TON', icon: '/ton_symbol.png' },
  
  ];

  const validatePrize = (value: string) => {
    const amount = parseFloat(value);
    const valid = !isNaN(amount) && amount > 0;
    setIsValid(valid);
    onValidate?.(valid);
    if (valid) {
      onPrizeChange?.(amount);
    }
  };

  useEffect(() => {
    validatePrize(prizeAmount);
  }, [prizeAmount]);

  return (
    <div className="space-y-6">
      {/* Token Selector */}
      <div>
        <label className="text-[#64748B] text-sm mb-2 block">Select Token</label>
        <Select
          className="w-full"
          value={selectedToken}
          onChange={setSelectedToken}
          suffixIcon={<DownOutlined className="text-[#2D3748] mt-2" />}
          dropdownRender={(menu) => (
            <div>
              <div className="p-2">
                <Input
                  prefix={<SearchOutlined className="text-gray-400" />}
                  placeholder="Search tokens"
                  className="-mb-6"
                />
              </div>
              {menu}
            </div>
          )}
        >
          {tokens.map((token) => (
            <Select.Option key={token.symbol} value={token.symbol}>
              <div className="flex items-center space-x-3">
                {/* Token Image */}
                <div className="w-6 h-6 relative">
                  <Image
                    src={token.icon}
                    alt={`${token.symbol} symbol`}
                    fill
                    className="rounded-full"
                  />
                </div>
              
                <span>{token.symbol}</span>
              </div>
            </Select.Option>
          ))}
        </Select>
      </div>

      <div className="flex justify-between items-center text-sm text-gray-600">
        <span className="text-[#718096]">1 Prize</span>
        <span className="text-[#718096]">{prizeAmount || 0} {selectedToken} Total</span>
      </div>

      <hr className="h-px my-8 bg-[#94A3B8] border-x-2"></hr>


      <div>
        <label className="text-[#718096] text-sm mb-2 block">First Prize</label>
        <div className="flex items-center">
          <Input
            className={`flex-1 ${!isValid ? 'border-red-500' : ''}`}
            style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
            placeholder="5000"
            value={prizeAmount}
            onChange={(e) => setPrizeAmount(e.target.value)}
          />
          <div className="h-[32px] px-4 border border-l-0 rounded-r-lg flex items-center">
            <div className="w-6 h-6 relative mr-1">
              <Image
                src="/ton_symbol.png"
                alt="TON"
                height={26}
                width={25}
              />
            </div>
            <span className="text-[#718096]">{selectedToken}</span>
          </div>
        </div>
        {!isValid && (
          <div className="text-red-500 text-xs mt-1">
            Please enter a valid prize amount greater than 0.
          </div>
        )}
      </div>

      <hr className="h-px my-8 bg-[#94A3B8] border-x-2"></hr>

      <div className="flex gap-4">
        <Button block className="flex-1">
          <div className="flex items-center justify-center">
            <span className="text-xl mr-1 mb-2">+</span>
            <span className="text-[#334155]">Add Individual Prize</span>
          </div>
        </Button>
        <Button block className="flex-1 border border-gray-200 bg-[#F1F5F9]">
          <div className="flex items-center justify-center">
            <span className="text-xl mr-1 mb-1">+</span>
            <span className="text-[#64748B]">Add Bonus Prize</span>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default PrizeComponent;
