'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function CentrePage() {
  const slides = ['/cs1.png', '/cs2.png', '/cs3.png', '/msp1.png', '/msp2.png'];
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  };

  const next = () => {
    setIndex((i) => (i + 1) % slides.length);
  };

  // Full width same as Ad.jsx
  const fullBleedStyle = {
    position: 'relative',
    left: '50%',
    right: '50%',
    marginLeft: '-50vw',
    marginRight: '-50vw',
    width: '100vw',
    backgroundColor: '#f3e8ff',
  };

  return (
    <section
      style={fullBleedStyle}
      className="py-12 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Heading */}
      <div className="text-center mb-6">
        {/* <h3 className="text-gray-600 text-sm font-serif tracking-wide uppercase">
          About Centre
        </h3> */}
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#c23ca1] mt-1">
          Facilities and Activity
        </h1>
      </div>

      {/* Slider */}
      <div className="relative w-full max-w-[950px] mx-auto flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-0 md:left-4 z-20 bg-white/80 hover:bg-white rounded-full shadow p-2 text-2xl text-gray-700"
        >
          ‹
        </button>

        {/* Slides */}
        <div className="overflow-hidden w-full flex justify-center">
          <div
            className="flex transition-transform duration-[800ms] ease-in-out"
            style={{
              transform: `translateX(-${index * 100}%)`,
              width: `${slides.length * 100}%`,
            }}
          >
            {slides.map((src, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 w-full flex justify-center items-center"
              >
                <div className="relative w-full h-[400px] md:h-[450px] overflow-hidden shadow-lg">
                  <Image
                    src={src}
                    alt={`Slide ${i + 1}`}
                    fill
                    className="object-cover"
                    priority={i === 0}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-0 md:right-4 z-20 bg-white/80 hover:bg-white rounded-full shadow p-2 text-2xl text-gray-700"
        >
          ›
        </button>
      </div>

      {/* Description */}
      {/* <p className="text-gray-700 text-center font-serif max-w-md mt-6 text-sm md:text-base">
        A safe space providing evidence-based therapy that empowers individuals to live meaningfully
      </p> */}

      {/* Button */}
      {/* <button className="mt-5 px-6 py-2 bg-[#ff4fc3] hover:bg-[#e03fae] text-white font-serif font-medium rounded-md transition">
        More Info
      </button> */}
    </section>
  );
}
