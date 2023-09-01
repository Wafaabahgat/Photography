import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

const InstagramImg = ({ socialImag }) => {
  return (
    <div>
      <Image
        src={socialImag}
        alt="/"
        className="w-full h-full"
        layout="responsive"
      />
      {/* over */}
    </div>
  );
};

export default InstagramImg;
