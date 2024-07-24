import React, { useState } from "react";
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
import "./Home.css";
import { FaBlackTie, FaUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";


import CountUp from "react-countup";
import { FaRocket } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const box = [
    {
      icon: "FaBlackTie",
      heading: "Executive Headhunting",
      para: "Our headhunters excel at identifying and attracting top-level executives who can drive your company's growth and innovation.",
    },
    {
      icon: "IoSearch",
      heading: "Retained Executive Search",
      para: "Through our retained search services, we are committed to finding the perfect match for your executive positions, offering an exclusive and comprehensive approach.",
    },
    {
      icon: "FaBuilding",
      heading: "Industry Expertise",
      para: "We possess experience across diverse industries, enabling us to offer tailored solutions for organizations of all types and sizes.",
    },
  ];

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <section className="container relative overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }} // Add autoplay s90tings
      >
        <SwiperSlide key={1} className="">
          <div className="slide-content ">
            <img
              src="slide01.jpg"
              alt=""
              className="slide-image w-full object-contain"
            />
            <div className="slide-text paddings absolute flex flex-col gap-3 sm:left-0 sm:translate-x-12 sm:translate-y-24 sm:top-0">
              <h1 className="h1 font-semibold">
                Vertex <span className="text-primary">Executive</span>{" "}
                Recruiting
              </h1>
              <p className="h4 sm:mb-5 ">
                CONNECTING ELITE TALENT WITH GLOBAL ENTERPRISES
              </p>
              <div className="flex flex-column gap-4 ">
                <Button text="Get Started" textColor="white" />
                <CurtainButtonGray text={"About me"} />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide key={1} className="">
          <div className="slide-content ">
            <img
              src="slide01.jpg"
              alt=""
              className="slide-image w-full object-contain"
            />
            <div className="slide-text paddings absolute flex flex-col gap-3 sm:left-0 sm:translate-x-12 sm:translate-y-24 sm:top-0">
              <h1 className="h1 font-semibold">
                Elevate Your <span className="text-primary">Team</span>{" "}
                Recruiting
              </h1>
              <p className="h4 sm:mb-5 ">FIND YOUR NEXT LEADER</p>
              <div className="flex flex-column gap-4 ">
                <Button text="Get Started" textColor="white" />
                <CurtainButtonGray text={"About Us"} />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide key={1} className="">
          <div className="slide-content ">
            <img
              src="slide01.jpg"
              alt=""
              className="slide-image w-full object-contain"
            />
            <div className="slide-text paddings absolute flex flex-col gap-3 sm:left-0 sm:translate-x-12 sm:translate-y-24 sm:top-0">
              <h1 className="h1 font-semibold">
                <span className="text-primary">Stuck</span> in a ‘career rut’?
              </h1>
              <p className="h4 sm:mb-5 ">UNLOCK NEW CAREER HORIZONS</p>
              <div className="flex flex-column gap-4 ">
                <Button text="Get Started" textColor="white" />
                <CurtainButtonGray text={"About me"} />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div className="custom-swiper-button-prev duration-200 ease-in swiper-button-prev bg-blue-700 text-white scale-50 p-12 rounded-full hover:bg-secondary hidden sm:flex"></div>
        <div className="custom-swiper-button-next swiper-button-next duration-200 ease-in swiper-button-prev bg-blue-700 text-white scale-50 p-12 rounded-full hover:bg-secondary hidden sm:flex"></div>
      </Swiper>
      <div className="boxes paddings sm:relative flex sm:flex-row flex-col gap-2 justify-center mt-4">
        {box.map((det, index) => (
          <div
            className="box hover:shadow-2xl bg-tertiary hover:-translate-y-6 ease-in duration-200 rounded-lg p-3 sm:p-6 sm:-top-36 sm:relative z-[2] flex flex-col gap-4 sm:w-1/3"
            key={index}
          >
            <h4 className="h3 text-white font-semibold">{det.heading}</h4>
            <p className="p text-white">{det.para}</p>
            <button className="text-start text-white font-semibold hover:text-secondary">
              learn more 
            </button>
          </div>
        ))}
      </div>
      <div className="paddings sm:flex mt-5">
        <div className="flex flex-col gap-10 items-center justify-center">
          <h2 className="h2 text-primary hidden sm:block font-bold">WELCOME</h2>
          <p className="p opacity-80 text-center">
            Vertex Executive Recruiting excels in connecting outstanding talent
            with premier organizations through our dedicated headhunting and
            retained executive search services. With a proven history of
            excellence, we have established ourselves as a trusted partner for
            companies seeking visionary leaders and executives who drive
            success.
          </p>
        </div>
        <div>
          <img src="hr.jpg" alt="" />
        </div>
      </div>

      <div className="sm:flex-row flex flex-col gap-6 sm:gap-0 items-start paddings justify-between mb-10 mt-5">
        <div className="flex gap-3" ref={ref}>
          <div className="bg-primary p-4 rounded-full flex items-center justify-center">
            <FaRocket className="text-3xl" />
          </div>
          <div>
            {inView && (
              <span>
                <CountUp
                  start={600}
                  end={638}
                  duration={5}
                  className="countup md:text-4xl"
                />
                <span className="text-primary text-3xl"> +</span>
              </span>
            )}
            <p className="p font-medium">Companies we helped</p>
          </div>
        </div>
        <div className="flex gap-3" ref={ref}>
          <div className="bg-primary p-4 rounded-full flex items-center justify-center">
            <BsBriefcaseFill className="text-3xl" />
          </div>
          <div>
            {inView && (
              <span>
                <CountUp
                  start={1}
                  end={12}
                  duration={5}
                  className="countup md:text-4xl"
                />
                <span className="text-primary text-3xl"> +</span>
              </span>
            )}
            <p className="p font-medium">Corporate Programs</p>
          </div>
        </div>
        <div className="flex gap-3" ref={ref}>
          <div className="bg-primary p-4 rounded-full flex items-center justify-center">
            <FaGraduationCap
            className="text-3xl" />
          </div>
          <div>
            {inView && (
              <span>
                <CountUp
                  start={5}
                  end={28}
                  duration={5}
                  className="countup md:text-4xl"
                />
                <span className="text-primary text-3xl"> +</span>
              </span>
            )}
            <p className="p font-medium">Training Courses</p>
          </div>
        </div>
        <div className="flex gap-3" ref={ref}>
          <div className="bg-primary p-4 rounded-full flex items-center justify-center">
            <FaUser className="text-3xl" />
          </div>
          <div>
            {inView && (
              <span>
                <CountUp
                  start={50}
                  end={125}
                  duration={5}
                  className="countup md:text-4xl"
                />
                <span className="text-primary text-3xl"> +</span>
              </span>
            )}
            <p className="p font-medium">Strategic Partners</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
