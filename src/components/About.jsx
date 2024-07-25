import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FaBlackTie, FaUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";
// import { FaGraduationCap } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import { FaGlobeAsia } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { BsDatabase } from "react-icons/bs";


import { useInView } from "react-intersection-observer";

import CountUp from "react-countup";

const About = () => {

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <section>
      <div className="paddings sm:flex mt-5 justify-evenly">
        <div className="lg:w-1/2">
          <p className="h5 opacity-80 text-center">
            <span className="sm:text-[48px] text-[24px]  font-semibold italic">
              Vertex <span className="text-primary"> Executive</span> Recruiting,
            </span>{" "}
            we are driven by a passion for excellence in executive search and recruitment. Committed to integrity, innovation, and building lasting partnerships, we have established ourselves as a trusted ally for both organizations seeking top-tier talent and accomplished executives exploring new opportunities. Based in the U.S., our global reach connects exceptional candidates with leading organizations across various industries.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img src="hr.jpg" alt="" />
        </div>
      </div>


      <div className="sm:flex-row flex flex-col gap-6 sm:gap-0 items-center paddings sm:justify-between mb-10 mt-28">
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



      <div className="sm:mt-20 paddings bg-quadery">
        <div className="grid grid-cols-1 pb-10 sm:grid-cols-3 gap-10 sm:mt-20 mt-10 mx-auto">
          <div className="executive relative hover:shadow-2xl bg-tertiary border-[1px] border-primary hover:bg-white hover:text-secondary ease-in duration-200 rounded-lg py-8 px-4 flex flex-col gap-4">
            <div className="p-4 sm:p-6 bg-primary text-white absolute rounded-full -top-6 left-[40%] sm:left-[42%]">
              <FaBook />
            </div>
            <h4 className="h3 headerr mt-5 font-semibold text-center">
              Our Mission
            </h4>
            <p className="p headerr text-white opacity-70 text-center">
              At Stark Executive Search Inc., we redefine executive search and
              recruitment. Our mission: forging connections driving growth,
              empowering candidates, leveraging 12 years' expertise. Dedication
              to excellence and innovation shapes careers and leadership in
              diverse industries.
            </p>
          </div>

          <div className="executive relative hover:shadow-2xl bg-tertiary border-[1px] border-primary hover:bg-white hover:text-secondary ease-in duration-200 rounded-lg py-8 px-4 flex flex-col gap-4">
            <div className="p-4 sm:p-6 bg-primary text-white absolute rounded-full -top-6 left-[40%] sm:left-[42%]">
              <FaCogs />
            </div>
            <h4 className="h3 headerr mt-5 font-semibold text-center">
              Decades of Experience
            </h4>
            <p className="p headerr text-white opacity-70 text-center">
              At Vertex Executive Recruiting, we redefine executive search and
              recruitment. Our mission is to forge connections that drive
              growth, empower candidates, and leverage our 12 years of
              expertise. Our dedication to excellence and innovation shapes
              careers and leadership across diverse industries.
            </p>
          </div>

          <div className="executive relative hover:shadow-2xl bg-tertiary border-[1px] border-primary hover:bg-white hover:text-secondary ease-in duration-200 rounded-lg py-8 px-4 flex flex-col gap-4">
            <div className="p-4 sm:p-6 bg-primary text-white absolute rounded-full -top-6 left-[40%] sm:left-[42%]">
              <FaGlobeAsia />
            </div>
            <h4 className="h3 headerr mt-5 font-semibold text-center">
              Our Vision
            </h4>
            <p className="p headerr text-white opacity-70 text-center">
              With 12 years of expertise in executive search and talent
              advisory, Vertex Executive Recruiting drives growth through
              strategic placements and partnerships. Our unwavering commitment
              to innovation and personalized service paves the way for
              transformative journeys in an ever-evolving landscape.
            </p>
          </div>

          <div className="executive relative hover:shadow-2xl bg-tertiary border-[1px] border-primary hover:bg-white hover:text-secondary ease-in duration-200 rounded-lg py-8 px-4 flex flex-col gap-4">
            <div className="p-4 sm:p-6 bg-primary text-white absolute rounded-full -top-6 left-[40%] sm:left-[42%]">
              <FaGlobeAsia />
            </div>
            <h4 className="h3 headerr mt-5 font-semibold text-center">
              Global Reach
            </h4>
            <p className="p headerr text-white opacity-70 text-center">
              Based in the U.S., Vertex Executive Recruiting connects top talent
              with premier opportunities around the world. Regardless of
              geography or aspirations, we serve as your gateway to success,
              shaping careers and fostering global connections.
            </p>
          </div>

          <div className="executive relative hover:shadow-2xl bg-tertiary border-[1px] border-primary hover:bg-white hover:text-secondary ease-in duration-200 rounded-lg py-8 px-4 flex flex-col gap-4">
            <div className="p-4 sm:p-6 bg-primary text-white absolute rounded-full -top-6 left-[40%] sm:left-[42%]">
            <BsDatabase />
            </div>
            <h4 className="h3 headerr mt-5 font-semibold text-center">
              Experience Excellence
            </h4>
            <p className="p headerr text-white opacity-70 text-center">
              Partner with Vertex Executive Recruiting to experience a new
              standard in executive search and recruitment. Whether you're an
              organization seeking top-tier talent or a seasoned executive
              exploring new opportunities, our team is committed to your
              success. Join us in shaping a future where talent and opportunity
              align seamlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
