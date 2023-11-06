import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">20** - 20**</p>
          <h2 className="text-4xl font-bold">Certifications</h2>
        </div>
        <div className="mt-14 w-[85vw] h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Problem Solving & Software Engineering"
            subTitle="Programmer (2023 - Present)"
            result="INDIA"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. "
          />
          <ResumeCard
            title="Full Stack Developer & UI / Designer"
            subTitle="CodeHelp Developer Team - (2022 - 2023)"
            result="INDIA"
            des="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="CodeHelp (2021 - 2022)"
            result="INDIA"
            des="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          />
        </div>
      </div>
    
    </motion.div>
  );
};

export default Experience;