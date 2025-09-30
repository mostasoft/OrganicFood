"use client"
import Link from "next/link";
import React, { useState } from "react";
import { BiSolidContact } from "react-icons/bi";
import { CgMail } from "react-icons/cg";
import { FaBars, FaFacebook, FaHome, FaInstagram, FaLinkedin, FaPhone, FaShoppingCart, FaTimes, FaTwitter } from "react-icons/fa";
import { GiNewspaper } from "react-icons/gi";
import { IoStar } from "react-icons/io5";
import { MdHealthAndSafety } from "react-icons/md";

const links = [
  { name: "Home",  icon:<FaHome /> ,  href: "/" },
  { name: "Healthy Eatings", icon: <MdHealthAndSafety />,  href: "/About" },
  { name: "News",  icon: <GiNewspaper />, href: "/Experience" },
  { name: "Features",  icon:<IoStar /> , href: "Portfolio" },
  { name: "Shop",  icon: <FaShoppingCart /> , href: "/services" },
  { name: "Contact", icon: <BiSolidContact /> ,  href: "/contact" },
];

const Header = () => {
   const [isOpen, setIsOpen] = useState(false);

  return (

    
    <nav className="w-full fixed top-0 left-0 bg-white shadow z-50" >
      <div className="bg-green-500 w-full flex px-5 justify-between h-8 items-center">
        <div className="flex gap-4 items-center">
          <a href=""  className=" flex items-center text-sm text-white"><FaPhone/>+8801305009243</a>
          <a className="flex items-center text-sm text-white" href="" ><CgMail size={21}/>OrganicFood@gamail.com</a>
          </div>
        <div className="flex gap-4 text-sm text-white">
          <a href=""><FaFacebook /></a>
          <a  href=""><FaInstagram/></a>
          <a href=""><FaTwitter  /></a>
          <a href=""><FaLinkedin/></a>
        </div>
      </div>
      <div className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-20">
        <a href="#" className="text-2xl font-bold text-gray-900">
          <span className="text-green-500">Or</span>ganic<span className="text-green-500">Food</span>
        </a>
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          {links.map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                className="relative inline-block group px-1 hover:text-green-600 transition-colors"
              >
               <div className="flex items-center gap-0.5 hover:translate-x-2 transition-all duration-200 justify-center">
                <span className="text-green-500 ">
                  {link.icon}</span> {link.name}
                <span className="absolute left-0 -bottom-0.5 h-[4px] w-0 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
               </div>
              </a>
            </li>
          ))}
        </ul>
          <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-gray-700"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
            {isOpen && (
        <ul className="md:hidden bg-white shadow-lg flex flex-col space-y-4 py-6 px-6 font-medium text-gray-700">
          {links.map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                className="hover:text-red-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>

  );
  
  
};


export default Header;
