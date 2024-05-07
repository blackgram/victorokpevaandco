import React from "react";

import Image from "next/image";
import prop1 from "../assets/prop1.jpg";
import prop3 from "../assets/prop3.jpg";
import prop2 from "../assets/prop2.jpg";
import banner from "../assets/banner.png";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { IoCarSportOutline } from "react-icons/io5";
import { MdPool } from "react-icons/md";

const FeaturedProps = () => {
  return (
    <div className="py-12 px-6 justify-center items-center">
      <div className="w-full text-center">
        <div className="text-[25px] font-bold ">Featured Properties</div>
        <div className="text-sm text-ash ">
          Here&apos;s our top prime properties in the nigerian market
        </div>
      </div>
      <div className="pt-12 class flex flex-col lg:flex-row justify-center items-center gap-8">
        <div className="propertyCard w-full max-w-[360px] rounded-md cusShadow  ">
          <div className="w-full rounded-lg">
            {" "}
            <Image src={prop1} alt="" className="rounded-lg max-h-52" />{" "}
          </div>
          <div className="p-4 flex flex-col gap-4 relative">
            <div className="text-lg font-bold">5 BEDROOM DETACHED DUPLEX</div>

            <div className="w-full h-[5px] opacity-30 rounded-full bg-primary " />

            <div className="w-full flex flex-wrap gap-2 mb-5 text-xs">
              <div className="flex gap-2 items-center px-4 py-2 bg-[#f9f9ff] w-fit rounded-full ">
                <IoBedOutline /> <span>5 Bedrooms</span>
              </div>
              <div className="flex gap-2 items-center px-4 py-2 bg-[#f9f9ff] w-fit rounded-full ">
                <LuBath /> <span>5 Bathrooms</span>
              </div>
              <div className="flex gap-2 items-center px-4 py-2 bg-[#f9f9ff] w-fit rounded-full ">
                <IoCarSportOutline />
                <span>Parking 4</span>
              </div>
              {/* <div className="flex gap-2 items-center px-4 py-2 bg-[#f9f9ff] w-fit rounded-full ">
                <MdPool />
                <span>Swimming Pool</span>
              </div> */}
            </div>
            <div className="w-full flex justify-between items-center">
              <div className="text-lg font-bold">
                <span>Price: </span> <span className="text-primary">$3.5M</span>
              </div>
              <div className="absolute bottom-0 -right-[5px]">
                <Image
                  src={banner}
                  alt=""
                  width={100}
                  height={100}
                  className="w-fit"
                />
              </div>
            </div>
          </div>
        </div>
        {/* end of property card */}

        <div className="propertyCard w-full max-w-[360px] rounded-md cusShadow ">
          <div className="w-full rounded-lg">
            {" "}
            <Image src={prop2} alt="" className="rounded-lg max-h-52" />{" "}
          </div>
          <div className="p-4 flex flex-col gap-4 relative">
            <div className="text-lg font-bold">6 BEDROOM MANSIONETTE</div>

            <div className="w-full h-[5px] opacity-30 rounded-full bg-primary " />

            <div className="w-full flex flex-wrap gap-2 mb-5 text-xs">
              <div className="flex gap-2 items-center px-4 py-2 bg-[#f9f9ff] w-fit rounded-full ">
                <IoBedOutline /> <span>6 Bedrooms</span>
              </div>
              <div className="flex gap-2 items-center px-4 py-2 bg-[#f9f9ff] w-fit rounded-full ">
                <LuBath /> <span>6 Bathrooms</span>
              </div>
              <div className="flex gap-2 items-center px-4 py-2 bg-[#f9f9ff] w-fit rounded-full ">
                <IoCarSportOutline />
                <span>Parking 6</span>
              </div>
              <div className="flex gap-2 items-center px-4 py-2 bg-[#f9f9ff] w-fit rounded-full ">
                <MdPool />
                <span>Swimming Pool</span>
              </div>
            </div>
            <div className="w-full flex justify-between items-center">
              <div className="text-lg font-bold">
                <span>Price: </span> <span className="text-primary">$3.5M</span>
              </div>
              <div className="absolute bottom-2 -right-[5px]">
                <Image
                  src={banner}
                  alt=""
                  width={100}
                  height={100}
                  className="w-fit"
                />
              </div>
            </div>
          </div>
        </div>
        {/* end of property card */}

        <div className="propertyCard w-full max-w-[360px] rounded-md cusShadow ">
          <div className="w-full rounded-lg">
            {" "}
            <Image src={prop3} alt="" className="rounded-lg max-h-52" />{" "}
          </div>
          <div className="p-4 flex flex-col gap-4 relative">
            <div className="text-lg font-bold">5 BEDROOM DETACHED DUPLEX</div>

            <div className="w-full h-[5px] opacity-30 rounded-full bg-primary " />

            <div className="w-full flex flex-wrap gap-2 mb-5 text-xs">
              <div className="flex gap-2 items-center px-4 py-2 bg-[#f9f9ff] w-fit rounded-full ">
                <IoBedOutline /> <span>5 Bedrooms</span>
              </div>
              <div className="flex gap-2 items-center px-4 py-2 bg-[#f9f9ff] w-fit rounded-full ">
                <LuBath /> <span>5 Bathrooms</span>
              </div>
              <div className="flex gap-2 items-center px-4 py-2 bg-[#f9f9ff] w-fit rounded-full ">
                <IoCarSportOutline />
                <span>Parking 4</span>
              </div>
              <div className="flex gap-2 items-center px-4 py-2 bg-[#f9f9ff] w-fit rounded-full ">
                <MdPool />
                <span>Swimming Pool</span>
              </div>
            </div>
            <div className="w-full flex justify-between items-center">
              <div className="text-lg font-bold">
                <span>Price: </span> <span className="text-primary">$3.5M</span>
              </div>
              <div className="absolute bottom-0 -right-[5px]">
                <Image
                  src={banner}
                  alt=""
                  width={100}
                  height={100}
                  className="w-fit"
                />
              </div>
            </div>
          </div>
        </div>
        {/* end of property card */}
      </div>
    </div>
  );
};

export default FeaturedProps;
