'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiLeftArrow, BiStar } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import ContactModal from "@/app/components/ContactModal";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface LocationObject {
  division?: string;
  district?: string;
  upazila?: string;
  union?: string;
}

interface BasaProp {
  _id: string;
  title: string;
  gender: string;
  location: LocationObject;
  accLoc: string;
  contacts: string[];
  facebook: string;
  rent: string;
  availableRooms: string;
  description: string;
  balcony: string;
  kitchen: string;
  wifi: string;
  images: string[];
  lastUpdate: string;
  approved: string;
}

export default function BasaClient({ basa }: { basa: BasaProp }) {
  const [mainImage, setMainImage] = useState(basa.images[0]);
  const router = useRouter();
  const pathname = usePathname();
  const token = localStorage.getItem("token");
  const date = new Date(basa?.lastUpdate);
  const formattedDate = date?.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

const handleUpate = () => {
  console.log(basa?._id);
}

  useEffect(() => {
    window.gtag('config', 'G-G1BVNBHWZH', {
      page_path: pathname,
    });
  }, [pathname]);
  console.log(basa);
  return (
    <>
      <button
        onClick={() => router.back()}
        className="w-30 m-5 md:ml-14 px-6 py-2 border border-[#3B9DF8] bg-[#3B9DF8] text-white hover:bg-transparent transition duration-300 rounded flex justify-center items-center gap-2"
      >
        <BiLeftArrow /> Back
      </button>

      <div className="px-5 md:px-6 lg:px-8 pt-4 space-y-10 min-h-screen pb-10 backdrop-blur-xs w-11/12 mx-auto mb-10 rounded-2xl border border-cyan-300 bg-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image Section */}
          <div>
            <div className="rounded-lg overflow-hidden mb-4">
              <Image
                src={mainImage}
                alt="Main image"
                width={1280}
                height={720}
                className="w-full h-auto object-cover border border-white"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {basa.images.map((img) => (
                <Image
                  key={img}
                  onClick={() => setMainImage(img)}
                  width={200}
                  height={200}
                  alt="Thumbnail"
                  src={img}
                  className="w-full h-auto object-cover border border-white cursor-pointer"
                />
              ))}
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col text-white">
            <h1 className="text-3xl font-medium text-white mb-1 myFont tracking-wider">
              {basa.title}
            </h1>
            <span className="text-green-400">{basa.accLoc}</span>
            
            <p className="text-red-400 animate-pulse text-xl mt-3">
              সিট বাকি: {basa.availableRooms}
            </p>
            <p className="text-yellow-300 text-xl mt-3 myFont ">লাস্ট আপডেট: {formattedDate}</p>
            <p className="text-3xl font-medium mt-6">ভাড়া: {basa.rent} টাকা</p>
            <div className="flex flex-col md:flex-row gap-7 py-6 font-sans font-bold">
              <ContactModal contacts={basa.contacts} />
              <Link
                href={`https://${basa.facebook}`}
                target="_blank"
                className="px-6 py-2 border border-[#3B9DF8] bg-[#3B9DF8] text-white hover:bg-transparent transition duration-300 rounded flex justify-center items-center gap-2"
              >
                <FaFacebook /> Facebook ID
              </Link>
            </div>
            <h2 className="text-3xl font-medium">বিস্তারিত:</h2>
            <table className="table-auto border-collapse text-lg border w-full lg:w-3/4 mt-3 mb-6">
              <tbody>
                <tr><td className="border text-center">ওয়াইফাই</td><td className="border text-center">{basa.wifi}</td></tr>
                <tr><td className="border text-center">বেডরুম</td><td className="border text-center">{basa.availableRooms}</td></tr>
                <tr><td className="border text-center">কিচেন</td><td className="border text-center">{basa.kitchen}</td></tr>
                <tr><td className="border text-center">বাথরুম</td><td className="border text-center">{basa.balcony}</td></tr>
                <tr><td className="border text-center">বারান্দা</td><td className="border text-center">{basa.balcony}</td></tr>
              </tbody>
            </table>
            <h2 className="text-3xl font-medium">সুবিধা সমূহ:</h2>
            <p className="text-xl mt-3">{basa.description}</p>

            {
              (token === "admin" && basa?.approved !== "approved") &&  <div className="flex justify-end items-center gap-6">
              <button onClick={ handleUpate } className="cursor-pointer px-6 py-3 border border-[#06aa97] bg-[#06aa97] text-[#fff] hover:bg-white hover:text-[#06aa97] dark:hover:bg-transparent transition duration-300 rounded ">
                            Approve
                        </button>
                        <button className="cursor-pointer px-6 py-3 border border-[#ff7b9c] bg-[#ff7b9c] text-[#fff] hover:bg-white hover:text-[#ff7b9c] dark:hover:bg-transparent transition duration-300 rounded ">
                            Delete
                        </button>
              </div>
              
            }
            { token === "admin" && (basa?.approved || "approved")}
          </div>
        </div>
      </div>
    </>
  );
}
