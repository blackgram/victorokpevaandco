"use client";

import { setIsSmallScreen } from "@/Redux/features/screenSizeSlice";
import { AppDispatch } from "@/Redux/store";
import FeaturedProps from "@/components/FeaturedProps";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Welcome from "@/components/Welcome";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Footer from "../components/Footer";

const Page = () => {
  const dispatch = useDispatch<AppDispatch>();

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

  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Welcome />
      <FeaturedProps />
      <Footer />
    </div>
  );
};

export default Page;
