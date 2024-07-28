import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogs = [
    {
      img: "j1.jpg",
      title: "5 Reasons Why You Absolutely Need a Job Search Strategy",
      para: "Embarking on a job search without a clear strategy is akin to setting sail without a map or compass. In today's competitive job market, having a well-defined job search strategy is not just beneficial; it's essential. Here are five compelling reasons why you should absolutely have a job search strategy in place",
      link: "/blog1",
    },
    {
      img: "b2.jpg",
      title: "Job-Search Tips to Overcome Age Discrimination",
      para: "Age discrimination is a concern that many job seekers, especially those over 50, may encounter during their job search journey. However, with the right strategies and mindset, you can navigate this challenge effectively and secure the job opportunities you deserve. In this article, we'll explore actionable tips to help you overcome age discrimination in your job search.",
      link: "/blog2",
    },
    {
      img: "b3.jpg",
      title: "7 Resume Tips for Older Job Seekers | Career Advice",
      para: "As an older job seeker, you bring a wealth of experience and expertise to the table. However, crafting a resume that effectively showcases your qualifications and minimizes potential age bias is crucial. Here are seven resume tips tailored to older job seekers to help you stand out in the competitive job market:",
      link: "/blog3",
    },
    {
      img: "b4.jpg",
      title: "4 Ways Technology Has Changed Hiring — for Job Seekers",
      para: "The digital age has revolutionized the hiring process, offering both opportunities and challenges for job seekers. Here are four ways technology has changed hiring, making it more convenient and accessible for those in search of employment",
      link: "/blog4",
    },
    {
      img: "b6.jpg",
      title: "9 Job Search Tips for Professionals Over 50",
      para: "Job searching can be a challenging endeavor at any age, but for professionals over 50, it often comes with unique considerations and opportunities. Whether you're looking to make a career change, reenter the workforce, or simply explore new opportunities, these nine job search tips are tailored to help professionals over 50 navigate this exciting yet sometimes daunting journey.",
      link: "/blog5",
    },
    {
      img: "b7.jpg",
      title: "Why It Takes Time to Land an Executive-Level Job: Unraveling the Complexity",
      para: "Securing an executive-level job is often the culmination of years of hard work, dedication, and a proven track record of leadership. However, the path to landing such a role can be long and arduous. In this blog, we'll delve into the multifaceted world of executive-level job searches, exploring why it takes time to find the perfect opportunity.",
      link: "/blog6",
    },
    {
      img: "b8.jpg",
      title: "10 Critical Mistakes to Avoid in Your Executive Job Search",
      para: "In the realm of executive job searches, the stakes are high, and even seasoned professionals can find themselves tripping over common pitfalls. The landscape has undergone a seismic shift in recent years, leaving many executives ill-prepared for the demands of today's digital age. Here, we highlight ten critical mistakes to steer clear of as you navigate this intricate journey.",
      link: "/blog7",
    },
    {
      img: "b9.jpg",
      title: "Headhunters vs. Recruiters: What Sets Them Apart?",
      para: 'In the world of talent acquisition and job placement, two terms often emerge: "headhunters" and "recruiters." While both play critical roles in connecting job seekers with employers, they operate with distinct approaches, goals, and methodologies. Understanding the differences between headhunters and recruiters can empower job seekers and organizations alike to make informed decisions in their pursuit of talent or career advancement.',
      link: "/blog8",
    },
    {
      img: "b10.jpg",
      title: "Your Guide to Excelling in the Complex Realm of Executive-Level Job Opportunities",
      para: "Embarking on a journey to secure executive-level job opportunities is an endeavor that requires finesse, strategy, and a profound understanding of the multifaceted landscape. This guide is your roadmap to success, offering a comprehensive perspective on the intricate world of executive-level positions and equipping you with the tools to navigate it confidently.",
      link: "/blog9",
    },
    {
      img: "b11.jpg",
      title: "The Proven Strategies for Landing Exclusive Executive Level Job Opportunities",
      para: "In the realm of executive-level job opportunities, success demands more than a polished resume and an impressive title on your LinkedIn profile. It requires a strategic approach, a deep understanding of the market, and the ability to stand out in a competitive landscape. In this guide, we'll delve into the proven strategies that will empower you to land exclusive executive-level job opportunities.",
      link: "/blog10",
    },
  ];
  return (
    <section className="paddings mt-10">
      <h2 className="h2 text-secondary font-semibold text-center">BLOGS</h2>
      <div className="border-b-2 border-primary w-1/4 m-auto"></div>
      <div className="lg:grid lg:grid-cols-3 flex flex-col gap-5  sm:gap-10 mt-10">
        {blogs.map((blog) => (
          <Link to={blog.link}>
            <div className="shadow-2xl rounded-lg lg:h-[45rem] hover:border-primary border-2 duration-200 ease-in">
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

export default Blog;
