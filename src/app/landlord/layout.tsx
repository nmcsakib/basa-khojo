
import { Metadata } from "next";
import SideBar from "./Sidebar"
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
title: "Dashboard | Basa Khojo",
description: "Basa Khojo is your one-stop platform for finding rental homes in your desired area.",
keywords: "rent, house, apartment, room, landlord, tenant, basa, khojo, home, find",
openGraph: {
  title: "Basa Khojo - Find Your Next Home",
  description: "Basa Khojo is your one-stop platform for finding rental homes in your desired area.",
  url: "https://basa-khojo.vercel.app/landlord",
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
const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  return (
    <>
      <div className='flex w-full overflow-y-hidden h-[calc(100vh-56px)]'>
        <SideBar />
        {children}
      </div>
      <ToastContainer />
    </>
  )
}

export default Layout