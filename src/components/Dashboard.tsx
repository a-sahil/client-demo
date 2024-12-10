import { FC, useState } from "react";
import Image from "next/image";
import About from "../components/About";
import Submissions from "../components/Submissions";

const Dashboard: FC = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="min-h-screen bg-[#1A1919] text-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
  <div className="items-center gap-4">
    <div className="w-12 h-12 bg-gray-700 rounded-full overflow-hidden mb-4">
      <Image
        src="/Frame 1.png"
        alt="IKnowspots logo"
        width={48}
        height={48}
        className="w-full h-full object-cover"
      />
    </div>
    <div>
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-semibold">Iknowspots</h1>
        <Image src="/Vector 1.png" alt="" height={13} width={13} />
      </div>
      <p className="text-gray-400 text-sm">
        A professional Web3 event handling website with strong fundamentals
      </p>
    </div>
  </div>

 
  {activeTab === "about" ? (
    <button className="bg-gradient-to-r from-[#1FBF4A] to-[#22CC77] px-4 py-2 rounded-md mt-12">
      Submit Now
    </button>
  ) : activeTab === "submissions" ? (
    <button className="bg-gray-500 px-4 py-2 rounded-md mt-12 cursor-not-allowed">
      Bounty Has Ended
    </button>
  ) : null}
</div>


   
        <div className="border-b border-gray-700 bg-[#2E2D2D] mb-8 rounded-md">
          <nav className="flex">
            <button
              onClick={() => setActiveTab("about")}
              className={`px-4 py-2 transition-all duration-300 ${
                activeTab === "about"
                  ? "text-white border-b-2 border-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              About
            </button>
            <button
              onClick={() => setActiveTab("submissions")}
              className={`px-4 py-2 transition-all duration-300 ${
                activeTab === "submissions"
                  ? "text-white border-b-2 border-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Submissions
            </button>
          </nav>
        </div>

     
        <div className="mt-8 overflow-hidden">
       
          <div
            className="flex transition-transform duration-500"
            style={{
              transform:
                activeTab === "about"
                  ? "translateX(0%)"
                  : activeTab === "submissions"
                  ? "translateX(-100%)"
                  : "translateX(0%)",
            
            }}
          >
         
            <div className="w-full flex-shrink-0">
              {activeTab === "about" && <About />}
            </div>

        
            <div className="w-full flex-shrink-0">
              {activeTab === "submissions" && <Submissions />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
