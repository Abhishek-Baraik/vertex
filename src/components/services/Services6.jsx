import React from "react";
import { TiTick } from "react-icons/ti";
const Services6 = () => {

  const arr1 = [
    {
      heading: "Partners in Growth: ",
      subheading:
        "We view ourselves as partners invested in your success. Our advisory services are designed to provide you with actionable insights that optimize your talent acquisition, development, and retention strategies.",
    },
    {
      heading: "Data-Driven Insights:",
      subheading:
        "Our approach is rooted in data analysis. We leverage industry trends, market research, and talent analytics to provide you with valuable insights that drive informed decision-making.",
    },
    {
      heading: "Customized Solutions:",
      subheading:
        "We understand that each organization's talent needs are unique. Our advisory services are tailored to your specific industry, organizational structure, and growth objectives.",
    },
  ];

  const arr2 = [
    {
      heading: "Workforce Planning:",
      subheading:
        "We assist you in creating strategic workforce plans that align with your business's growth projections, ensuring you have the right talent in place to meet your objectives.",
    },
    {
      heading: "Succession Planning:",
      subheading:
        "Prepare for the future by identifying and nurturing internal talent that can step into key leadership roles when needed.",
    },
    {
      heading: "Leadership Development: ",
      subheading:
        " Our advisory services include leadership development programs that enhance the skills and capabilities of your existing and emerging leaders.",
    },
  ];

  const arr3 = [
    {
      heading: "Holistic Approach: ",
      subheading:
        "Our Talent Advisory service provides a comprehensive approach to talent management, addressing everything from recruitment and development to succession planning.",
    },
    {
      heading: "Strategic Insights: ",
      subheading:
        "Our advisory services offer you strategic insights that help you build a high-performing workforce that contributes to your company's growth.",
    },
    {
      heading: "Long-Term Partnership:",
      subheading:
        "We're not just about short-term fixes. Our Talent Advisory services establish a long-term partnership aimed at continuously optimizing your talent strategies.",
    },
  ];

  return (
    <section className="paddings mb-10">
      <div className="flex flex-col lg:flex-row lg:p-20 gap-16">
        <div className="lg:w-1/2">
          <img src="s6.jpg" alt="" />
        </div>
        <div className="lg:w-1/2 flex flex-col items-center justify-center">
          <h3 className="services-h">Talent Advisory</h3>
          <p className="services-p mt-2">
          Welcome to WTT Headhunters Inc. specialized Talent Advisory service, where we go beyond traditional executive recruitment to offer strategic insights that enhance your organization's talent management strategies. Our team of experienced advisors collaborates with you to optimize your workforce, aligning human capital with your business's growth trajectory and long-term goals.
          </p>
        </div>
      </div>

      <div className="lg:px-20 mt-10 ">
        <h4 className="services-h">
        Our Approach to Talent Advisory
        </h4>
        {arr1.map((item, index) => (
          <div key={index} className="leading-relaxed mt-2">
            <TiTick className="inline-block text-primary" />{" "}
            <span className="h6 mr-3">{item.heading}</span>
            <span className="services-p">{item.subheading}</span>
          </div>
        ))}
      </div>

      <div className="lg:px-20 mt-10 ">
        <h4 className="services-h">
        Comprehensive Talent Advisory Services
        </h4>
        {arr2.map((item, index) => (
          <div key={index} className="leading-relaxed mt-2">
            <TiTick className="inline-block text-primary" />{" "}
            <span className="h6 mr-3">{item.heading}</span>
            <span className="services-p">{item.subheading}</span>
          </div>
        ))}
      </div>

      <div className="lg:px-20 mt-10 ">
        <h4 className="services-h">
        Why WTT Headhunters Inc. for Talent Advisory? 
         </h4>
        {arr3.map((item, index) => (
          <div key={index} className="leading-relaxed mt-2">
            <TiTick className="inline-block text-primary" />
            <span className="h6 mr-3">{item.heading}</span>
            <span className="services-p">{item.subheading}</span>
          </div>
        ))}
      </div>

      <div className="lg:px-20 mt-10">
        <h4 className="services-h">Elevate Your Talent Management Strategy
        </h4>
        <p className="services-p mt-2">
        Unlock the full potential of your workforce with WTT Headhunters Inc.'s Talent Advisory service. Our team of experienced advisors is here to guide you in developing and implementing strategies that align human capital with your business's objectives. Contact us today to discuss how our Talent Advisory services can help you build a workforce that drives your organization's success.
        </p>
      </div>
    </section>
  );
};

export default Services6;
