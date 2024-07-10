"use client";

import React, { useEffect, useState } from "react";
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

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  useEffect(() => {
    const handleResize = () =>
      dispatch(setIsSmallScreen(window.innerWidth < 1024));
    window.innerWidth < 1024
      ? window.localStorage.setItem("isSmallScreen", JSON.stringify(true))
      : window.localStorage.setItem("isSmallScreen", JSON.stringify(false));
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  const handleMenu = (element: string) => {
    dispatch(setActiveMenu(element));
    router.push(`/${element}`);
  };

  const menuItems = [
    {
      id: 1,
      title: "HOME",
      active: activeMenu === ("/" || "" || "home"),
      onclick: () => handleMenu("/"),
    },
    {
      id: 2,
      title: "PROPERTIES",
      active: activeMenu === "properties",
      onclick: () => handleMenu("properties"),
    },
    {
      id: 3,
      title: "SERVICES",
      active: activeMenu === ("services" || "PAVal"),
      onclick: () => handleMenu("services"),
      sublinks: [
        {
          id: 1,
          title: "PROPERTY/ASSET VALUATION",
          onclick: () => handleMenu("services/property-valuation"),
        },
        {
          id: 2,
          title: "PROPERTY AGENCY",
          onclick: () => handleMenu("services/property-agency"),
        },
        {
          id: 3,
          title: "PROPERTY/FACILITY MANAGEMENT",
          onclick: () => handleMenu("services/facility-management"),
        },
        {
          id: 4,
          title: "PROJECT MANAGEMENT",
          onclick: () => handleMenu("services/project-management"),
        },
        {
          id: 5,
          title: "GENERAL REAL ESTATE CONSULTANCY",
          onclick: () => handleMenu("services/consultancy"),
        },
        {
          id: 6,
          title: "Feasibility and Viability Studies",
          onclick: () => handleMenu("services/feasibility-studies"),
        },
      ],
    },
    {
      id: 4,
      title: "ABOUT US",
      active: activeMenu === "aboutus",
      onclick: () => handleMenu("aboutus"),
      sublinks: [
        {
          id: 1,
          title: "CORPORATE PROFILE",
          onclick: () => handleMenu("aboutus"),
        },
        { id: 2, title: "OUR TEAM", onclick: () => handleMenu("ourteam") },
        { id: 3, title: "OUR VISION", onclick: () => handleMenu("ourvision") },
      ],
    },
    {
      id: 5,
      title: "CONTACT US",
      active: activeMenu === "contactus",
      onclick: () => handleMenu("contactus"),
    },
  ];

  let screenLocal;

  useEffect(() => {
    screenLocal = window.localStorage.getItem("isSmallScreen");
  }, []);

  return (
    <>
      {isSmallScreen ? (
        <div className=" transition-all duration-1000 ease-in-out">
          <div className=" fixed z-50 bg-white w-full flex justify-between h-16 px-4">
            <div
              onClick={() => router.push("/")}
              className="cursor-pointer flex items-center justify-center"
            >
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
                  className={`cursor-pointer transition-transform ease-in-out duration-500 origin-top ${
                    item.active
                      ? "text-primary border-primary border-t-1 border-b-1"
                      : ""
                  } hover:text-secondary`}
                >
                  <div
                    onClick={() => {
                      item.onclick, toggleDropdown(item.title);
                    }}
                  >
                    {item.title}
                  </div>
                  {item.sublinks && activeDropdown === item.title && (
                    <ul className="transition-transform ease-in-out duration-500 origin-top w-max flex flex-col z-50 rounded-sm">
                      {item.sublinks.map((sublink, j) => (
                        <li key={j} className="text-black text-xs p-2 border-b">
                          {sublink.title}
                        </li>
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
            <div
              onClick={() => router.push("/")}
              className=" cursor-pointer flex items-center justify-center"
            >
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
                  className={`relative cursor-pointer ${
                    item.active ? "text-primary cusShadow" : ""
                  } hover:text-secondary`}
                  onMouseEnter={() => toggleDropdown(item.title)}
                  onMouseLeave={() => toggleDropdown(item.title)}
                >
                  <div onClick={item.onclick}>{item.title}</div>
                  {item.sublinks && activeDropdown === item.title && (
                    <ul className="navdropdown absolute  bg-[#f9f9ff] w-max flex flex-col rounded-sm">
                      {item.sublinks.map((sublink, j) => (
                        <li
                          key={j}
                          onClick={sublink.onclick}
                          className="p-3 text-black hover:text-white hover:bg-secondary"
                        >
                          {sublink.title}
                        </li>
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
