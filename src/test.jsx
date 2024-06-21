import React from "react";
import Equalizer from "./components/Equalizer.jsx";
import BackgroundAudioPlayer from "./components/BackgroundAudio.jsx";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col items-center relative">
      <Equalizer />
      <ContainerScroll
        titleComponent={
          <>
            <div className="px-4 lg:px-12 text-center">
              <h1 className="text-4xl  md:text-6xl lg:text-6xl xl:text-7xl font-regular bg-gradient-custom bg-clip-text text-transparent leading-normal sm:leading-relaxed lg:leading-normal xl:leading-none">
                
                <span className="bg-gradient-to-r from-purple-500/20 to-purple-500/5 hover:bg-gradient-to-r text-white px-2 py-1 border-l-4 border-purple-700 rounded-none focus:outline-none ml-3">
                  Revolutionizing
                </span>
                Your Digital Life
                <span className="bg-gradient-to-r from-orange-500/20 to-purple-500/5 hover:bg-gradient-to-r text-white px-2 py-1 border-l-4 border-orange-700 rounded-none focus:outline-none ml-3">
                  With AI
                </span>
              </h1>
            </div>
            <div className="text-base sm:text-lg md:text-xl text-gray-300 text-center mt-4">
              Generate website copy quickly and easily using AI, all without leaving Figma
            </div>
            <div className="pt-8 text-lg font-light flex flex-col sm:flex-row gap-4 sm:gap-10 justify-center items-center mt-4">
              <button className="bg-white text-gray-800 font-normal py-2 px-6 sm:px-10 rounded-md hover:bg-gray-100 focus:outline-none">
                Get This
              </button>
              <BackgroundAudioPlayer/>
              <button className="border-[1px] bg-transparent text-white font-normal py-2 px-6 sm:px-10 rounded-md hover:bg-gray-100 focus:outline-none">
                Try Beta
              </button>
            </div>
          </>
        }
      >
        <img
          src="/p5.png"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

export const users = [
  {
    name: "Manu Arora",
    designation: "Founder, Algochurn",
    image: "https://picsum.photos/id/10/300/300",
    badge: "Mentor",
  },
  {
    name: "Sarah Singh",
    designation: "Founder, Sarah's Kitchen",
    image: "https://picsum.photos/id/11/300/300",
    badge: "Mentor",
  },
  {
    name: "John Doe",
    designation: "Software Engineer, Tech Corp",
    image: "https://picsum.photos/id/12/300/300",
    badge: "Mentor",
  },
  {
    name: "Jane Smith",
    designation: "Product Manager, Innovate Inc",
    image: "https://picsum.photos/id/13/300/300",
    badge: "Mentor",
  },
  {
    name: "Robert Johnson",
    designation: "Data Scientist, DataWorks",
    image: "https://picsum.photos/id/14/300/300",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "UX Designer, DesignHub",
    image: "https://picsum.photos/id/15/300/300",
    badge: "Mentor",
  },
  {
    name: "Michael Miller",
    designation: "CTO, FutureTech",
    image: "https://picsum.photos/id/16/300/300",
    badge: "Mentor",
  },
  {
    name: "Sarah Brown",
    designation: "CEO, StartUp",
    image: "https://picsum.photos/id/17/300/300",
  },
  {
    name: "James Wilson",
    designation: "DevOps Engineer, CloudNet",
    image: "https://picsum.photos/id/18/300/300",
    badge: "Something",
  },
  {
    name: "Patricia Moore",
    designation: "Marketing Manager, MarketGrowth",
    image: "https://picsum.photos/id/19/300/300",
    badge: "Mentor",
  },
  {
    name: "Richard Taylor",
    designation: "Frontend Developer, WebSolutions",
    image: "https://picsum.photos/id/20/300/300",
  },
  {
    name: "Linda Anderson",
    designation: "Backend Developer, ServerSecure",
    image: "https://picsum.photos/id/21/300/300",
  },
  {
    name: "William Thomas",
    designation: "Full Stack Developer, FullStack",
    image: "https://picsum.photos/id/22/300/300",
    badge: "Badger",
  },
  {
    name: "Elizabeth Jackson",
    designation: "Project Manager, ProManage",
    image: "https://picsum.photos/id/23/300/300",
    badge: "Mentor",
  },
  {
    name: "David White",
    designation: "Database Administrator, DataSafe",
    image: "https://picsum.photos/id/24/300/300",
    badge: "Advocate",
  },
  {
    name: "Jennifer Harris",
    designation: "Network Engineer, NetConnect",
    image: "https://picsum.photos/id/25/300/300",
  },
  {
    name: "Charles Clark",
    designation: "Security Analyst, SecureIT",
    image: "https://picsum.photos/id/26/300/300",
  },
  {
    name: "Susan Lewis",
    designation: "Systems Analyst, SysAnalyse",
    image: "https://picsum.photos/id/27/300/300",
  },
  {
    name: "Joseph Young",
    designation: "Mobile Developer, AppDev",
    image: "https://picsum.photos/id/28/300/300",
    badge: "Mentor",
  },
  {
    name: "Margaret Hall",
    designation: "Quality Assurance, BugFree",
    image: "https://picsum.photos/id/29/300/300",
    badge: "Developer",
  },
];
