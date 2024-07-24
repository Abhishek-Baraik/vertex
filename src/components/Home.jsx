import React, { useState } from "react";
import Slides from "./Slides";
import CurtainButtonGray from "./CurtainButtonGray";
import "./Home.css";
import { FaBlackTie, FaUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import { FaGlobeAsia } from "react-icons/fa";
import { FaFile } from "react-icons/fa";


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
      <Slides />
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
            <span className="text-lg text-primary font-semibold italic">
              Vertex Executive Recruiting
            </span>{" "}
            excels in connecting outstanding talent with premier organizations
            through our dedicated headhunting and retained executive search
            services. With a proven history of excellence, we have established
            ourselves as a trusted partner for companies seeking visionary
            leaders and executives who drive success.
          </p>
        </div>
        <div>
          <img src="hr.jpg" alt="" />
        </div>
      </div>

      <div className="sm:flex-row flex flex-col gap-6 sm:gap-0 items-center paddings sm:justify-between mb-10 mt-5">
        <div className="flex gap-3" ref={ref}>
          <div className="bg-primary p-4 rounded-full flex items-center justify-center">
            <FaRocket className="text-3xl text-white" />
          </div>
          <div className="flex flex-col justify-center">
            {inView && (
              <span>
                <CountUp
                  start={600}
                  end={638}
                  duration={5}
                  className="countup md:text-4xl"
                />
                <span className="text-primary sm:text-3xl"> +</span>
              </span>
            )}
            <p className="p font-medium">Companies we helped</p>
          </div>
        </div>
        <div className="flex gap-3 mr-4" ref={ref}>
          <div className="bg-primary p-4 rounded-full flex items-center justify-center">
            <BsBriefcaseFill className="text-3xl text-white" />
          </div>
          <div className="flex flex-col justify-center">
            {inView && (
              <span>
                <CountUp
                  start={1}
                  end={12}
                  duration={5}
                  className="countup md:text-4xl"
                />
                <span className="text-primary sm:text-3xl"> +</span>
              </span>
            )}
            <p className="p font-medium">Corporate Programs</p>
          </div>
        </div>
        <div className="flex gap-3 mr-10" ref={ref}>
          <div className="bg-primary p-4 rounded-full flex items-center justify-center">
            <FaGraduationCap className="text-3xl text-white" />
          </div>
          <div className="flex flex-col justify-center">
            {inView && (
              <span>
                <CountUp
                  start={5}
                  end={28}
                  duration={5}
                  className="countup md:text-4xl"
                />
                <span className="text-primary sm:text-3xl"> +</span>
              </span>
            )}
            <p className="p font-medium">Training Courses</p>
          </div>
        </div>
        <div className="flex gap-3 mr-9" ref={ref}>
          <div className="bg-primary p-4 rounded-full flex items-center justify-center">
            <FaUser className="text-3xl text-white" />
          </div>
          <div className="flex flex-col justify-center">
            {inView && (
              <span>
                <CountUp
                  start={50}
                  end={125}
                  duration={5}
                  className="countup md:text-4xl"
                />
                <span className="text-primary sm:text-3xl"> +</span>
              </span>
            )}
            <p className="p font-medium">Strategic Partners</p>
          </div>
        </div>
      </div>

      <div className="sm:mt-20 mb-10 paddings">
        <h1 className="h2 text-secondary font-semibold text-center">
          WHY CHOOSE US FOR EXECUTIVE SEARCH
        </h1>
        <div className="border-b-2 border-primary w-1/2 m-auto"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:mt-20 mt-10 sm:w-[60%] m-auto">

          <div className="executive relative hover:shadow-2xl bg-tertiary border-[1px] border-primary hover:bg-white hover:text-secondary ease-in duration-200 rounded-lg py-8 px-4 flex flex-col gap-4">
            <div className="p-4 sm:p-6 bg-primary text-white absolute rounded-full -top-6 left-[40%] sm:left-[42%]">
              <FaBook />
            </div>
            <h4 className="h3 headerr mt-5 font-semibold text-center">
              Unparalleled Expertise
            </h4>
            <p className="p headerr text-white opacity-70 text-center">
              Our team of experienced headhunters has a profound understanding
              of various industries, enabling us to identify and attract the
              most suitable candidates for your executive positions.
            </p>
          </div>

          <div className="executive relative hover:shadow-2xl bg-tertiary border-[1px] border-primary hover:bg-white hover:text-secondary ease-in duration-200 rounded-lg py-8 px-4 flex flex-col gap-4">
          <div className="p-4 sm:p-6 bg-primary text-white absolute rounded-full -top-6 left-[40%] sm:left-[42%]">
          <FaCogs />
          </div>
            <h4 className="h3 headerr mt-5 font-semibold text-center">Customized Approach</h4>
            <p className="p headerr text-white opacity-70 text-center">
              We understand that every organization is unique. Our approach is
              customized to your specific needs, ensuring we match candidates
              not only based on their skills but also on cultural fit and
              long-term potential.
            </p>
          </div>

          <div className="executive relative hover:shadow-2xl bg-tertiary border-[1px] border-primary hover:bg-white hover:text-secondary ease-in duration-200 rounded-lg py-8 px-4 flex flex-col gap-4">
          <div className="p-4 sm:p-6 bg-primary text-white absolute rounded-full -top-6 left-[40%] sm:left-[42%]">
          <FaGlobeAsia />
            </div>
            <h4 className="h3 headerr mt-5 font-semibold text-center">Global Network</h4>
            <p className="p headerr text-white opacity-70 text-center">
              With an extensive network, we have access to talent pools
              worldwide. Our reach transcends borders, allowing us to source top
              executives for your global initiatives.
            </p>
            
          </div>

          <div className="executive relative hover:shadow-2xl bg-tertiary border-[1px] border-primary hover:bg-white hover:text-secondary ease-in duration-200 rounded-lg py-8 px-4 flex flex-col gap-4">
          <div className="p-4 sm:p-6 bg-primary text-white absolute rounded-full -top-6 left-[40%] sm:left-[42%]">
              <FaFile />
            </div>
            <h4 className="h3 headerr mt-5 font-semibold text-center">Confidentiality</h4>
            <p className="p headerr text-white opacity-70 text-center">
              We recognize the sensitivity of executive search. Rest assured
              that your company's identity and search details are managed with
              the highest level of discretion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
