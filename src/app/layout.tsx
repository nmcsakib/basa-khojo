import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

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
  description: "Basa Khojo is your one-stop platform for finding rental homes in your desired area. Search for houses, apartments, and rooms to rent, and connect with landlords directly.",
  keywords: "rent, house, apartment, room, landlord, tenant, basa, khojo, home, find",
  openGraph: {
    title: "Basa Khojo - Find Your Next Home",
    description: "Basa Khojo is your one-stop platform for finding rental homes in your desired area. Search for houses, apartments, and rooms to rent, and connect with landlords directly.",
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
    description: "Basa Khojo is your one-stop platform for finding rental homes in your desired area. Search for houses, apartments, and rooms to rent, and connect with landlords directly.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

    <Navbar/>
        {children}
      </body>
    </html>
  );
}
