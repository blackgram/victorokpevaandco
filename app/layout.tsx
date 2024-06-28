

import type { Metadata } from "next";
import "./globals.css";

import { Providers } from "@/Redux/provider";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "Victor Okpeva & Co.",
  description: "Real Estate Surveyors & Valuers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className="font-main">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
