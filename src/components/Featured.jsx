import { motion } from "framer-motion";
import React from "react";

function Featured() {
  const handleHover = ()=>{
    
  }
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] pb-20 border-zinc-700">
        <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div onMouseEnter={()=>handleHover()} className="cardcontainer relative  w-1/2 h-[75vh] n">
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <h1 className="absolute flex text-[#CDEA68] overflow-hidden -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl font-semibold leading-none tracking-tighter left-full">
                {"FYDE".split("").map((item, index) => (
                  <motion.span initial={{ y: "100%" }} className="inline-block">
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </div>
          <div className="cardcontainer relative w-1/2 h-[75vh] n">
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <h1 className="absolute text-[#CDEA68] translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl font-semibold leading-none tracking-tighter right-full">
                {"VISE".split("").map((item, index) => (
                  <span>{item}</span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
