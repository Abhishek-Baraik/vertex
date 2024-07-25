import React, { useState } from "react";
import Slides from "./Slides";
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
import { RiDoubleQuotesL } from "react-icons/ri";
import { FaGreaterThan } from "react-icons/fa";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { FaRocket } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import FaqSection from "./FaqSection";

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

  const blogs = [
    {
      img: "b2.jpg",
      title: "Job-Search Tips to Overcome Age Discrimination",
      para: "Age discrimination is a concern that many job seekers, especially those over 50, may encounter during their job search journey. However, with the right strategies and mindset, you can navigate this challenge effectively and secure the job opportunities you deserve. In this article, we'll explore actionable tips to help you overcome age discrimination in your job search.",
    },
    {
      img: "b7.jpg",
      title:
        "Why It Takes Time to Land an Executive-Level Job: Unraveling the Complexity",
      para: "Securing an executive-level job is often the culmination of years of hard work, dedication, and a proven track record of leadership. However, the path to landing such a role can be long and arduous. In this blog, we'll delve into the multifaceted world of executive-level job searches, exploring why it takes time to find the perfect opportunity.",
    },
    {
      img: "b9.jpg",
      title: "Headhunters vs. Recruiters: What Sets Them Apart?",
      para: "In the world of talent acquisition and job placement, two terms often emerge: 'headhunters' and 'recruiters.'' While both play critical roles in connecting job seekers with employers, they operate with distinct approaches, goals, and methodologies. Understanding the differences between headhunters and recruiters can empower job seekers and organizations alike to make informed decisions in their pursuit of talent or career advancement.",
    },
  ];

  const reviews = [
    {
      img: "tes-1.jpg",
      Fname: "David",
      Lname: "Cooper",
      review:
        " Vertex Executive Recruiting has consistently delivered exceptional executive candidates who align perfectly with our company's vision. Their dedication to understanding our needs and their global reach have made them an invaluable partner in our talent acquisition efforts.",
    },
    {
      img: "tes-2.jpg",
      Fname: "Michael J.",
      Lname: "Carter",
      review:
        "We’ve entrusted Vertex Executive Recruiting with some of our most critical executive searches. Their professionalism, industry expertise, and ability to identify the right talent for our leadership positions have significantly contributed to our company's growth.",
    },
    {
      img: "t3.jpg",
      Fname: "Robert",
      Lname: "Chang",
      review:
        " Vertex Executive Recruiting made my job search effortless. Their personalized approach, extensive industry connections, and dedication to my success set them apart. I’m now in a role I’m truly passionate about, and I credit their expert guidance for this achievement.",
    },
  ];

  const faqs = [
    {
      question: "NO FEES FOR STUDENTS",
      answer:
        "We prioritize your success. We are compensated by the employers we serve, ensuring that our services are completely free for candidates. Your journey with us will come at no cost to you.",
    },
    {
      question: "RETAINED SEARCH",
      answer:
        "As a retained executive search firm, we collaborate closely with employers to find the ideal match. Our commitment is to secure long-term, successful placements that benefit both you and the organization. ",
    },
    {
      question: "TOP POSITIONS",
      answer:
        "We specialize in filling high-impact positions such as CEOs, CFOs, CIOs, COOs, and other C-level roles, providing you with opportunities to step into influential leadership positions.",
    },
    {
      question: "CONFIDENTIALITY",
      answer:
        "Confidentiality is paramount to us. We understand the sensitivity of senior-level job searches and the potential impact on your current position. We uphold strict confidentiality throughout the entire process, ensuring that your personal information and job search activities remain private and undisclosed to your current employer or any other party without your explicit consent.",
    },
  ];

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <main className="container relative overflow-hidden">
      <Slides />
      {/* boxes */}
      <section className="boxes paddings sm:relative flex sm:flex-row flex-col gap-2 justify-center mt-4">
        {box.map((det, index) => (
          <div
            className="box hover:shadow-2xl bg-tertiary hover:-translate-y-6 ease-in duration-200 rounded-lg p-3 sm:p-6 sm:-top-36 sm:relative z-[2] flex flex-col gap-4 sm:w-1/3"
            key={index}
          >
            <h4 className="h3 text-white font-semibold">{det.heading}</h4>
            <p className="p text-white">{det.para}</p>
            <Link to={"/services"}>
              <button className="text-start text-white flex items-center gap-2 font-semibold hover:text-secondary">
                learn more <FaGreaterThan />
              </button>
            </Link>
          </div>
        ))}
      </section>

      {/* vertex executive */}
      <section className="paddings sm:flex mt-5">
        <div className="flex flex-col gap-10 items-center justify-center">
          <p className="h5 opacity-80 text-center">
            <span className="sm:text-[48px] text-[24px]  font-semibold italic">
              Vertex <span className="text-primary"> Executive</span> Recruiting
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
      </section>

      {/* vcountups  */}
      <section className="sm:flex-row flex flex-col gap-6 sm:gap-0 items-center paddings sm:justify-between mb-10 mt-5">
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
      </section>
      {/* why choose us */}
      <section className="sm:mt-20 mb-10 paddings">
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
            <h4 className="h3 headerr mt-5 font-semibold text-center">
              Customized Approach
            </h4>
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
            <h4 className="h3 headerr mt-5 font-semibold text-center">
              Global Network
            </h4>
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
            <h4 className="h3 headerr mt-5 font-semibold text-center">
              Confidentiality
            </h4>
            <p className="p headerr text-white opacity-70 text-center">
              We recognize the sensitivity of executive search. Rest assured
              that your company's identity and search details are managed with
              the highest level of discretion.
            </p>
          </div>
        </div>
      </section>

      {/* client sucess stories */}
      <section className="paddings mt-20 bg-[#EDF2FF]">
        <div className="">
          <h2 className="h2 paddings text-secondary font-semibold text-center">
            Client Success Stories
          </h2>
          <p className="p paddings text-center">
            Discover how Vertex Executive Recruiting has successfully partnered
            with organizations like yours to secure transformative executives.
            Our track record of placing visionary leaders in key roles speaks
            volumes about the quality of our services.
          </p>
        </div>
        <div>
          <h2 className="h2 paddings text-secondary font-semibold text-center">
            Ready to Elevate Your Executive Team
          </h2>
          <p className="p paddings text-center">
            Take the first step toward assembling a dynamic leadership team that
            propels your company toward success. Contact us today to discuss
            your executive search needs, and let us guide you in recruiting the
            leaders who will shape your future.
          </p>
        </div>
        <div>
          <h3 className="h5 paddings font-semibold text-center">
            Experience the power of strategic executive search with Vertex
            Executive Recruiting. Your vision, our expertise!
          </h3>
        </div>
      </section>

      {/* reviews section */}
      <section className=" mt-20">
        <Swiper
          className="relative"
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          // navigation
          pagination={{ clickable: true }}
          // scrollbar={{draggable:true}}
          autoplay={{ delay: 2000, disableOnInteraction: false }} // Add autoplay s90tings
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className="flex flex-col gap-5">
              <div className="flex justify-center rounded-[90%]">
                <img
                  src={review.img}
                  className="w-[150px] rounded-[90%]"
                  alt=""
                />
              </div>

              <div>
                <h2 className="text-[26px] text-center font-normal opacity-70">
                  {review.Fname}
                </h2>
                <h2 className="text-[40px] text-center leading-5 font-bold opacity-85 uppercase">
                  {review.Lname}
                </h2>
              </div>
              <div className="flex justify-center">
                <RiDoubleQuotesL className=" text-primary text-[48px]" />
              </div>
              <div className="flex justify-center mb-20">
                <p className="opacity-50 italic paddings sm:text-[23px] mt-0 text-center sm:w-[70%]">
                  {review.review}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* blog posts section */}
      <section className="paddings">
        <h2 className="h2 text-secondary font-semibold text-center">
          BLOG POSTS
        </h2>
        <div className="border-b-2 border-primary w-1/4 m-auto"></div>
        <div className="sm:flex-row flex flex-col gap-5  sm:gap-10 mt-10">
          {blogs.map((blog) => (
            <div className="shadow-2xl rounded-lg sm:w-1/3 hover:border-primary border-2 duration-200 ease-in">
              <div className="rounded-lg overflow-hidden">
                <img src={blog.img} className="object-contain" alt="" />
              </div>
              <div className="p-3 flex flex-col gap-4 mt-4">
                <h4 className="text-[20px] opacity-80 font-bold ">
                  {blog.title}
                </h4>
                <p className="p opacity-80">{blog.para}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* faqs section */}
      <FaqSection faqs={faqs} heading={"Why Choose Us For Candidates"} />

      {/* form section */}
      <section className="paddings mb-10">
        <h1 className="h2 text-secondary font-semibold text-center">
          APPLICANT FORM
        </h1>

        <form
          action=""
          className="sm:w-1/2 mx-auto flex flex-col gap-5 py-6 sm:px-12"
        >
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <div className="flex flex-col">
              <input
                type="text"
                name="Full Name"
                className=" p-3 border-[1px] border-zinc-200 rounded-md"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                name="Email"
                className="p-3 border-[1px] border-zinc-200 rounded-md"
                placeholder="Email"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <div className="flex flex-col">
              <input
                type="text"
                name="Phone"
                className=" p-3 border-[1px] border-zinc-200 rounded-md"
                placeholder="Phone"
              />
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                name="Job Title"
                className="p-3 border-[1px] border-zinc-200 rounded-md"
                placeholder="Desired Job Title"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <div className="flex flex-col">
              <input
                type="text"
                name="Desired Location"
                className=" p-3 border-[1px] border-zinc-200 rounded-md"
                placeholder="Desired Location"
              />
            </div>
            <div className="flex flex-col">
              <select
                name="Expected Salary"
                className="p-3 border-[1px] text-black opacity-80 border-zinc-200 rounded-md"
                id=""
              >
                <option value="select">Select Expected Salary</option>
                <option value="$100k - $150k">$100k - $150k</option>
                <option value="$150k - $200k">$150k - $200k</option>
                <option value="$200k - $250k">$200k - $250k</option>
                <option value="$300k - $400k">$300k - $400k</option>
                <option value="$500k">$500k</option>
              </select>
            </div>
          </div>
          <div className="flex gap-4 p-6">
            <input
              type="checkbox"
              name="confirmation"
              className="scale-[1.2]"
              id=""
              required
            />
            <p>
              I confirm that I want to receive emails, calls and text messages
              from this company using any contact information I provide.
            </p>
          </div>
        </form>
        <div className="flex justify-center">
          <button type="submit" className="curtain-button rounded-md">
            <span className="p-2">Submit</span>
          </button>
        </div>
      </section>

      <section className="sm:px-[9rem] py-10 bg-[#EDF2FF] flex flex-col sm:flex-row gap-3 justify-between">
        <div className="text-center">
          <h4 className="h4 opacity-75 font-semibold">FOR JOB SEEKERS</h4>
          <p className="p text-primary">jobs@vertexexecutiverecruiting.com</p>
        </div>
        <div className="text-center">
          <h4 className="h4 opacity-75 font-semibold">FOR EMPLOYERS</h4>
          <p className="p text-primary">staffing@vertexexecutiverecruiting.com</p>
        </div>
        <div className="text-center">
          <h4 className="h4 font-semibold opacity-75">OPEN HOURS</h4>
          <p className="p text-primary">Daily 9:00-20:00</p>
        </div>
      </section>
    </main>
  );
};

export default Home;
