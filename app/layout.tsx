

import type { Metadata } from "next";
import "./globals.css";

import { Providers } from "@/Redux/provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


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
          <div className="min-h-[100vh]">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
