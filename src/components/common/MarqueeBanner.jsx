import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const MarqueeBanner = ({ bgColor, textColor, text, direction = "normal" }) => {
  // Repeating the text array to ensure the screen is filled for the loop
  const slides = Array(12).fill(text);

  return (
    <div
      className="w-full py-3 md:py-5 border-y-2 border-black flex items-center overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      <style>{`
        .marquee-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView="auto"
        loop={true}
        speed={4000} // Adjust speed here
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: direction === "reverse",
        }}
        allowTouchMove={false}
        className="marquee-swiper"
      >
        {slides.map((item, idx) => (
          <SwiperSlide key={idx} className="!w-auto">
            <span
              className="text-2xl md:text-4xl font-black uppercase whitespace-nowrap px-4 tracking-wider flex items-center"
              style={{ color: textColor }}
            >
              {item}
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MarqueeBanner;
