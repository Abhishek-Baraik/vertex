import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import "./FaqSection.css";


const FaqSection = ({faqs}) => {
 
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="lg:px-[15rem] accordion flex flex-col  gap-4 sm:gap-6 mb-10 mt-10 paddings">
      <div>
        <h2 className="text-[26px] sm:text-[48px] opacity-80 font-bold text-center">FREQUENTLY ASKED QUESTIONS</h2>
      </div>
      {faqs.map((faq, index) => (
        <div
          className="accordion-item bg-white border-[1px] border-zinc-300 px-4 py-1 sm:px-6 sm:py-2 shadow-md rounded-xl cursor-pointer"
          key={index}
          onClick={() => toggleAccordion(index)}
        >
          <div
            className="accordion-title flex justify-between items-center"
            onClick={() => toggleAccordion(index)}
          >
            <h3 className="text-[16px] sm:text-[20px] font-medium">{faq.question}</h3>
            <p
              className={`arrow text-[#FFFFFF] ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <RxCross2 className="text-primary scale-125 rotate-45" />
            </p>
          </div>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                className="accordion-content mt-4"
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
              >
                <p className="text-[16px] font-normal opacity-70 pl-5">{faq.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </section>
  );
};

export default FaqSection;