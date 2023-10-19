"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import { AuthContextProvider } from "./context/AuthContext.js";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>TradeMate - A project by Gaurav and Anshdeep</title>
      </head>
      <body className={inter.className}>
        <AuthContextProvider>
          <Navbar />
          {children}
        </AuthContextProvider>
        <script
          async
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_googlemapsapi}&libraries=places&callback=initMap`}
        ></script>
        <script async src="/js/static.js"></script>
      </body>
    </html>
  );
}
