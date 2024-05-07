"use client";

import React, { useState } from "react";
import logo from "../assets/voclogo.png";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";

import type { RootState } from "@/Redux/store";
import { UseDispatch, useSelector } from "react-redux";
import { setIsSmallScreen } from "@/Redux/features/screenSizeSlice";
import Link from "next/link";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const isSmallScreen = useSelector(
    (state: RootState) => state.data.screenSize.isSmallScreen
  );

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isSmallScreen ? (
        <div className=" transition-all duration-1000 ease-in-out">
          <div className=" fixed z-50 bg-white w-full flex justify-between h-16 px-4">
            <div className="flex items-center justify-center">
              <Image src={logo} alt="logo" className="h-full w-fit" />
              <div className="text-primary leading-none">
                <div className="font-bold text-xl ">Victor Okpeva & Co.</div>
                <div className=" font-semibold text-[10px]">
                  Chartered Estate Surveyors & Valuers
                </div>
              </div>
            </div>

            <div
              className="flex items-center text-3xl text-primary "
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <MdClose /> : <GiHamburgerMenu />}
            </div>
            <div
              className={` absolute top-0 left-0 p-4 w-full  ${
                isOpen
                  ? " w-full z-40 bg-white flex flex-col mt-14 text-sm md:text-base font-semibold gap-4"
                  : " h-0 hidden "
              } `}
            >
              <Link href="/" className="text-primary">
                HOME
              </Link>
              <Link href="/">PROPERTIES</Link>
              <Link href="/">SERVICES</Link>
              <Link href="/">VALUATION AUTHENTICATION</Link>
              <Link href="/">ABOUT US</Link>
              <Link href="/">CONTACT US</Link>
              <div className="text-sm xl:text-lg">
                <IoIosSearch />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className=" fixed z-50 bg-white w-full flex justify-between h-16 px-8 xl:px-36 py-12">
            <div className="flex items-center justify-center">
              <div className="max-h-[100%] flex items-center">
                <Image src={logo} alt="logo" className="h-28 w-28" />
              </div>
              <div className="text-primary leading-none">
                <div className="font-bold text-xl xl:text-2xl ">
                  Victor Okpeva & Co.
                </div>
                <div className=" font-semibold text-[10px] xl:text-[14px] ">
                  Chartered Estate Surveyors & Valuers
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center text-xs xl:text-[16px] xl:font-semibold font-bold gap-4">
              <Link href="/" className="text-primary">
                HOME
              </Link>
              <Link href="/">PROPERTIES</Link>
              <Link href="/">SERVICES</Link>
              <Link href="/">ABOUT US</Link>
              {/* <Link href='/'>VALUATION AUTHENTICATION</Link> */}
              <Link href="/">CONTACT US</Link>
              <div className="text-sm xl:text-lg">
                <IoIosSearch />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
