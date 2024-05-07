import React from "react";

import { FaArrowRight, FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-dark px-6 py-12 text-sm text-ash flex flex-col">
      <div className="flex flex-col md:flex-row md:flex-wrap items-start justify-center md:justify-normal lg:justify-evenly md:gap-0 gap-8 text-center md:text-left">
        <div className="md:w-[50%] lg:w-auto md:p-8 lg:p-2 lg:max-w-[300px]">
          <div className="text-white text-[16px] font-bold mb-4">
            Quick Links
          </div>
          <div className="flex flex-col gap-2">
            <div>Mail Login</div>
            <div>About Us</div>
            <div>Properties</div>
            <div>Management Team</div>
            <div>Services</div>
          </div>
        </div>
        <div className="md:w-[50%] lg:w-auto md:p-8 lg:p-2 lg:max-w-[300px]">
          <div className="text-white text-[16px] font-bold mb-4">
            Newsletter
          </div>
          <div>
            Subscribe to get weekly updates on new property listings, policy
            changes and so much more
          </div>
          <div className="flex my-2 ">
            <input
              type="text"
              placeholder="Email Address"
              className="bg-dark p-2 w-full border-t border-b border-l border-ash"
            />
            <button type="submit" className="bg-primary text-white p-3 border border-primary"><FaArrowRight /></button>
          </div>
        </div>
        <div className="md:w-[50%] lg:w-auto md:p-8 lg:p-2 lg:max-w-[300px]">
          <div className="text-white text-[16px] font-bold mb-4">
            Contact Us
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <Link href="mailto: info@victorokpevaandco.com">
                info@victorokpevaandco.com
              </Link>
            </div>
            <div>
              <Link href="mailto: victorokpevandco@gmail.com">
                victorokpevandco@gmail.com
              </Link>
            </div>
            <div>
              <Link href="tel: +2348033051333">+2348033051333</Link>
            </div>
            <div>
              <Link href="tel: +2348038531393">+2348038531393</Link>
            </div>
            <div> 
              Address: First Floor, Garnet Plaza, Km. 14 Lekki-Epe Expressway,
              Igbo Efon, Lekki, Lagos State.
            </div>
          </div>
        </div>
        <div className="md:w-[50%] lg:w-auto md:p-8 lg:p-2 lg:max-w-[300px]">
          <div className="text-white text-[16px] font-bold mb-4">Follow Us</div>
          <div className="flex justify-center md:justify-start items-center gap-4  text-secondary text-xl">
            <Link href="/">
              <FaInstagram />
            </Link>
            <Link href="/">
              <FaFacebook />
            </Link>
            <Link href="/">
              <FaXTwitter />
            </Link>
          </div>
        </div>
      </div>

      <div className="p-6 text-center">
        Copyright ©2024 All rights reserved | Developed by{" "}
        <span className="text-primary">
          <Link href="/">Ajiri</Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
