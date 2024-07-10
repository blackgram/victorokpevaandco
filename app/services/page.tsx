'use client'

import React from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import PAVal from "../../assets/Assets-Valuation.jpg";
import FaMan from '../../assets/Facility-Management.jpg'
import Feasibility from '../../assets/Feasibility-and-Viability-Studies.jpg'
import ProMan from '../../assets/Project-Management.jpg'
import Agency from '../../assets/Property-Agency.jpg'
import PropDev from '../../assets/Property-Development.jpg'
import {useRouter } from "next/navigation";
import { Suspense } from "react";
import InnerPagesLayout from "@/components/InnerPagesLayout";

const Page = () => {

  const router = useRouter();

  return (
    // <InnerPagesLayout title='Our Services'>

      <div>

        <div className="w-full flex flex-col items-center justify-center py-12 xl:py-18 px-6 xl:px-24">
          <div className="text-[38px] font-bold text-center xl:text-left ">Our services include:</div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 py-12 xl:py-24">
            <div onClick={() => router.push('/services/property-valuation')} className=" flex flex-col lg:flex-col bg-white cusShadow hover:bg-primary hover:text-white  rounded-lg cursor-pointer transition-all duration-500 ease-in-out">
              <div className="w-full  rounded-lg">
                <Image
                  src={PAVal}
                  alt="Property Valuation"
                  className="w-full h-full object-fit rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2 p-2 md:p-4">
                <div className=" text-base md:text-lg font-semibold">
                  Property/Assets Valuation
                </div>
                <div className="text-sm">
                  The creation of values is an economic process resulting from
                  the interaction of market forces ....
                </div>
                <div>Click to learn more{">>"}</div>
              </div>
            </div>
            <div onClick={() => router.push('/services/property-agency')} className=" flex flex-col lg:flex-col bg-white cusShadow hover:bg-primary hover:text-white  rounded-lg cursor-pointer transition-all duration-500 ease-in-out">
              <div className="w-full rounded-lg">
                <Image
                  src={Agency}
                  alt="Property Agency"
                  className="w-full h-full object-fit rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2 p-2 md:p-4">
                <div className="text-base md:text-lg font-semibold">Property Agency</div>
                <div className="text-sm">
                  This is an aspect of our services which covers the area of
                  consulting for clients either individual, .....
                </div>
                <div>Click to learn more{">>"}</div>
              </div>
            </div>
            <div onClick={() => router.push('/services/property-development')} className=" flex flex-col lg:flex-col bg-white cusShadow hover:bg-primary hover:text-white  rounded-lg cursor-pointer transition-all duration-500 ease-in-out">
              <div className="w-full rounded-lg">
                <Image
                  src={PropDev}
                  alt="Property Development"
                  className="w-full h-full object-fit rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2 p-2 md:p-4">
                <div className="text-base md:text-lg font-semibold">
                  Property Development
                </div>
                <div className="text-sm">
                  Housing Estates Development. Site and Services Estates
                  Development......
                </div>
                <div>Click to learn more{">>"}</div>
              </div>
            </div>
            <div onClick={() => router.push('/services/facility-management')} className=" flex flex-col lg:flex-col bg-white cusShadow hover:bg-primary hover:text-white  rounded-lg cursor-pointer transition-all duration-500 ease-in-out">
              <div className="w-full rounded-lg">
                <Image
                  src={FaMan}
                  alt="Facility Management"
                  className="w-full h-full object-fit rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2 p-2 md:p-4">
                <div className="text-base md:text-lg font-semibold">
                  Property/Facility Management
                </div>
                <div className="text-sm">
                  This is the management of leased residential and commercial
                  properties, commercial high-rise .....
                </div>
                <div>Click to learn more{">>"}</div>
              </div>
            </div>
            <div onClick={() => router.push('/services/project-management')} className=" flex flex-col lg:flex-col bg-white cusShadow hover:bg-primary hover:text-white  rounded-lg cursor-pointer transition-all duration-500 ease-in-out">
              <div className="w-full rounded-lg">
                <Image
                  src={ProMan}
                  alt="Property Manager"
                  className="w-full h-full object-fit rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2 p-2 md:p-4">
                <div className="text-base md:text-lg font-semibold">Project Management</div>
                <div className="text-sm">
                  Technical and administrative co-ordination of construction
                  activities on building sites. .....
                </div>
                <div>Click to learn more{">>"}</div>
              </div>
            </div>
            <div onClick={() => router.push('/services/feasibility-studies')} className=" flex flex-col lg:flex-col bg-white cusShadow hover:bg-primary hover:text-white  rounded-lg cursor-pointer transition-all duration-500 ease-in-out">
              <div className="w-full rounded-lg">
                <Image
                  src={Feasibility}
                  alt="Feasibility and Viability Studies"
                  className="w-full h-full object-fit rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2 p-2 md:p-4">
                <div className="text-base md:text-lg font-semibold">
                  Feasibility and Viability Studies
                </div>
                <div className="text-sm">
                  We carry out feasibility and viability studies of proposed
                  development schemes.......
                </div>
                <div>Click to learn more{">>"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      // <Footer />
    // </InnerPagesLayout>
  );
};

export default Page;
