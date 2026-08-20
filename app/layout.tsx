import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Disruptors | Fall 2026",
  description:
    "A no-fluff cohort for extremely dedicated builders. Once a month + special events. No curriculum. Just community + accountability.",

  icons: "/favicon.ico",
  keywords: ["disruptors", "boston", "fall 2026", "cohort"],
  authors: [
    {
      name: "Nicole Debow",
      url: "https://www.linkedin.com/in/nicoledebow/",
    },
    {
      name: "Noah Borrup",
      url: "https://www.linkedin.com/in/noah-borrup/",
    },
  ],
  creator: "Nicole Debow, Noah Borrup",
  publisher: "Nicole Debow, Noah Borrup",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
