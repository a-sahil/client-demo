import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const Home: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <ProgressBar activeStep={activeStep} />
      <div className="flex mt-6 space-x-4">
        <button
          onClick={() => setActiveStep((prev) => Math.max(prev - 1, 0))}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Previous
        </button>
        <button
          onClick={() => setActiveStep((prev) => Math.min(prev + 1, 3))}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
