import React from "react";
import Image from "next/image";

const InstagramImg = ({ socialImag }) => {
  return (
    <div>
      <Image
        src={socialImag}
        alt="/"
        className="w-full h-full"
        layout="responsive"
      />
    </div>
  );
};

export default InstagramImg;
