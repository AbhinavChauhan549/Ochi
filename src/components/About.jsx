import React from "react";

function About() {
  return (
    <div className="w-full py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw] p-20 tracking-tight">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] border-[#a1b562] mt-20 pt-10 p-20">
        <div className="w-1/2">
          <h1 className="text-7xl">Our Approach</h1>
          <button className="flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900 rounded-full text-white mt-10">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh]  bg-[#71832d] rounded-3xl">
          <img
            src="../../public/pexels-tima-miroshnichenko-6612378.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
