import React from "react";
import { TiTick } from "react-icons/ti";
const Blog5 = () => {
  
  const arr1 = [
    {
      heading:"1. Embrace Your Experience",
      subheading:"One of your greatest assets as a seasoned professional is your wealth of experience. Highlight it proudly on your resume and in interviews. Emphasize the skills and knowledge you've acquired throughout your career, as they can make you a valuable asset to potential employers.",
    },
    {
      heading:"2. Update Your Skills",
      subheading:"While your experience is invaluable, it's essential to stay current in your field. Consider taking courses or workshops to update your skills, especially in areas that have evolved significantly since you last job hunted. This commitment to lifelong learning demonstrates your adaptability.",
    },
    {
      heading:"3. Networking Matters",
      subheading:"Networking remains a cornerstone of successful job searches. Leverage your extensive network of professional contacts, both old and new, to uncover hidden job opportunities. Attend industry events, join professional organizations, and use social media platforms like LinkedIn to expand your network further.",
    },
    {
      heading:"4. Craft a Modern Resume",
      subheading:"Your resume should be tailored to the digital age. Ensure it's visually appealing, concise, and emphasizes your relevant accomplishments. Be mindful of any potential age bias by focusing on the last 10-15 years of your work history and omitting irrelevant details.",
    },
    {
      heading:"5. Leverage Online Resources",
      subheading:"Tap into the wealth of online job search resources available today. Job search websites, career forums, and social media platforms can help you discover job openings, research companies, and connect with hiring managers.",
    },
    {
      heading:"6. Consider Part-Time or Contract Work",
      subheading:"Part-time or contract work can be an excellent way to ease back into the job market or explore new industries. Many companies value experienced professionals who can contribute on a flexible basis.",
    },
    {
      heading:"7. Prepare for Interviews",
      subheading:"Brush up on your interview skills by practicing with a friend or coach. Be ready to discuss your achievements, problem-solving abilities, and your enthusiasm for the role. Showcase your adaptability and willingness to collaborate with colleagues of all ages.",
    },
    {
      heading:"8. Address Age-Related Concerns",
      subheading:"During interviews, address age-related concerns proactively. Emphasize your ability to adapt to changing technologies and work collaboratively with colleagues of all ages. Showcase your flexibility and openness to new challenges.",
    },
    {
      heading:"9. Stay Positive and Persistent",
      subheading:"Job searching can be a lengthy process, but maintaining a positive attitude and persistence are key. Celebrate small victories along the way, and remember that each rejection brings you closer to the right opportunity. Stay open to different career paths and remain confident in your abilities.",
    },
  ]


  

  return (
    <section className="paddings mb-10">
      <div className="flex flex-col lg:flex-row lg:p-20 gap-16">
        <div className="lg:w-1/2">
          <img src="b6.jpg" alt="" />
        </div>
        <div className="lg:w-1/2 flex flex-col items-center justify-center">
          <h3 className="services-h">
          9 Job Search Tips for Professionals Over 50          </h3>
          <p className="services-p mt-2">
          Job searching can be a challenging endeavor at any age, but for professionals over 50, it often comes with unique considerations and opportunities. Whether you're looking to make a career change, reenter the workforce, or simply explore new opportunities, these nine job search tips are tailored to help professionals over 50 navigate this exciting yet sometimes daunting journey:
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
        In conclusion, professionals over 50 bring a wealth of experience, expertise, and maturity to the job market. By embracing your strengths, staying current, and utilizing these job search tips, you can position yourself for success in finding the next exciting chapter in your career. Your unique skills and perspective are assets that many employers value, so embark on your job search journey with confidence and enthusiasm.
        </p>
      </div>


    </section>
  );
};

export default Blog5;
