import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const MarqueeBanner = ({ bgColor, textColor, text, direction = "normal" }) => {
  // Repeating the text array to ensure the screen is filled for the loop
  const slides = Array(12).fill(text);

  return (
  import React, { useEffect, useState } from "react";
    >
      <style>{`
    const [SwiperComp, setSwiperComp] = useState(null);

    useEffect(() => {
      let mounted = true;
      // dynamically import swiper only when this component mounts
      Promise.all([import('swiper/react'), import('swiper/modules'), import('swiper/css')])
        .then(([reactModule, modules]) => {
          if (!mounted) return;
          const Swiper = reactModule.Swiper;
          const SwiperSlide = reactModule.SwiperSlide;
          const Autoplay = modules.Autoplay || modules.autoplay || modules.default?.Autoplay;
          setSwiperComp({ Swiper, SwiperSlide, Autoplay });
        })
        .catch(() => {});
      return () => { mounted = false; };
    }, []);

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
