import React from "react";
import { TiTick } from "react-icons/ti";
const Blog4 = () => {
  const arr1 = [
    {
      heading: "1. Online Job Boards and Portals",
      subheading: (
        <span>
          <b>Opportunity:</b> Job seekers now have access to an abundance of job
          listings through online job boards and portals. Platforms like
          LinkedIn, Indeed, and Glassdoor provide a vast array of job
          opportunities across various industries and locations. Job seekers can
          easily search for positions that align with their skills and
          preferences.
        </span>
      ),
      thirdheading: (
        <span>
          <b>Challenge:</b> The sheer volume of job listings can be
          overwhelming. Job seekers must use filters and keywords effectively to
          narrow down their search and find the most relevant positions.
          Additionally, competition for jobs can be fierce, as many candidates
          have easy access to the same job listings.
        </span>
      ),
    },
    {
      heading: "2. Applicant Tracking Systems (ATS)",
      subheading: (
        <span>
          <b>Opportunity:</b> ATS software allows employers to manage and streamline the application process. Job seekers can submit their resumes and applications online, making it more convenient to apply to multiple positions. ATS can also help match candidates with suitable job openings based on keywords and qualifications.
        </span>
      ),
      thirdheading: (
        <span>
          <b>Challenge:</b> ATS systems often screen applications automatically, which means that job seekers need to optimize their resumes for ATS compatibility. This includes using relevant keywords and avoiding complex formatting that might confuse the software. A well-structured resume is crucial to ensure it passes through ATS filters.
        </span>
      ),
    },
    {
      heading: "3. Video Interviews and Virtual Assessments",
      subheading: (
        <span>
          <b>Opportunity:</b> Technology has made it possible for employers to conduct video interviews and virtual assessments, saving time and resources for both parties. Job seekers can participate in interviews from the comfort of their homes, reducing the need for travel and in-person meetings.
        </span>
      ),
      thirdheading: (
        <span>
          <b>Challenge:</b>  Video interviews require job seekers to adapt to a different format. They must ensure they have the necessary equipment, a stable internet connection, and a suitable environment for virtual interviews. Preparing for virtual assessments and interviews also requires a different set of skills than traditional face-to-face meetings.
        </span>
      ),
    },
    {
      heading: "4. Online Professional Branding",
      subheading: (
        <span>
          <b>Opportunity:</b> Social media platforms, particularly LinkedIn, have become essential tools for job seekers to establish and showcase their professional brand. Job seekers can create comprehensive LinkedIn profiles, connect with industry professionals, and share their accomplishments and expertise.
        </span>
      ),
      thirdheading: (
        <span>
          <b>Challenge:</b>  Maintaining a strong online presence requires consistent effort. Job seekers must curate their profiles carefully, engage with their network, and contribute valuable content. Managing online professional branding is an ongoing process that requires dedication.
        </span>
      ),
    },
  ];

  return (
    <section className="paddings mb-10">
      <div className="flex flex-col lg:flex-row lg:p-20 gap-16">
        <div className="lg:w-1/2">
          <img src="b4.jpg" alt="" />
        </div>
        <div className="lg:w-1/2 flex flex-col items-center justify-center">
          <h3 className="services-h">
            4 Ways Technology Has Changed Hiring-for Job Seekers{" "}
          </h3>
          <p className="services-p mt-2">
            The digital age has revolutionized the hiring process, offering both
            opportunities and challenges for job seekers. Here are four ways
            technology has changed hiring, making it more convenient and
            accessible for those in search of employment:
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
            <p className="services-p mt-4">{item.thirdheading}</p>
          </div>
        ))}
      </div>

      <div className="lg:px-20 mt-10">
        <p className="services-p mt-2">
        In conclusion, technology has transformed the job search process in numerous ways, offering both opportunities and challenges for job seekers. While online job boards provide access to a wide range of opportunities, ATS systems require careful resume optimization. Video interviews and virtual assessments offer convenience but demand adaptation to new formats. Finally, online professional branding has become a crucial aspect of modern job searching. Job seekers who leverage technology effectively can enhance their job search experience and increase their chances of landing their desired positions.
        </p>
      </div>
    </section>
  );
};

export default Blog4;
