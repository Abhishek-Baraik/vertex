import React from "react";
import { TiTick } from "react-icons/ti";
const Services1 = () => {
  
  const arr1 = [
    {
      heading:"Executive-Level Placements:",
      subheading:"Our expertise extends to all tiers of your organization, including C-suite and executive positions. We identify leaders who possess the strategic mindset, industry acumen, and visionary thinking that your company needs",
    },
    {
      heading:"Management and Specialist Roles:",
      subheading:"Building a cohesive and high-performing team is crucial for sustained success. We source professionals across various management and specialist roles who bring their expertise to enhance your operations.",
    },
    {
      heading:"Cultural Fit Assessment:",
      subheading:"Ensuring cultural alignment is a priority. We assess candidates for their compatibility with your company's values, culture, and long-term goals, ensuring a harmonious fit that resonates with your organization's identity.",
    },
  ]

  const arr2 = [
    {
      heading:"Customized Recruitment:",
      subheading:"No two organizations are the same. Our tailored approach means that we align our strategies with your specific needs and preferences, ensuring a successful match between candidate and company.",
    },
    {
      heading:"Time and Resource Savings:",
      subheading:"Partnering with us frees up your internal resources. We handle the entire recruitment process, from sourcing to shortlisting, allowing your team to focus on core activities.",
    },
    {
      heading:"Access to Diverse Talent:",
      subheading:"Our vast network spans industries and geographies, giving you access to a diverse pool of talent that brings fresh perspectives to your organization",
    },
    {
      heading:"Confidentiality Assured: ",
      subheading:"We prioritize confidentiality throughout the recruitment process, safeguarding your sensitive information and maintaining your reputation.",
    },
  ]

  

  return (
    <section className="paddings mb-10">
      <div className="flex flex-col lg:flex-row lg:p-20 gap-16">
        <div className="lg:w-1/2">
          <img src="s1.jpg" alt="" />
        </div>
        <div className="lg:w-1/2 flex flex-col items-center justify-center">
          <h3 className="services-h">
            Comprehensive Business Recruitment Solutions
          </h3>
          <p className="services-p mt-2">
            At WTT Headhunters Inc., we believe that a company's true potential
            lies in its people. Our Comprehensive Business Recruitment Solutions
            are meticulously designed to help you identify and attract the right
            talent for every level of your organization. With a deep commitment
            to understanding your unique business culture, goals, and values, we
            go beyond the surface to ensure that we match candidates who align
            with your vision.
          </p>
        </div>
      </div>

      <div className="lg:px-20 mt-10 lg:mt-0">
        <h4 className="services-h">Our Approach</h4>
        <p className="services-p mt-2">
          We understand that a one-size-fits-all approach doesn't work in
          recruitment. That's why our team of experienced professionals takes
          the time to immerse themselves in your company's ethos. Through
          thorough consultations, we learn about your organizational structure,
          team dynamics, and growth aspirations. This knowledge allows us to
          tailor our recruitment strategies to find candidates who not only
          possess the required skills but also fit seamlessly into your
          company's fabric.
        </p>
      </div>

      <div className="lg:px-20 mt-10 ">
        <h4 className="services-h">Comprehensive Recruitment Services</h4>
        {arr1.map((item,index)=>(
          <div key={index} className="leading-relaxed mt-2">
            <TiTick className="inline-block text-primary"/> <span className="h6 mr-3">{item.heading}</span><span className="services-p">{item.subheading}</span>
          </div>
        ))}
      </div>

      <div className="lg:px-20 mt-10 ">
        <h4 className="services-h">Benefits of Our Services</h4>
        {arr2.map((item,index)=>(
          <div key={index} className="leading-relaxed mt-2">
            <TiTick className="inline-block text-primary"/> <span className="h6 mr-3">{item.heading}</span><span className="services-p">{item.subheading}</span>
          </div>
        ))}
      </div>

      <div className="lg:px-20 mt-10">
        <h4 className="services-h">Experience the Difference
        </h4>
        <p className="services-p mt-2">
        With WTT Headhunters Inc., recruitment isn't just about filling roles – it's about building a team that fuels your growth. Our Comprehensive Business Recruitment Solutions are the cornerstone of successful organizations that understand the value of aligning talent with vision. Let us be your partner in unlocking your company's full potential through exceptional people. Contact us today to take the next step in transforming your workforce.
        </p>
      </div>


    </section>
  );
};

export default Services1;
