import React from "react";
import { TiTick } from "react-icons/ti";
const Blog3 = () => {
  
  const arr1 = [
    {
      heading:"1. Emphasize Relevant Experience",
      subheading:"Focus your resume on the most recent 10-15 years of your work history, especially roles that are directly related to your target job. Highlight relevant accomplishments, responsibilities, and skills that demonstrate your suitability for the position. Prioritize recent achievements that showcase your current expertise.",
    },
    {
      heading:"2. Omit Irrelevant Details",
      subheading:"Avoid including dated or unrelated work experiences, especially those from the distant past. While your career journey is valuable, a cluttered resume can dilute the impact of your recent accomplishments. Streamline your document to feature the most pertinent information that aligns with your career goals.",
    },
    {
      heading:"3. Highlight Achievements",
      subheading:"Quantify your accomplishments whenever possible. Use specific metrics, percentages, and figures to illustrate the impact of your contributions. Highlight successful projects, cost savings, revenue growth, and any other tangible results you've achieved throughout your career. Concrete achievements demonstrate your value to potential employers.",
    },
    {
      heading:"4. Modernize Your Skill Set",
      subheading:"Demonstrate your adaptability by showcasing your proficiency in modern technologies and relevant industry tools. Highlight any recent certifications, training, or courses you've completed to stay current in your field. This demonstrates your commitment to continuous learning and your ability to thrive in a tech-driven workplace.",
    },
    {
      heading:"5. Optimize Your Resume for Applicant Tracking Systems (ATS)",
      subheading:"Many employers use ATS to screen resumes. To ensure your resume passes this initial hurdle, incorporate relevant keywords from the job description. Tailor your resume to match the specific requirements of each position you apply for. This optimization increases the likelihood of your resume reaching the hands of hiring managers.",
    },
    {
      heading:"6. Professional Summary",
      subheading:"Include a concise professional summary or objective statement at the beginning of your resume. This section should succinctly highlight your key qualifications and career goals. It provides hiring managers with a quick overview of your background and sets the tone for the rest of your resume.",
    },
    {
      heading:"7. Consider Resume Design",
      subheading:"Choose a clean and modern resume format. Use legible fonts, bullet points, and clear headings to enhance readability. Avoid overly elaborate designs or outdated templates. A well-organized and visually appealing resume will make a positive impression.",
    },
  ]


  

  return (
    <section className="paddings mb-10">
      <div className="flex flex-col lg:flex-row lg:p-20 gap-16">
        <div className="lg:w-1/2">
          <img src="b3.jpg" alt="" />
        </div>
        <div className="lg:w-1/2 flex flex-col items-center justify-center">
          <h3 className="services-h">
          7 Resume Tips for Older Job Seekers | Career Advice          </h3>
          <p className="services-p mt-2">
          As an older job seeker, you bring a wealth of experience and expertise to the table. However, crafting a resume that effectively showcases your qualifications and minimizes potential age bias is crucial. Here are seven resume tips tailored to older job seekers to help you stand out in the competitive job market:
          </p>
        </div>
      </div>

      <div className="lg:px-20 mt-10 ">
        {arr1.map((item,index)=>(
          <div key={index} className="leading-relaxed mt-6">
            <h3 className="services-h text-primary opacity-80">{item.heading}</h3>
            <p className="services-p mt-4">{item.subheading}</p>
          </div>
        ))}
      </div>


      <div className="lg:px-20 mt-10">
        <p className="services-p mt-2">
        In conclusion, age should not be a barrier to securing your desired job. By strategically tailoring your resume to emphasize your relevant experience, accomplishments, and modern skills, you can present yourself as a competitive candidate. Remember that your unique combination of experience and wisdom is a valuable asset that many employers seek. Approach your resume with confidence, and you'll increase your chances of landing the right opportunity.
        </p>
      </div>


    </section>
  );
};

export default Blog3;
