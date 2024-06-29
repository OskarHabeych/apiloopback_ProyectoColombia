import React, { useState } from 'react';
import Navbar from '../navbar/index.tsx';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg",
    "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg",
    "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg",
    "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (     
    <div className="md:container md:mx-auto">
      <div className="carousel w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item relative w-full ${currentSlide === index ? 'block' : 'hidden'}`}
          >
            <img src={slide} className="w-full" alt={`Slide ${index + 1}`} />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <button className="btn btn-circle" onClick={prevSlide}>❮</button>
              <button className="btn btn-circle" onClick={nextSlide}>❯</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
