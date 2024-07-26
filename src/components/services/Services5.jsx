import React from "react";
import { TiTick } from "react-icons/ti";
const Services5 = () => {
  const arr1 = [
    {
      heading: "Safeguarding Your Reputation: ",
      subheading:
        "We recognize the sensitivity of certain searches, especially those involving senior-level positions. Our approach is centered on safeguarding your organization's reputation by conducting the search discreetly and professionally.",
    },
    {
      heading: "Maintaining Anonymity:",
      subheading:
        "We manage the search process without disclosing your company's identity until a later stage, allowing you to evaluate potential candidates before revealing your organization's involvement.",
    },
    {
      heading: "Customized Communication:",
      subheading:
        "Our team ensures that all interactions with potential candidates are handled with the utmost confidentiality, maintaining the integrity of your company's search process.",
    },
  ];

  const arr2 = [
    {
      heading: "High-Level Leadership Roles:",
      subheading:
        "Our Confidential Search service is designed for high-profile leadership roles where privacy is crucial. We identify candidates who meet your requirements without compromising your organization's identity.",
    },
    {
      heading: "Strategic Approach:",
      subheading:
        "We employ a strategic approach to confidential searches, considering the unique challenges and opportunities associated with discreet executive recruitment.",
    },
    {
      heading: "Effective Screening: ",
      subheading:
        "Our team meticulously screens candidates, ensuring that they not only possess the necessary qualifications but also align with your company's values and culture.",
    },
  ];

  const arr3 = [
    {
      heading: "Commitment to Confidentiality: ",
      subheading:
        "We prioritize maintaining the confidentiality of your search from start to finish, safeguarding your organization's sensitive information.",
    },
    {
      heading: "Extensive Network: ",
      subheading:
        "Our extensive network allows us to discreetly connect with potential candidates who are well-suited to your requirements.",
    },
    {
      heading: "Expertise in Discreet Recruitment:",
      subheading:
        "Our team has a proven track record in conducting discreet executive searches, ensuring that your search remains confidential while yielding exceptional candidates.",
    },
  ];

  return (
    <section className="paddings mb-10">
      <div className="flex flex-col lg:flex-row lg:p-20 gap-16">
        <div className="lg:w-1/2">
          <img src="s5.jpg" alt="" />
        </div>
        <div className="lg:w-1/2 flex flex-col items-center justify-center">
          <h3 className="services-h">Confidential Search</h3>
          <p className="services-p mt-2">
          Welcome to WTT Headhunters Inc. specialized Confidential Search service, where discretion and privacy are paramount. We understand that certain executive searches require a heightened level of confidentiality, and our service is designed to ensure that your organization's identity and search details remain protected throughout the recruitment process.
          </p>
        </div>
      </div>

      <div className="lg:px-20 mt-10 ">
        <h4 className="services-h">
        Our Approach to Confidential Search
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
        Comprehensive Confidential Search Services:
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
        Why WTT Headhunters Inc. for Confidential Search?
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
        <h4 className="services-h">Experience Discreet and Effective Recruitment:
        </h4>
        <p className="services-p mt-2">
        Enhance your executive recruitment process with WTT Headhunters Inc. Confidential Search service. Our dedicated team is committed to preserving your organization's privacy while ensuring you have access to top-tier candidates. Contact us today to discuss your confidential executive search needs and embark on a journey toward securing the right leadership for your company.
        </p>
      </div>
    </section>
  );
};

export default Services5;
