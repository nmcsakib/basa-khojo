/* eslint-disable @next/next/inline-script-id */
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Script from "next/script";
import Footer from "./components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Basa Khojo - Find Your Next Home",
  description: "Basa Khojo is your one-stop platform for finding rental homes in your desired area.",
  keywords: "rent, house, apartment, room, landlord, tenant, basa, khojo, home, find",
  openGraph: {
    title: "Basa Khojo - Find Your Next Home",
    description: "Basa Khojo is your one-stop platform for finding rental homes in your desired area.",
    url: "https://basa-khojo.vercel.app",
    siteName: "Basa Khojo",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Basa Khojo Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Basa Khojo - Find Your Next Home",
    description: "Basa Khojo is your one-stop platform for finding rental homes in your desired area.",
    images: ["/android-chrome-512x512.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Script */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-G1BVNBHWZH"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G1BVNBHWZH', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}
