import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-600"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="MyChat App"
          des=" Create a Real-Time Chat App using ReactJS, ExpressJS, Node.js, 
              Socket.IO, and MongoDB. Features include User Authentication, 
              Real Time Messaging, File Sharing, Online Status, Message History, 
              and Search Functionality for secure and interactive communication."
          src={projectOne}
        />
        <ProjectsCard
          title="Portfolio-WebApp"
          des=" I designed and developed a dynamic, responsive portfolio web app using 
              HTML, CSS, ReactJS, and Git. It serves as a digital hub to showcase my 
              skills, projects, and achievements, providing potential employers and 
              collaborators with an interactive overview of my professional journey."
          src={projectTwo}
        />
        <ProjectsCard
          title="TeamMetricks"
          des=" I developed an application using PHP, HTML, CSS, and JavaScript with 
              separate admin and user sections. Admins manage projects and employees, 
              while users submit work and leave requests. The system prioritizes 
              user-friendly design for easy navigation and operation."
          src={projectThree}
        />
     
      </div>
    </section>
  );
}

export default Projects;
