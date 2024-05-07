"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, Navigation } from "swiper/modules";

const Hero = () => {
  return (
    <div className="pt-16 lg:pt-26 min-h-[100vh] w-full flex flex-col items-center">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        className="w-full"
      >
        <SwiperSlide className=" min-h-[40vh] lg:min-h-[90vh] w-full bg-cover bg-[url(../assets/home1.jpg)]">
          <div className="p-6 xl:px-32 flex flex-col gap-1 mt-12 lg:mt-0  justify-center md:items-center lg:items-start lg:min-h-[90vh] lg:justify-center">
            <div className="text-sm xl:text-lg text-white">
              THE JOY OF BEING A LANDLORD
            </div>
            <div className="font-bold text-[24px] xl:text-[48px] text-white">
              Find Your New Home
            </div>
            <button className="bg-primary text-white text-[12px] w-fit px-6 py-4 my-4">
              Learn More
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" min-h-[40vh] lg:min-h-[90vh] w-full bg-cover bg-[url(../assets/val.jpg)]">
          <div className=" p-6 xl:px-32 flex flex-col gap-1 mt-12 lg:mt-0 justify-center md:items-center lg:items-start lg:min-h-[90vh] lg:justify-center ">
            <div className="text-sm xl:text-lg text-white">Already Have A Property?</div>
            <div className="font-bold text-[24px] xl:text-[48px] max-w-[500px] leading-none text-white">
              GET A PROPERTY VALUATION !
            </div>
            <button className="bg-primary text-white text-[12px] w-fit px-6 py-4 my-4">
              Learn More
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="propsearch rounded-sm bg-white w-[90%] flex flex-col items-center lg:absolute z-20 lg:max-w-[360px] lg:rounded-2xl -bottom-28 right-20 xl:right-40 ">
        <div className="font-bold text-[18px] p-4">Search for Properties</div>
        <form className="flex flex-col w-full p-4 gap-4">
          <select>
            <option value={1}>Choose Locations</option>
          </select>
          <select>
            <option value={1}>Property Type</option>
          </select>
          <select>
            <option value={1}>Bedrooms</option>
          </select>
          <select>
            <option value={1}>Buy</option>
          </select>
          <select>
            <option value={1}>Buy</option>
          </select>
          <select>
            <option value={1}>Buy</option>
          </select>


          <div className="w-full flex items-center justify-center">
            <button
              type="submit"
              className="bg-primary w-fit px-8 py-4 text-sm text-white"
            >
              Search Catalog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
