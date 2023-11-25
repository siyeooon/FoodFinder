import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Featured = () => {
  const sliders = [
    { img: "./images/banner1.png" },
    { img: "./images/banner2.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlider = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlider = () => {
    const isLastSlide = currentIndex === sliders.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const moveToNextslide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="w-full">
      <div className="aspect-[720/280] w-full py-4 px-4 relative group6">
        <div
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
          style={{ backgroundImage: `url(${sliders[currentIndex].img})` }}
        ></div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 trnaslate-y-[-50%] left-0 text-2xl rounded-full p-2 bg-gray-300 text-gray-600 cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlider} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 trnaslate-y-[-50%] right-0 text-2xl rounded-full p-2 bg-gray-300 text-gray-600 cursor-pointer">
          <BsChevronCompactRight onClick={nextSlider} />
        </div>
      </div>
      <div className="flex top-4 justify-center py-2">
        {sliders.map((sliderItems, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => moveToNextslide(slideIndex)}
            className="text -2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
