"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const reviews = [
  {
    name: "Amit Sharma",
    time: "6 months ago",
    text: "The therapist is very professional and kind. Helped my daughter improve her motor skills significantly. The environment is very positive.",
  },
  {
    name: "Priya S.",
    time: "3 months ago",
    text: "Amazing sessions! I can see real progress in my son's communication and focus. The team is really dedicated and caring.",
  },
  {
    name: "Neha Patel",
    time: "8 months ago",
    text: "Professional, experienced and kind. She takes time to understand every child’s needs. Thank you for all your help!",
  },
  {
    name: "Kunal M.",
    time: "1 year ago",
    text: "Dr. Pooja is one of the best therapists. Her way of explaining home programs is excellent and results are visible within weeks.",
  },
  {
    name: "Rachana Ahire",
    time: "1 year ago",
    text: "Best Occupational therapist in Borivali. You will surely find improvement after her sessions. She explains home programme very patiently.",
  },
];

export default function Reviews() {
  return (
    <section className="w-full bg-[#f9f9f9] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-900 mb-10">
          Patient Reviews
        </h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay]}
          className="overflow-visible"
        >
          {reviews.map((r, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white border border-gray-100 shadow-md rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between transition-all duration-500 hover:shadow-lg">
                <div>
                  <h3 className="text-pink-600 font-semibold text-lg mb-1">
                    {r.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-3">{r.time}</p>
                  <div className="flex items-center gap-1 mb-3 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {r.text}
                  </p>
                </div>
                <p className="text-sm text-gray-400 italic mt-4">
                  — Google Reviews
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
