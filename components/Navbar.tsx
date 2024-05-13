"use client";

import React, { useState } from "react";
import logo from "../assets/voclogo.png";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";

import type { AppDispatch, RootState } from "@/Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setIsSmallScreen } from "@/Redux/features/screenSizeSlice";
import Link from "next/link";
import { MdClose } from "react-icons/md";
import { useRouter } from "next/navigation";
import { setActiveMenu } from "@/Redux/features/activeMenuSlice";

const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const isSmallScreen = useSelector(
    (state: RootState) => state.data.screenSize.isSmallScreen
  );

  const activeMenu = useSelector(
    (state: RootState) => state.data.activeMenu.activeMenu
  );

  const [isOpen, setIsOpen] = useState(false);

  const [showDropdown, setShowDropdown] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title)
  }

  const handleMenu = (element: string) => {
    dispatch(setActiveMenu(element));
    router.push("/");
  };

  const menuItems = [
    {
      id: 1,
      title: "HOME",
      active: activeMenu === "HOME",
      onclick: () => handleMenu("HOME"),
    },
    {
      id: 2,
      title: "PROPERTIES",
      active: activeMenu === "PROPERTIES",
      onclick: () => handleMenu("PROPERTIES"),
      sublinks: [
        { id: 1, title: "FOR SALE" },
        { id: 2, title: "TO LET" },
      ],
    },
    {
      id: 3,
      title: "SERVICES",
      active: activeMenu === "SERVICES",
      onclick: () => handleMenu("SERVICES"),
      sublinks: [
        { id: 1, title: "PROPERTY/ASSET VALUATION" },
        { id: 2, title: "PROPERTY AGENCY" },
        { id: 3, title: "PROPERTY/FACILITY MANAGEMENT" },
        { id: 4, title: "PROJECT MANAGEMENT" },
        { id: 5, title: "GENERAL REAL ESTATE CONSULTANCY" },
        { id: 6, title: "VALUATION REPORT AUTHENTICATION" },
      ],
    },
    {
      id: 4,
      title: "ABOUT US",
      active: activeMenu === "ABOUT US",
      onclick: () => handleMenu("ABOUT US"),
      sublinks: [
        { id: 1, title: "CORPORATE PROFILE" },
        { id: 2, title: "OUR TEAM" },
        { id: 3, title: "OUR VISION" },
      ],
    },
    {
      id: 5,
      title: "CONTACT US",
      active: activeMenu === "CONTACT US",
      onclick: () => handleMenu("CONTACT US"),
    },
  ];

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
              {menuItems.map((item, i) => (
                <div
                key={i}
                  onClick={ () => {
                    item.onclick,
                    toggleDropdown(item.title)
                  }}
                  className={`cursor-pointer transition-transform ease-in-out duration-500 origin-top ${
                    item.active ? "text-primary border-primary border-t-1 border-b-1" : ""
                  } hover:text-secondary`}
                >
                  <div>{item.title}</div>
                  {item.sublinks && activeDropdown === item.title && (
                    <ul className="transition-transform ease-in-out duration-500 origin-top w-max flex flex-col rounded-sm">
                      {item.sublinks.map((sublink, j) => (
                        <li key={j} className='text-black text-xs p-2 border-b'>{sublink.title}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
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

            <ul className="flex justify-center items-center text-xs xl:text-[16px] xl:font-semibold font-bold gap-4">
              {menuItems.map((item, i) => (
                <li
                key={i}
                  onClick={item.onclick}
                  className={`relative cursor-pointer ${
                    item.active ? "text-primary cusShadow" : ""
                  } hover:text-secondary`}
                  onMouseEnter={() => toggleDropdown(item.title)}
                  onMouseLeave={() => toggleDropdown(item.title)}
                >
                  <div>{item.title}</div>
                  {item.sublinks && activeDropdown === item.title && (
                    <ul className="navdropdown absolute  bg-[#f9f9ff] w-max flex flex-col rounded-sm">
                      {item.sublinks.map((sublink, j) => (
                        <li key={j}>{sublink.title}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
