import React from "react";
import { TiTick } from "react-icons/ti";
import { BsBriefcaseFill } from "react-icons/bs";
import { FaGlobeAsia } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoMdCheckboxOutline } from "react-icons/io";
import { FaUsers } from "react-icons/fa6";
import { FaComments } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";




const Employers = () => {
  const points = [
    {
      heading: "Executive Search:",
      subheading:
        "Our expert team excels in identifying, evaluating, and securing executive-level candidates who align with your company's vision, culture, and strategic objectives.",
    },
    {
      heading: "Comprehensive Recruitment:",
      subheading:
        "We offer end-to-end recruitment services, covering everything from C-suite executives to specialized roles, ensuring access to a diverse pool of qualified candidates.",
    },
    {
      heading: "Talent Advisory:",
      subheading:
        "We provide data-driven insights, strategic workforce planning, leadership development, and succession planning to optimize your talent management strategies.",
    },
  ];

  const process = [
    {
      heading: "Discovery",
      subheading:
        "Rooted in data and insights, we leverage analytics and industry trends to inform decision-making and drive success.",
        icon:<IoMdCheckboxOutline/>
    },
    {
      heading: "Sourcing",
      subheading:
        "We identify a diverse pool of qualified candidates who align with your specifications.",
        icon:<FaUsers />
    },
    {
      heading: "Screening",
      subheading:
        "We conduct a meticulous evaluation of candidates' qualifications, skills, and cultural fit to present the most suitable options.",
        icon:<TiTick/>
    },
    {
      heading: "Interviews",
      subheading:
        " We facilitate interviews, enabling interactions with potential candidates to help you make informed decisions.",
        icon:<FaComments />
    },
    {
      heading: "Selection",
      subheading:
        "We assist with negotiations and onboarding once the right candidate is identified, ensuring a smooth and seamless transition.",
        icon:<FaCheckCircle />
    },
  ];
  return (
    <section>
      <div className="flex-col flex sm:flex-row paddings">
        <div className="lg:w-1/2 flex flex-col justify-center">
          <span className="sm:text-[48px] text-[24px] opacity-80  font-semibold italic">
            Vertex <span className="text-primary"> Executive</span> Recruiting
            Employer Solutions
          </span>{" "}
          <p className="p opacity-80 text-start">
            Specializing in bespoke executive search and recruitment services,
            we help your organization discover and secure top-tier talent that
            fuels growth and success. Partnering with you, we build a leadership
            team equipped to navigate complexities and seize opportunities.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img src="hr.jpg" alt="" />
        </div>
      </div>

      <div className="flex-col mt-10 flex sm:flex-row paddings">
        <div className="lg:w-1/2 order-2 lg:order-1">
          <img src="hr.jpg" alt="" />
        </div>
        <div className="lg:w-1/2 order-1 lg:order-2 flex flex-col gap-3 justify-center">
          <span className="sm:text-[48px] opacity-80 text-[24px]  font-semibold">
            Our Services:
          </span>{" "}
          <p className="p opacity-80 leading-7 text-start">
            {points.map((item, index) => (
              <div className="mt-3">
                <span className="inline-block mr-1 text-primary text-[20px]">
                  <TiTick />
                </span>
                <span className="font-semibold">{item.heading} </span>
                {item.subheading}
              </div>
            ))}
          </p>
        </div>
      </div>

      <div className="sm:mt-20 paddings bg-quadery">
        <div className="grid grid-cols-1 pb-10 sm:grid-cols-3 gap-10 sm:mt-20 mt-10 mx-auto">
          <div className="executive relative hover:shadow-2xl bg-tertiary border-[1px] border-primary hover:bg-white hover:text-secondary ease-in duration-200 rounded-lg py-8 px-4 flex flex-col gap-4">
            <div className="p-4 sm:p-6 bg-primary text-white absolute rounded-full -top-6 left-[40%] sm:left-[42%]">
              <BsBriefcaseFill />
            </div>
            <h4 className="h3 headerr mt-5 font-semibold text-center">
              Specialized Expertise
            </h4>
            <p className="p headerr text-white opacity-70 text-center">
              Our deep industry knowledge and executive recruitment experience
              set us apart, allowing us to tailor solutions that address the
              unique challenges of your sector.
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
              Our extensive network spans industries and geographies, ensuring
              access to top talent worldwide.
            </p>
          </div>

          <div className="executive relative hover:shadow-2xl bg-tertiary border-[1px] border-primary hover:bg-white hover:text-secondary ease-in duration-200 rounded-lg py-8 px-4 flex flex-col gap-4">
            <div className="p-4 sm:p-6 bg-primary text-white absolute rounded-full -top-6 left-[40%] sm:left-[42%]">
              <FaChartLine />
            </div>
            <h4 className="h3 headerr mt-5 font-semibold text-center">
              Data-Driven Insights
            </h4>
            <p className="p headerr text-white opacity-70 text-center">
              Rooted in data and insights, we leverage analytics and industry
              trends to inform decision-making and drive success.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h1 className="h1 opacity-80 font-semibold text-center">Our Process</h1>
        <div>
          <VerticalTimeline lineColor="#1A76D1">
            {process.map((item,index)=>(
              <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--education"
              iconStyle={{ background: "#1A76D1", color: "#fff" }}
              icon={item.icon}
            >
              <div
            className="executive relative border-[1px] border-primary hover:bg-white hover:text-secondary ease-in duration-200 bg-tertiary hover:-translate-y-2 rounded-lg p-3 sm:p-6 flex flex-col gap-4"
            key={index}
          >
            <h4 className="h3 headerr text-white font-semibold">{item.heading}</h4>
            <p className="p headerr text-white">{item.subheading}</p>
          </div>
            </VerticalTimelineElement>
            ))}
              
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Employers;
