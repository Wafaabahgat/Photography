import React, { useState } from "react";
import { SliderData } from "../components/SliderData";
import Image from "next/image";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id="gallery">
      <h1>Gallery</h1>
      <div>
        {SliderData.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "opacity-[1] ease-in duration-1000"
                  : "opacity-0"
              }
            >
              <div className="relative flex justify-center p-4">
                <FaArrowCircleLeft
                  size={50}
                  className="absolute top-[50%] left-[30px] cursor-pointer select-none z-[2]"
                />
                {index === current && (
                  <Image
                    src={slide.image}
                    alt="/"
                  
                    layout="responsive"
                    objectFit="cover"
                  />
                )}
                <FaArrowCircleRight
                  size={50}
                  className="absolute top-[50%] right-[30px] cursor-pointer select-none z-[2]"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;