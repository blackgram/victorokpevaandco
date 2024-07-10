"use client";

import React from "react";
import { usePathname } from "next/navigation";

import { MdOutlineNavigateNext } from "react-icons/md";
import Link from "next/link";
import { Suspense } from "react";

interface InnerPagesLayoutProps {
  title?: string;
  children: React.ReactNode;
}

const InnerPagesLayout: React.FC<InnerPagesLayoutProps> = ({
  title,
  children,
}) => {
  const path = usePathname();
  const splitPath = path.split("/").filter((splitPath) => splitPath);

  const defaultPageTitle = splitPath[splitPath.length - 1].toUpperCase();

  return (
    <Suspense fallback={<>Loading</>}>
    <div className="pt-16 md:pt-16 lg:pt-20 xl:pt-24">
      <div className="w-full bg-cover bg-[url(../assets/services2.jpg)] bg-fixed p-14 ">
        <div>
          <div className=" font-semibold text-[28px] lg:text-[36px] ">
            {title ? title : defaultPageTitle}
          </div>
          <div className="flex items-center gap-2 text-sm lg:text-base">
            <Link href="/" className="hover:text-red-500">
              HOME
            </Link>
            <MdOutlineNavigateNext />
            {splitPath.map((path, i) => (
              <div
                key={i}
                className="flex items-center justify-center gap-2 hover:text-red-500"
              >
                <Link href={`/${path}`}>{path.toUpperCase()}</Link>
                <MdOutlineNavigateNext />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-6">{children}</div>
    </div>
  </Suspense>
  );
};

export default InnerPagesLayout;
