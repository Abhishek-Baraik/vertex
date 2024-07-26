import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const blogs = [
    {
      img: "s1.jpg",
      title: "Comprehensive Business Recruitment Solutions",
      para: "At Vertex Executive Recruiting, we recognize that a company's success relies on its people. Our comprehensive recruitment solutions are designed to identify and attract the right talent for every level of your organization. We delve deep into your business’s culture, goals, and values to ensure that we match candidates who align with your vision. Whether you need to fill executive roles or build a high-performing team, our proven recruitment strategies will help you secure the talent necessary for your success.",
      link: "/service1",
    },
    {
      img: "s2.jpg",
      title: "Placements In Private Equity - Private Equity Recruitment",
      para: "Navigating the dynamic world of private equity requires a deep understanding of the industry's unique demands. At Vertex Executive Recruiting, we have a dedicated team specializing in private equity recruitment. Our experts have a profound grasp of the sector's intricacies, allowing us to identify and secure executives with the skills, insights, and networks essential for success in private equity. From fund managers to portfolio executives, our private equity recruitment services provide the right leaders to drive your investment strategies.",
      link: "/service2",
    },
    {
      img: "s3.jpg",
      title: "Executive Talent Evaluation",
      para: "In a competitive business landscape, executive performance is crucial to success. At Vertex Executive Recruiting, our executive talent evaluation services offer comprehensive insights into the leadership abilities and competencies of candidates. With over [Number of Years] of experience, our elite team of search experts uses a meticulous approach to assess candidates, identifying their potential to drive growth and innovation. With our expertise, you can make confident decisions when building a leadership team that propels your organization forward.",
      link: "/service3",
    },
    {
      img: "s4.jpg",
      title: "MBO Executive M&A Intermediaries",
      para: "Executing management buyouts (MBOs) requires a delicate balance of strategy. At Vertex Executive Recruiting, our MBO Executive M&A Intermediaries specialize in identifying the right executives to lead these transformative transactions. With a proven track record and an extensive network of professionals, we manage the entire process—from valuation to negotiation—ensuring a smooth transition and ongoing success.",
      link: "/service4",
    },
    {
      img: "s5.jpg",
      title: "Confidential Search",
      para: "We understand that discretion is essential, particularly when recruiting for sensitive or strategic positions. Our confidential search services prioritize your organization's privacy and reputation. With a meticulous and discreet approach, we identify, evaluate, and present top-tier candidates who meet your requirements. You can trust that your company’s identity and search details remain secure throughout the entire process.",
      link: "/service5",
    },
    {
      img: "s6.jpg",
      title: "Talent Advisory",
      para: "At Vertex Executive Recruiting, we go beyond just placements. Our talent advisory services provide ongoing support to ensure your leadership team thrives. We offer strategic guidance, coaching, and insights to help your executives excel in their roles. By fostering their growth and development, we contribute to your organization’s long-term success.",
      link: "/service6",
    },
  ];
  return (
    <section className="paddings mt-10">
      <h2 className="h2 text-secondary font-semibold text-center">SERVICES</h2>
      <div className="border-b-2 border-primary w-1/4 m-auto"></div>
      <div className="sm:grid sm:grid-cols-3 flex flex-col gap-5  sm:gap-10 mt-10">
        {blogs.map((blog) => (
          <Link to={blog.link}>
            <div className="shadow-2xl rounded-lg hover:border-primary border-2 duration-200 ease-in">
              <div className="rounded-lg overflow-hidden">
                <img src={blog.img} className="object-contain" alt="" />
              </div>
              <div className="p-5 flex flex-col gap-4 mt-4">
                <h4 className="text-[20px] hover:text-primary cursor-pointer opacity-80 font-bold ">
                  {blog.title}
                </h4>
                <p className="p opacity-60">{blog.para}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;
