import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import Button from "./Button";
import CurtainButtonGray from "./CurtainButtonGray";
const Slides = () => {
  return (
    <Swiper
    className="relative"
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      navigation={{
        nextEl: ".custom-swiper-button-next",
        prevEl: ".custom-swiper-button-prev",
      }}
      // pagination={{ clickable: true }}
      // scrollbar={{draggable:true}}
      // autoplay={{ delay: 5000, disableOnInteraction: false }} // Add autoplay s90tings
    >
      <SwiperSlide key={1} className="">
        <div className="slide-content ">
          <img
            src="slide01.jpg"
            alt=""
            className="slide-image w-full"
          />
          <div className="slide-text text-center paddings absolute flex flex-col gap-2">
            <h1 className="h1 font-semibold">
              Vertex <span className="text-primary">Executive</span> Recruiting
            </h1>
            <p className="h4">
              CONNECTING ELITE TALENT WITH GLOBAL ENTERPRISES
            </p>
            <div className="flex flex-column justify-center mb-2 gap-4 text-center">
              <Button text="Get Started" textColor="white" />
              <CurtainButtonGray text={"About Us"} />
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide key={2} className="">
        <div className="slide-content ">
          <img
            src="slide01.jpg"
            alt=""
            className="slide-image w-full object-contain"
          />
          <div className="slide-text text-center paddings absolute flex flex-col gap-3">
            <h1 className="h1 font-semibold">
              Elevate Your <span className="text-primary">Team</span> Recruiting
            </h1>
            <p className="h4 sm:mb-5 ">FIND YOUR NEXT LEADER</p>
            <div className="flex flex-column justify-center gap-4 text-center">
              <Button text="Get Started" textColor="white" />
              <CurtainButtonGray text={"Learn More"} />
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide key={3} className="">
        <div className="slide-content ">
          <img
            src="slide01.jpg"
            alt=""
            className="slide-image w-full object-contain"
          />
          <div className="slide-text text-center paddings absolute flex flex-col gap-3">
            <h1 className="h1 font-semibold">
              <span className="text-primary">Stuck</span> in a ‘career rut’?
            </h1>
            <p className="h4 sm:mb-5 ">UNLOCK NEW CAREER HORIZONS</p>
            <div className="flex flex-column justify-center gap-4 text-center ">
              <Button text="Get Started" textColor="white" />
              <CurtainButtonGray text={"Contact"} />
            </div>
          </div>
        </div>
      </SwiperSlide>

      <div className="custom-swiper-button-prev duration-200 ease-in swiper-button-prev bg-blue-700 text-white scale-[0.3] sm:scale-[0.5] p-10 sm:p-12 rounded-full hover:bg-secondary absolute -left-6 top-20 sm:left-0 sm:top-[50%]"></div>
      <div className="custom-swiper-button-next swiper-button-next duration-200 ease-in swiper-button-prev bg-blue-700 text-white scale-[0.3] sm:scale-[0.5] p-10 sm:p-12 rounded-full hover:bg-secondary absolute -right-6 top-20 sm:right-0 sm:top-[50%]"></div>
    </Swiper>
  );
};

export default Slides;
