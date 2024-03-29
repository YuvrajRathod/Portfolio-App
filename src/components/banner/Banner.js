import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiGithub, SiNodedotjs } from "react-icons/si";
import { yuviPhoto } from "../../assets/index";
const Banner = () => {
    const [text] = useTypewriter({
        words: ["Programmer.", "Full Stack Developer.","Problem Solver.","Content-Writer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
      });

  return (
    <section id='home' className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center font-titleFont  border-b-[1px] border-b-gray-600 ">
      
      <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-bold tracking-wide font-titleFont text-gray-400 ">Welcome To My World</h4>
        <h1 className="text-6xl font-bold text-white ">
          Hi, I'm <span className="text-designColor capitalize">Yuvraj Rathod</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          A <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I'm Currently Pursuing My Masters in Computer Applications at NIT Trichy. I have Done My Graduation in Computer Science from DAVV University Indore.
          I use animation like a magic wand, making things smoother and guiding you through each step. It's not just for show, but to make everything work seamlessly.
        </p>
      </div>
     {/* Media */}
     <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 font-bold">
            FIND ME ON
          </h2>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/Yuvraj2603" target="_blank" rel="noopener noreferrer" class="facebookIcon">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
            <a href="https://www.instagram.com/yuvraj_rathod26/" target="_blank" rel="noopener noreferrer" class="instagramIcon">
              <span className="bannerIcon">
                <FaInstagram />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/yuvraj-rathod-380798183/" target="_blank" rel="noopener noreferrer" class="linkedinIcon">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 font-bold">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <a href="https://react.dev/learn" target="_blank" rel="noopener noreferrer" class="ReactIcon">
              <span className="bannerIcon">
                <FaReact />
              </span>
            </a>
            <a href="https://nodejs.dev/en/learn/" target="_blank" rel="noopener noreferrer" class="NodedotjsIcon">
              <span className="bannerIcon">
                <SiNodedotjs />
              </span>
            </a>
            <a href="https://tailwindcss.com/docs/installation" target="_blank" rel="noopener noreferrer" class="TailwindcssIcon">
              <span className="bannerIcon">
                <SiTailwindcss />
              </span>
            </a>
            <a href="https://github.com/YuvrajRathod" target="_blank" rel="noopener noreferrer" class="gitHubIcon">
              <span className="bannerIcon">
                <SiGithub />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="w-full lgl:w-1/2 flex justify-center items-center reletive">
      <img
        className="absolute  lgl:top-[100px] w-[300px] h-[300px] lgl:w-[420px] lgl:h-[530px] z-[1] object-cover object-center "
        src={yuviPhoto}
        alt="bannerImg"
      />
      <div className="  w-[300px] h-[300px] lgl:w-[400px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center drop-shadow-sm "></div>
    </div>

    </section>
  )
}
export default Banner
