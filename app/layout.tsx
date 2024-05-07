

import type { Metadata } from "next";
import "./globals.css";

import { Providers } from "@/Redux/provider";


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
          {children}
        </Providers>
      </body>
    </html>
  );
}
