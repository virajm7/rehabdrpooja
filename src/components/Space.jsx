'use client';

import { useEffect, useRef } from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export default function Space() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const handleScroll = () => {
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.min(Math.max((windowHeight - rect.top) / windowHeight, 0), 1);
      const scale = 1 + (1 - progress) * 0.03;
      const translateY = (1 - progress) * 30;
      section.style.transform = `translateY(${translateY}px) scale(${scale})`;
      section.style.transition = 'transform 0.3s ease-out';
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fullBleedStyle = {
    position: 'relative',
    left: '50%',
    right: '50%',
    marginLeft: '-50vw',
    marginRight: '-50vw',
    width: '100vw',
    zIndex: 5,
    backgroundColor: '#b2f0dc', // lighter pastel green
    overflow: 'hidden',
    fontFamily: poppins.style.fontFamily,
    padding: '5rem 1rem',
  };

  const images = ['/s1.png', '/s2.png', '/s3.png', '/s1.png', '/s2.png', '/s3.png'];

  return (
    <section ref={sectionRef} style={fullBleedStyle}>
      <div className="relative flex flex-col items-center justify-center overflow-hidden">
        {/* Text Section */}
        <div
          className="transition-transform duration-700 ease-out text-center mb-10"
          style={{
            opacity: 0,
            transform: 'translateY(50px)',
            animation: 'textFadeIn 1.2s ease-out forwards',
          }}
        >
          <h2 className="text-5xl font-bold mb-4 text-gray-800 tracking-tight">
            Our Space
          </h2>
          <p className="max-w-2xl text-center text-lg text-gray-700 mb-10 leading-relaxed">
            Experience our modern therapy spaces designed to heal, relax, and rejuvenate.
          </p>
        </div>

        {/* First Slider (Left → Right) */}
        <div className="w-full max-w-6xl overflow-hidden relative mb-10">
          <div className="flex animate-scroll-ltr gap-6" style={{ width: 'max-content' }}>
            {images.map((src, i) => (
              <div
                key={i}
                className="overflow-hidden min-w-[300px] transform transition-all duration-700 ease-out image-anim"
              >
                <img
                  src={src}
                  alt={`Clinic ${i + 1}`}
                  className="w-[300px] h-64 object-cover transition-transform duration-700 ease-out hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second Slider (Right → Left) */}
        <div className="w-full max-w-6xl overflow-hidden relative">
          <div className="flex animate-scroll-rtl gap-6" style={{ width: 'max-content' }}>
            {images.map((src, i) => (
              <div
                key={i}
                className="overflow-hidden min-w-[300px] transform transition-all duration-700 ease-out image-anim"
              >
                <img
                  src={src}
                  alt={`Clinic ${i + 1}`}
                  className="w-[300px] h-64 object-cover transition-transform duration-700 ease-out hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes scroll-ltr {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        @keyframes scroll-rtl {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-ltr {
          animation: scroll-ltr 40s linear infinite;
        }
        .animate-scroll-rtl {
          animation: scroll-rtl 40s linear infinite;
        }

        @keyframes imageFadeScale {
          0% {
            opacity: 0.9;
            transform: scale(0.98);
          }
          50% {
            opacity: 1;
            transform: scale(1.03);
          }
          100% {
            opacity: 0.95;
            transform: scale(1);
          }
        }
        .image-anim img {
          animation: imageFadeScale 8s ease-in-out infinite alternate;
        }

        @keyframes textFadeIn {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
