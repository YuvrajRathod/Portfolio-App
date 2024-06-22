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
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2023</p>
          <h2 className="text-4xl font-bold">Certifications</h2>
        </div>
        <div className="mt-14 w-[85vw] h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Problem Solving in C++"
            subTitle="Programmer (2021 - 2023)"
            result="INDIA"
            des=" This is to certify that YUVRAJ RATHOD has successfully completed the Oops in C++ guided path 
            on Coding Ninjas Studio Modules Covered - Introduction to OOPs, Classes, objects and access modifiers, 
            Constructors and destructors etc. "
          />
          <ResumeCard
            title="Data Structure and Algorithm"
            subTitle="CodeHelp (2022 - 2023)"
            result="INDIA"
            des="CERTIFICATE OF COMPLETION is awarded to Yuvraj Rathod Having completed the 5-month long 
            comprehensive course of Data Structures & Algorithms Master Course [Supreme Batch]in 2023"
          />
          <ResumeCard
            title="Full Stack Developer Intern"
            subTitle="SONNENTECHS Intern - (2022 - 2023)"
            result="INDIA"
            des="Completed a Full Stack Development internship at SONNENTECHS from April to June 2023. 
            Led successful projects using HTML, CSS, JavaScript, NodeJS, and MongoDB and making the user 
            experience better by connecting the front -end and back-end."
          />
        </div>
      </div>
    
    </motion.div>
  );
};

export default Experience;
