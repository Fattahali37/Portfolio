import React from "react";
import logo from "../assets/Fa.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  const handleRedirect = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const navigate=useNavigate()

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img onClick={()=>navigate('/')} className="mx-2 w-10 cursor-pointer" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {/* LinkedIn Icon */}
        <FaLinkedin
          onClick={() => handleRedirect("https://www.linkedin.com/in/fattah-ali-38a2a81b2/")}
          className="cursor-pointer hover:text-blue-600 transition"
          aria-label="LinkedIn"
        />

        {/* GitHub Icon */}
        <FaGithub
          onClick={() => handleRedirect("https://github.com/Fattahali37")}
          className="cursor-pointer hover:text-gray-700 transition"
          aria-label="GitHub"
        />
      </div>
    </nav>
  );
};

export default Navbar;
