import React from 'react'
import { MdAttachMoney } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { PiNumberSquareOneFill } from "react-icons/pi";
import { PiNumberSquareTwoFill } from "react-icons/pi";
import { PiNumberSquareThreeFill } from "react-icons/pi";
import { PiNumberSquareFourFill } from "react-icons/pi";
import { PiNumberSquareFiveFill } from "react-icons/pi";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Candidates = () => {
  const points = [
    {
      heading: "Tailored Matches :",
      subheading:
        "Our team meticulously matches your skills, experience, and aspirations with executive roles that align with your unique qualifications.",
    },
    {
      heading: "Diverse Industries :",
      subheading:
        "Whether your expertise is in finance, technology, healthcare, or any other sector, we have connections across industries to offer you a diverse range of opportunities.",
    },
    {
      heading: "Career Advancement :",
      subheading:
        "Discover roles that challenge you, enable you to contribute at a strategic level, and elevate your career to new heights.",
    },
  ];

  const process = [
    {
      heading: "Profile Creation",
      subheading:
        "Submit your resume and create a profile that showcases your accomplishments, skills, and career objectives",
        icon:<PiNumberSquareOneFill />
    },
    {
      heading: "Matching",
      subheading:
        "Our team carefully reviews your profile and matches you with executive opportunities that align with your background",
        icon:<PiNumberSquareTwoFill/>
    },
    {
      heading: "Interviews",
      subheading:
        "We facilitate interviews with potential employers, giving you the chance to interact and discuss the role's fit for your career goals.",
        icon:<PiNumberSquareThreeFill/>
    },
    {
      heading: "Negotiations",
      subheading:
        "Once you've found the perfect match, we assist in negotiations and ensure a seamless transition into your new role.",
        icon:<PiNumberSquareFourFill/>
    },
  ];
  return (
    <section>
      <div className="flex-col flex lg:flex-row paddings">
        <div className="lg:w-1/2 flex flex-col justify-center">
          <span className="sm:text-[48px] text-[24px] opacity-80  font-semibold italic">
            Vertex <span className="text-primary"> Executive</span> Recruiting
            Candidates Platform
          </span>{" "}
          <p className="p opacity-80 text-start">
          Designed exclusively for accomplished professionals seeking new opportunities that align with their expertise and ambitions, our dedicated service connects you with top-tier executive positions across industries. We provide you with the chance to make a significant impact on leading organizations.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img src="hr.jpg" alt="" />
        </div>
      </div>

      <div className="flex-col mt-10 flex lg:flex-row paddings">
        <div className="lg:w-1/2 order-2 lg:order-1">
          <img src="hr.jpg" alt="" />
        </div>
        <div className="lg:w-1/2 order-1 lg:order-2 flex flex-col gap-3 justify-center">
          <span className="sm:text-[48px] opacity-80 text-[24px]  font-semibold">
            Our Services:
          </span>{" "}
          <p className="p opacity-80 leading-7 text-start">
            {points.map((item, index) => (
              <div className="mt-3" key={index}>
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
        <div className="grid grid-cols-1 pb-10 md:px-[9rem] lg:px-0 lg:grid-cols-3 gap-10 sm:mt-20 mt-10 mx-auto">
          <div className="executive relative hover:shadow-2xl bg-tertiary border-[1px] border-primary hover:bg-white hover:text-secondary ease-in duration-200 rounded-lg py-8 px-4 flex flex-col gap-4">
            <div className="p-4 sm:p-6 bg-primary text-white absolute rounded-full -top-6 left-[40%] sm:left-[42%]">
            <MdAttachMoney />
            </div>
            <h4 className="h3 headerr mt-5 font-semibold text-center">
            No Fees for Candidates
            </h4>
            <p className="p headerr text-white opacity-70 text-center">
            We prioritize your success. Since we are compensated by the employers we serve, our services are completely free for candidates. Your journey with us will incur no costs.
            </p>
          </div>

          <div className="executive relative hover:shadow-2xl bg-tertiary border-[1px] border-primary hover:bg-white hover:text-secondary ease-in duration-200 rounded-lg py-8 px-4 flex flex-col gap-4">
            <div className="p-4 sm:p-6 bg-primary text-white absolute rounded-full -top-6 left-[40%] sm:left-[42%]">
            <FaSearch />
            </div>
            <h4 className="h3 headerr mt-5 font-semibold text-center">
            Retained Search
            </h4>
            <p className="p headerr text-white opacity-70 text-center">
            As a retained executive search firm, we work closely with employers to find the perfect match. Our commitment is to ensure long-term, successful placements that benefit both you and the organization.
            </p>
          </div>

          <div className="executive relative hover:shadow-2xl bg-tertiary border-[1px] border-primary hover:bg-white hover:text-secondary ease-in duration-200 rounded-lg py-8 px-4 flex flex-col gap-4">
            <div className="p-4 sm:p-6 bg-primary text-white absolute rounded-full -top-6 left-[40%] sm:left-[42%]">
            <FaUserTie />
            </div>
            <h4 className="h3 headerr mt-5 font-semibold text-center">
            Top Positions
            </h4>
            <p className="p headerr text-white opacity-70 text-center">
            We specialize in filling positions such as CEOs, CFOs, CIOs, COOs, and other C-level roles, providing you with opportunities to step into influential leadership positions.
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

      <div className=' paddings'>
        <div className='flex flex-col gap-4 py-6 px-4'>
          <h3 className='h4 font-semibold opacity-80 text-center'>Elevate Your Leadership Team with Us</h3>
          <p className='p text-secondary text-center'>Vertex Executive Recruiting is your strategic partner in finding the exceptional talent that will shape your company's future. Collaborate with us to build a leadership team equipped to drive innovation, growth, and success. Contact us today to explore how our Employer Solutions can support your organization's recruitment and talent management needs.</p>
        </div>

        <div className='bg-quadery pb-10 pt-5'>
        <div className="paddings mt-10">
        <h1 className="h2 text-secondary font-semibold text-center">
         SUBMIT <br /> APPLICANT FORM
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
          <div className="flex gap-4">
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
      </div>
      </div>
      </div>
    </section>
  )
}

export default Candidates