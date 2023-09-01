import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

const InstagramImg = ({ socialImag }) => {
  return (
    <div className="relative">
      <Image
        src={socialImag}
        alt="/"
        className="w-full h-full"
        layout="responsive"
      />
      {/* overLay */}
      <div className=" w-full h-full items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group">
        <p>
          <FaInstagram size={30} className="z-10" />
        </p>
      </div>
    </div>
  );
};

export default InstagramImg;
