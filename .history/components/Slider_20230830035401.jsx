import React, { useState } from "react";
import { SliderData } from "../components/SliderData";
import Image from "next/image";

const Slider = (slides) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlider = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlider = () => {
    setCurrent(current === 0 ? length - 1 : current + 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id="gallery">
      <h1>Gallery</h1>
      <div>
        {SliderData.map((slide, index) => {
          <div key={index}>
            <im
              src={slide.image}
              alt="/"
              width="1440"
              height="600"
              objectFit="cover"
            />
          </div>;
        })}
      </div>
    </div>
  );
};

export default Slider;
