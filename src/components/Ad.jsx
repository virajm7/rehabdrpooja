'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Ad({ autoplay = true, autoplayInterval = 5000 }) {
  const slides = ['/slid1.png', '/slid1.png', '/slid1.png', '/slid1.png'];
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!autoplay) return;
    timeoutRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, autoplayInterval);
    return () => clearInterval(timeoutRef.current);
  }, [autoplay, autoplayInterval, slides.length]);

  const prev = () => {
    clearInterval(timeoutRef.current);
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  };

  const next = () => {
    clearInterval(timeoutRef.current);
    setIndex((i) => (i + 1) % slides.length);
  };

  const goTo = (i) => {
    clearInterval(timeoutRef.current);
    setIndex(i);
  };

  const fullBleedStyle = {
    position: 'relative',
    left: '50%',
    right: '50%',
    marginLeft: '-50vw',
    marginRight: '-50vw',
    width: '100vw',
    marginTop: 0,
    zIndex: 0,
    backgroundColor: '#ffffff',
  };

  return (
    <section aria-label="Promotional carousel" className="relative bg-white">
      <div style={fullBleedStyle} className="bg-transparent">
        <div
          className="relative overflow-hidden"
          style={{
            height: '85vh',
          }}
        >
          {/* Responsive height for small screens */}
          <style jsx>{`
            @media (max-width: 768px) {
              div[style*='85vh'] {
                height: 45vh !important;
              }
            }
          `}</style>

          {/* Slide Track */}
          <div
            className="flex transition-transform duration-700 ease-in-out h-full"
            style={{
              width: `${slides.length * 100}%`,
              transform: `translateX(-${(index * 100) / slides.length}%)`,
            }}
          >
            {slides.map((src, i) => (
              <div
                key={i}
                className="relative flex-shrink-0"
                style={{ width: `${100 / slides.length}%`, height: '100%' }}
              >
                <Image src={src} alt={`Slide ${i + 1}`} fill className="object-cover" priority={i === 0} />
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-30 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/95 hover:bg-white flex items-center justify-center shadow"
            style={{ backdropFilter: 'blur(4px)' }}
          >
            <span className="text-green-700 text-xl md:text-2xl leading-none">‹</span>
          </button>

          {/* Right Arrow */}
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-30 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/95 hover:bg-white flex items-center justify-center shadow"
            style={{ backdropFilter: 'blur(4px)' }}
          >
            <span className="text-green-700 text-xl md:text-2xl leading-none">›</span>
          </button>

          {/* Dots */}
          <div
            className="absolute left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 md:gap-3"
            style={{ bottom: '1rem' }}
          >
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-colors duration-200 ${
                  i === index ? 'bg-green-600' : 'bg-green-100'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
