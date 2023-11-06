import React, { useState } from 'react'
import {Link} from 'react-scroll';
import { FiMenu } from "react-icons/fi";
import {logo} from "../../assets/index";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { navLinksdata } from '../../constants';
const Navbar = () => {
  const [showMenu, setShowMenu]=useState(false)
  return (
    <div className=' w-full h-24 flex  items-center justify-between font-titleFont border-b-[1px] border-b-gray-600'>
      <div className=' flex items-center justify-center gap-2 '>
        <img src={logo} alt="logo" className=' w-[70px] h-[65px] rounded-[50%] border-[2px] ' />
        <h1><b>&nbsp;&nbsp;Y U V I</b></h1>
      </div>
      <div>
        <ul className='md:flex items-center gap-8 lg:gap-10 hidden '>
          {
            navLinksdata.map(({ _id, title, link }) => (
                <li className="text-base w-max font-bold text-gray-400 tracking-wide cursor-pointer hover:text-designColor  duration-300 after: "key={_id}>
                  <Link activeClass="active"
                        to={link}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={2000} > {title}
                    </Link>                
                </li>
            )) // return hori hai value isiliye {} use nhi hue yaha par
          }
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl md:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide z-10">
            <div className="flex flex-col gap-8 py-2 relative ">
              <div className='flex flex-col items-center'>
                <img className="w-32 rounded-[50%] items-center" src={logo} alt="logo" />
                <br></br><br></br>
                <p className="text-sm text-gray-400 mt-4 p-2">
                  I am YUVRAJ RATHOD. I am from KHARGONE M.P. 
                  I'm Currently Pursuing My Masters in Computer Applications at NIT Trichy.
                  I have Done My Graduation in Computer Science from DAVV University Indore.
                </p>
              </div>
              <br></br>
              <ul className="flex flex-wrap gap-[50px] justify-center ">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-bold text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={2000}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <hr></hr>
              <br></br>
              <div className="flex flex-col gap-6">
                <h2 className="text-base capitalize font-titleFont my-3 text-center font-bold">
                  FIND ME ON
                </h2>
                <div className="flex flex-wrap gap-10 justify-center">
                  <a href="https://www.facebook.com/Yuvraj2603" target="_blank" rel="noopener noreferrer" class="facebookIcon">
                    <span className="bannerIcon">
                      <FaFacebookF />
                    </span>
                  </a>
                  <a href="https://www.instagram.com/yuvrajra2603/" target="_blank" rel="noopener noreferrer" class="instagramIcon">
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
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar
