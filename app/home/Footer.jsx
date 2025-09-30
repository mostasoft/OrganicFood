import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <a href="#" className="text-2xl font-bold text-white">
          <span className="text-green-500">Or</span>ganic<span className="text-green-500">Food</span>
        </a>
          <ul className="space-y-2 text-sm">
            <li>About <span className='text-green-500'>Us</span></li>
            <li>Caree<span className='text-green-500'>rs</span></li>
            <li>Pre<span className='text-green-500'>ss</span></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Sup<span className='text-green-500'>port</span></h4>
          <ul className="space-y-2 text-sm">
            <li>Help <span className='text-green-500'>Center</span></li>
            <li>Contact <span className='text-green-500'>Us</span></li>
            <li>FA<span className='text-green-500'>Qs</span></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Leg<span className='text-green-500'>al</span></h4>
          <ul className="space-y-2 text-sm">
            <li>Privacy <span className='text-green-500'>Policy</span></li>
            <li>Terms of Service</li>
            <li>Cookie Policy</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Follow <span className='text-green-500'>Us</span></h4>
          <ul className="space-y-2 text-sm">
            <li className='flex items-center gap-1'><a className='text-green-300' href=""><FaFacebook  /></a>Facebook</li>
            <li className='flex items-center gap-1'><a  className='text-green-300'href=""><FaInstagram  /></a>Instagram</li>
            <li className='flex items-center gap-1'><a className='text-green-300' href=""><FaTwitter  /></a>Twitter</li>
            <li className='flex items-center gap-1'><a  className='text-green-300'href=""><FaLinkedin   /></a>LinkedIn</li>
            
          </ul>
        </div>
      </div>

      <div className="text-center text-sm mt-10 text-green-200">
        © {new Date().getFullYear()} Organic Co. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
