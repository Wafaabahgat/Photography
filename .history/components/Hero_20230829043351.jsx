import React from "react";

const Hero = () => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]"/>
      <div className="p-5 ml-[-10rem] mt-[-10rem] text-white z-[2]">
        <h2 className="text-5xl font-bold">Heading</h2>
        <p className="text-xl py-5">Message</p>
        <button className="p-2 py-8 border">Book</button>
      </div>
    </div>
  );
};

export default Hero;
