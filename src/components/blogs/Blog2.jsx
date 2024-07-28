import React from "react";
import { TiTick } from "react-icons/ti";
const Blog2 = () => {
  
  const arr1 = [
    {
      heading:"1. Update Your Skills",
      subheading:"Staying current in your field is essential. Invest in continuous learning and skill development to demonstrate your adaptability and relevance. Attend workshops, take online courses, and acquire certifications that align with your career goals. By showcasing your up-to-date skills, you challenge stereotypes associated with older job seekers.",
    },
    {
      heading:"2. Revamp Your Resume",
      subheading:"Craft a modern and focused resume that highlights your recent relevant experience. Emphasize your accomplishments, skills, and contributions. Remove outdated details, such as positions held many years ago, and replace them with recent achievements that demonstrate your value to prospective employers.",
    },
    {
      heading:"3. Embrace Technology",
      subheading:"Incorporate technology into your job search process. Create a polished LinkedIn profile that showcases your professional journey and connections. Stay active on professional social networks, join industry-specific groups, and engage in online discussions. Demonstrating your tech-savviness can dispel misconceptions about older workers.",
    },
    {
      heading:"4. Network Strategically",
      subheading:"Networking is a powerful tool in your job search. Leverage your existing professional connections and expand your network by attending industry events and conferences. Engage in informational interviews to learn about potential employers and industries while building valuable relationships. The broader your network, the more opportunities you can uncover.",
    },
    {
      heading:"5. Address Age-Related Concerns",
      subheading:"During interviews, address age-related concerns proactively. Emphasize your ability to adapt to new technologies and work collaboratively with colleagues of all age groups. Showcase your problem-solving skills, work ethic, and enthusiasm for the role. Be confident in your capabilities and communicate them effectively.",
    },
    {
      heading:"6. Explore Age-Friendly Employers",
      subheading:"Research companies known for valuing a diverse and multigenerational workforce. These organizations are often more open to hiring candidates of all ages and can provide a supportive work environment. Look for companies with inclusive hiring practices and a commitment to diversity.",
    },
    {
      heading:"7. Focus on Cultural Fit",
      subheading:"Highlight your compatibility with the organization's culture during interviews. Emphasize your adaptability, willingness to collaborate, and ability to contribute positively to the workplace. Demonstrating that you align with the company's values and mission can make you a more appealing candidate.",
    },
    {
      heading:"8. Stay Positive and Persistent",
      subheading:"Job searching can be challenging, but maintaining a positive attitude and persistence are crucial. Don't be discouraged by setbacks or rejections. Each experience brings you closer to the right opportunity. Believe in your abilities and stay resilient in your pursuit of meaningful employment.",
    },
    {
      heading:"9. Consider Alternative Work Arrangements",
      subheading:"Explore flexible work options, such as part-time, freelance, or consulting roles. Many employers value the expertise and experience that older professionals bring and may be open to alternative work arrangements that accommodate your preferences.",
    },
  ]


  

  return (
    <section className="paddings mb-10">
      <div className="flex flex-col lg:flex-row lg:p-20 gap-16">
        <div className="lg:w-1/2">
          <img src="b2.jpg" alt="" />
        </div>
        <div className="lg:w-1/2 flex flex-col items-center justify-center">
          <h3 className="services-h">
          Job-Search Tips to Overcome Age Discrimination
          </h3>
          <p className="services-p mt-2">
          Age discrimination is a concern that many job seekers, especially those over 50, may encounter during their job search journey. However, with the right strategies and mindset, you can navigate this challenge effectively and secure the job opportunities you deserve. In this article, we'll explore actionable tips to help you overcome age discrimination in your job search.
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
        In conclusion, age discrimination should not deter you from pursuing your career goals. By proactively addressing age-related concerns, staying current in your field, and leveraging your skills and network, you can overcome biases and secure rewarding job opportunities. Remember that your experience and wisdom are valuable assets that many employers seek. Approach your job search with confidence, and you'll be well on your way to achieving your professional aspirations.
        </p>
      </div>


    </section>
  );
};

export default Blog2;
