import React from "react";
import Image from 'next/image';

const InstagramImg = ({ socialImag }) => {
  return (
    <div>
      <Image src={socialImag} alt="/" />
    </div>
  );
};

export default InstagramImg;
