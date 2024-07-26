import React from "react";
import { TiTick } from "react-icons/ti";
const Services3 = () => {
  
  const arr1 = [
    {
      heading:"Proven Assessment Methodology:",
      subheading:"With over 12 of experience, our elite team of executive search experts has honed a meticulous assessment methodology. We delve deep into evaluating candidates' leadership qualities, strategic thinking, adaptability, and their potential to drive growth and innovation.",
    },
    {
      heading:" Comprehensive Evaluation: ",
      subheading:"Our evaluation process is multi-dimensional, encompassing not only technical skills but also emotional intelligence, cultural fit, and alignment with your organization's values and long-term goals.",
    },
    {
      heading:"Tailored Recommendations:",
      subheading:"Based on our assessment, we provide detailed feedback and recommendations that go beyond just qualifications. We offer insights into how candidates can contribute to your company's strategic vision and foster a culture of excellence.",
    },
  ]

  const arr2 = [
    {
      heading:"Leadership Competency Assessment:",
      subheading:" Our assessment identifies candidates' leadership competencies, including their ability to communicate effectively, make strategic decisions, and inspire teams.",
    },
    {
      heading:" Cultural Fit Evaluation:",
      subheading:"We analyze how well candidates align with your company's culture, values, and long-term objectives, ensuring a harmonious integration into your organization.",
    },
    {
      heading:"Potential Analysis:",
      subheading:"Beyond current capabilities, we assess candidates' potential for growth and future leadership roles, ensuring that your investment in talent pays off in the long run.",
    },
  ]

  const arr3 = [
    {
      heading:"Strategic Insights:",
      subheading:"Our evaluation process goes beyond surface-level qualifications. We provide strategic insights that empower you to make choices that align with your company's vision and goals.",
    },
    {
      heading:"Customized Approach: ",
      subheading:"We understand that each organization is unique. Our assessment process is customized to your business's context, ensuring the evaluation is relevant and impactful.",
    },
    {
      heading:"Contributing to Your Success:",
      subheading:"By identifying candidates with the right mix of skills, competencies, and potential, we contribute to building a leadership team that drives your company's growth and innovation.",
    },
  ]

  

  return (
    <section className="paddings mb-10">
      <div className="flex flex-col lg:flex-row lg:p-20 gap-16">
        <div className="lg:w-1/2">
          <img src="s3.jpg" alt="" />
        </div>
        <div className="lg:w-1/2 flex flex-col items-center justify-center">
          <h3 className="services-h">
          Executive Talent Evaluation
          </h3>
          <p className="services-p mt-2">
          Welcome to WTT Headhunters Inc. Executive Talent Evaluation service, where we recognize that in today's competitive business landscape, the performance of executives and leaders is pivotal to your organization's success. Our specialized service provides comprehensive insights into the leadership abilities and competencies of professional candidates, ensuring that you make informed decisions when building a leadership team that propels your organization forward.
          </p>
        </div>
      </div>

      <div className="lg:px-20 mt-10 ">
        <h4 className="services-h">Our Expertise in Executive Talent Evaluation</h4>
        {arr1.map((item,index)=>(
          <div key={index} className="leading-relaxed mt-2">
            <TiTick className="inline-block text-primary"/> <span className="h6 mr-3">{item.heading}</span><span className="services-p">{item.subheading}</span>
          </div>
        ))}
      </div>

      <div className="lg:px-20 mt-10 ">
        <h4 className="services-h">Comprehensive Private Equity Recruitment Services:</h4>
        {arr2.map((item,index)=>(
          <div key={index} className="leading-relaxed mt-2">
            <TiTick className="inline-block text-primary"/> <span className="h6 mr-3">{item.heading}</span><span className="services-p">{item.subheading}</span>
          </div>
        ))}
      </div>

      <div className="lg:px-20 mt-10 ">
        <h4 className="services-h">Why WTT Headhunters Inc. for Private Equity Recruitment?</h4>
        {arr3.map((item,index)=>(
          <div key={index} className="leading-relaxed mt-2">
            <TiTick className="inline-block text-primary"/><span className="h6 mr-3">{item.heading}</span><span className="services-p">{item.subheading}</span>
          </div>
        ))}
      </div>

      <div className="lg:px-20 mt-10">
        <h4 className="services-h">Experience the Power of Informed Hiring:
        </h4>
        <p className="services-p mt-2">
        Elevate your executive hiring process with [Your Company Name]'s Executive Talent Evaluation service. Make confident decisions that set your organization on a trajectory of success by identifying leaders who can make a meaningful impact. Contact us today to discuss how we can assist you in building a leadership team that truly delivers results.
        </p>
      </div>


    </section>
  );
};

export default Services3;
