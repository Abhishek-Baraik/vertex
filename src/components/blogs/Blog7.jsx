import React from "react";
import { TiTick } from "react-icons/ti";
const Blog7 = () => {
  const arr1 = [
    {
      heading: "1. Undefined Target",
      subheading:
        "Failing to define your job search direction is a major blunder. By skipping the essential step of target selection, you risk wasting valuable time pursuing unsuitable opportunities. Start by identifying companies that align with your criteria, allowing you to tailor your personal marketing materials effectively and craft a focused personal brand.",
    },
    {
      heading: "2. Over-reliance on Job Boards",
      subheading:
        "Relying solely on job boards is another common error. While they serve a purpose, they often feature outdated or inaccurate listings. Furthermore, your resume might linger in their database long after you secure a position, potentially impacting your professional image. Diversify your job search efforts by focusing on networking, which accounts for a more substantial percentage of executive job placements and offers a better return on investment.",
    },
    {
      heading: "3. Neglecting Research",
      subheading:
        "Once you've identified your target employers, invest time in researching them. This diligence will help you identify decision-makers, tailor your application materials, and excel in interviews and networking interactions. Utilize online sources, company websites, and industry reports for valuable market intelligence",
    },
    {
      heading: "4. Ineffective Networking",
      subheading:
        "Networking is the key to unlocking hidden job opportunities that are never publicly advertised. Use platforms like LinkedIn to expand your network, including executive recruiters, decision-makers at target companies, industry influencers, and colleagues. Engaging in informational interviews can provide valuable insights and connections.",
    },
    {
      heading: "5. Casual Approach",
      subheading:
        "Approaching your job search casually is a grave mistake. Treat your job search as a full-time job itself. Tom Peters, a pioneer of personal branding, emphasized the importance of personal branding in today's job market. Take it seriously and run your job search like a business, complete with a strategic plan. This mindset shift can enhance your chances of success.",
    },
    {
      heading: "6. Unrealistic Goals",
      subheading:
        "While setting daily goals is essential, they must be achievable. Realistic goals provide a sense of accomplishment and motivation. Strike a balance between ambition and feasibility to maintain momentum throughout your search.",
    },
    {
      heading: "7. Lack of Progress Tracking",
      subheading:
        "Keep track of your job search activities, including outreach, interviews, and applications. Analyze what works and what doesn't, and adjust your strategy accordingly. Developing benchmarks and metrics will help you stay on course.",
    },
    {
      heading: "8. Neglecting Personal Branding",
      subheading:
        "In today's competitive job market, personal branding is no longer optional; it's a necessity. Stand out by effectively communicating your unique value proposition through personal branding. Create on-brand personal marketing materials that clearly convey how your skills and qualities make you an ideal fit for potential employers.",
    },
    {
      heading: "9. Overlooking Your Online Presence",
      subheading:
        "Your digital footprint matters. Recruiters and hiring managers often assess candidates based on their online presence. Ensure that your online information aligns with your personal brand and is easily discoverable by potential employers.",
    },
      {
        heading: "10. Underutilizing Social Media",
        subheading:
          "LinkedIn, Twitter, and blogging platforms can be powerful tools for promoting your executive brand. Leverage these platforms to establish yourself as a subject matter expert and connect with decision-makers in your target companies.",
      },
  ];

  return (
    <section className="paddings mb-10">
      <div className="flex flex-col lg:flex-row lg:p-20 gap-16">
        <div className="lg:w-1/2">
          <img src="b8.jpg" alt="" />
        </div>
        <div className="lg:w-1/2 flex flex-col items-center justify-center">
          <h3 className="services-h">
          10 Critical Mistakes to Avoid in Your Executive Job Search
          </h3>
          <p className="services-p mt-2">
          In the realm of executive job searches, the stakes are high, and even seasoned professionals can find themselves tripping over common pitfalls. The landscape has undergone a seismic shift in recent years, leaving many executives ill-prepared for the demands of today's digital age. Here, we highlight ten critical mistakes to steer clear of as you navigate this intricate journey.
          </p>
        </div>
      </div>

      <div className="lg:px-20 mt-10 ">
        {arr1.map((item, index) => (
          <div key={index} className="leading-relaxed mt-6">
            <h3 className="services-h text-primary opacity-80">
              {item.heading}
            </h3>
            <p className="services-p mt-4">{item.subheading}</p>
          </div>
        ))}
      </div>

      <div className="lg:px-20 mt-10">
        <p className="services-p mt-2">
        Steering clear of these ten critical mistakes will pave the way for a more successful executive job search. By defining your goals, leveraging networking, maintaining a professional online presence, and embracing personal branding, you can navigate this complex landscape with confidence and increase your chances of securing the perfect opportunity.
        </p>
      </div>
    </section>
  );
};

export default Blog7;
