import React, { useState, useEffect } from 'react';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'; 

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoSlideActive, setAutoSlideActive] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
    setAutoSlideActive(false); // Stop automatic sliding when manually navigating
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
    setAutoSlideActive(false); // Stop automatic sliding when manually navigating
  };

  // Automatically transition to next slide every 3 seconds when autoSlideActive is true
  useEffect(() => {
    let interval;
    if (autoSlideActive) {
      interval = setInterval(() => {
        setCurrentSlide((prevSlide) =>
          prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        );
      }, 3000); // Change interval duration as needed
    }

    return () => clearInterval(interval);
  }, [autoSlideActive, slides.length]);

  return (
    <div className="relative">
      <FaChevronCircleLeft
        className="absolute top-1/2 left-2 text-6xl transform -translate-y-1/2 text-white rounded-md z-10 cursor-pointer"
        onClick={prevSlide}
      />
      <FaChevronCircleRight
        className="absolute top-1/2 right-2 text-6xl transform -translate-y-1/2 text-white text-blue rounded-md z-10 cursor-pointer"
        onClick={nextSlide}
      />
      <div className="overflow-hidden relative h-full">
        <div className="flex transition ease-in-out h-2/4 duration-1000" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="w-full h-screen flex-shrink-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide})` }}>
              {/* You can add any additional content or styling here */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
