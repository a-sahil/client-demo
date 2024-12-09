// components/About.tsx
import { FC } from "react";
import Image from "next/image";
import { Github, Globe, MousePointer2, Twitter } from "lucide-react";

interface Comment {
  username: string;
  text: string;
  timeAgo: string;
}

const About: FC = () => {
  const comments: Comment[] = [
    { username: "@Beast", text: "gm", timeAgo: "5 months ago" },
    { username: "@Beast", text: "gm", timeAgo: "5 months ago" },
    { username: "@Beast", text: "gm", timeAgo: "5 months ago" },
  ];

  return (
    <section id="about" className="mb-8">
      {/* Project Screenshots */}
      <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-lg overflow-hidden">
            <Image
              src="/cover.png"
              alt="SaaS Dashboard UI Kit"
              width={600}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-indigo-900 rounded-lg overflow-hidden">
            <Image
              src="/cover2.png"
              alt="Flowbase Welcome"
              width={600}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* About Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            About Anchor - Community Initiative
          </h2>
          <p className="text-gray-400 mb-4">
            Anchor is a framework for quickly building secure Solana programs.
          </p>
          <p className="text-gray-400 mb-4">
            With Anchor you can build programs quickly because it writes various
            boilerplate for you such as <br />
            (de)serialization of accounts and instruction data.
          </p>
          <p className="text-gray-400 mb-4">
            You can build secure programs more easily because Anchor handles
            certain security checks for<br /> you. On top of that, it allows you
            to succinctly define additional checks and keep them separate<br />
            from your business logic.
          </p>
          <p className="text-gray-400">
            Both of these aspects mean that instead of working on the tedious
            parts of raw Solana programs,<br /> you can spend more time working
            on what matters most: your product.
          </p>
        </div>

        <hr className="h-px my-8 border-0 bg-[#333333]"></hr>

        <div className="mb-8">
  <h3 className="text-lg font-semibold mb-4">Comments</h3>
  <div className="mb-4">
    <div className="flex items-center rounded-md p-2 space-x-4">
    <input
            type="text"
            placeholder="Share something..."
            className="flex-1 bg-[#1A1919] border border-[#333333] text-white px-6 py-3 rounded-md focus:outline-none pr-6"
          />
          <button className="flex  bg-white text-black px-4 py-3 rounded-md hover:bg-gray-200">
            Comment
            <MousePointer2 className="rotate-90 ml-2" />
          </button>
          
    </div>
  </div>
</div>



        <div className="space-y-4 mt-4">
          {comments.map((comment, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex flex-col items-center ">
                <span className="font-medium">{comment.username}</span>
                <span className="text-gray-400 mr-8">{comment.text}</span>
              </div>
              <span className="text-gray-400 text-sm">{comment.timeAgo}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="grid grid-cols-2 gap-8 mt-8">
          <div>
            <h4 className="font-semibold mb-4">Socials</h4>
            <div className="flex gap-4">
              <button className="p-2 bg-[#272727] rounded-md">
                <Globe className="w-4 h-4" />
              </button>
              <button className="p-2 bg-[#272727] rounded-md">
                <Github className="w-4 h-4" />
              </button>
              <button className="p-2 bg-[#272727] rounded-md">
                <Twitter className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <button className="flex items-center gap-2 text-gray-400 hover:text-white">
              <span>React out if you have any queries for this listing</span>
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-8">
          <h4 className="font-semibold mb-4">Tags</h4>
          <div className="flex gap-2">
            <span className="px-3 py-3 bg-[#272727] rounded-md text-sm">
              Developer Tools
            </span>
          </div>
        </div>

        <hr className="h-px w-96 my-8 border-0 bg-[#333333]" ></hr>

        <div className="mt-8 text-sm text-gray-400">
          <p>Last Modified: 4 months ago</p>
          <p>Created: Wed, 28 Jun 2024 08:11:19 GMT</p>
        </div>
    </section>
  );
};

export default About;
