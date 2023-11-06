import React from 'react'
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">YUVRAJ RATHOD</h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        I'm super passionate about the world of technology and innovation! 
        💡 With a solid foundation in problem-solving, data structures, and 
        algorithms, I'm all about tackling complex challenges head-on. Whether 
        it's making code run faster or designing strong software solutions, 
        I'm in my element when problem-solving! 💻🔧
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 9926587480</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">yuvrajsanjayrathod@gmail.com</span>
        </p>
      </div>
    </div>
  );
}

export default ContactLeft