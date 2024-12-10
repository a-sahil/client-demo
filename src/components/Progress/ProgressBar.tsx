import React from "react";

interface ProgressBarProps {
  activeStep: number; 
}

const ProgressBar: React.FC<ProgressBarProps> = ({ activeStep }) => {
  const steps: string[] = ["Basics", "Description", "Rewards", "Success"];

  return (
    <div className="relative w-full max-w-lg mx-auto">
    
      <div className="absolute top-3 left-2 w-60 h-0.5 bg-gray-200 z-0"></div>

      <div className="flex justify-between items-center relative z-10">
        {steps.map((step, index) => (
          <div key={step} className="flex flex-col items-center">
         
            <div
              className={`w-6 h-6 flex justify-center items-center rounded-full border-2 ${
                index <= activeStep
                  ? "border-[#0043CE]"
                  : "border-gray-300"
              }`}
            >
        
              {index === activeStep && (
                <div className="w-2 h-2 rounded-full bg-[#0043CE]"></div>
              )}
              
              {index < activeStep && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white bg-[#0043CE] rounded-full"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>

      
            <div
              className={`text-xs mt-2 ${
                index <= activeStep ? "text-[#0043CE]" : "text-[#6F6F6F]"
              }`}
            >
              {step}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
