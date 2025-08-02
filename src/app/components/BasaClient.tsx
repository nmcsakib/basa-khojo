'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiLeftArrow, BiTrash } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import ContactModal from "@/app/components/ContactModal";
import { usePathname, useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import { AiOutlineLoading } from "react-icons/ai";

export default function BasaClient({ basa }: { basa: Post }) {
  const [mainImage, setMainImage] = useState(basa.images[0]);
  const [status, setStatus] = useState('')
  const router = useRouter();
  const pathname = usePathname();
  const date = new Date(basa?.lastUpdate);
  const formattedDate = date?.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("bk_token");
    setToken(storedToken);
  }, []);

  const handleUpate = () => {
    toast.loading("updating...")
    fetch(`/api/posts/${basa?._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({}),
    })
      .then(response => response.json())
      .then(data => {
        toast.dismiss()
        setStatus("Approved")
        toast.success("Approved")
        console.log('Resource updated successfully:', data);
      })
      .catch(error => {
        toast.dismiss()
        toast.error("Something went wrong")
        console.error('Error updating resource:', error);
      });

  }
  const handleDelete = () => {
    toast.loading("deleting...")
    fetch(`/api/posts/${basa?._id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({}),
    })
      .then(response => response.json())
      .then(data => {
        toast.dismiss()
        setStatus("Deleted")
        toast.success("Deleted")
        console.log('Resource deleted successfully:', data);
      })
      .catch(error => {
        toast.dismiss()
        toast.error("Something went wrong")
        console.error('Error updating resource:', error);
      });

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
                alt={basa.title}
                aria-label={`${basa.title} - Main Image`}
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
            <div className="flex justify-between items-center"><h1 className="text-3xl font-medium text-white mb-1 myFont tracking-wider">
              {basa.title}
            </h1>
              {
              token === basa?.token &&   <div className="flex flex-col justify-center items-center">
                <Link href={`/landlord/update/${basa?._id}`}
        className="cursor-pointer group w-30 m-5 md:ml-14 px-6 py-2 border border-[#3B9DF8] bg-[#3B9DF8] text-white hover:bg-transparent transition duration-300 rounded flex justify-center items-center gap-2 font-sans"
      > <AiOutlineLoading className="group-focus:animate-spin group-focus:opacity-100 font-bold text-lg opacity-0"/> Update
      </Link>
      <button onClick={handleDelete}
        className="cursor-pointer group w-30 m-5 md:ml-14 px-6 py-2 border border-[#ff9393] bg-[#ff6060] text-white hover:bg-transparent transition duration-300 rounded flex justify-center items-center gap-2 font-sans"
      > <BiTrash/> Delete
      </button>
              </div>
              }</div>
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
            <section aria-labelledby="details-heading">
              <h2 id="details-heading" className="text-3xl font-medium">বিস্তারিত:</h2>
              <table className="table-auto border-collapse text-lg border w-full lg:w-3/4 mt-3 mb-6">
                <tbody>
                  <tr><td className="border text-center">ওয়াইফাই</td><td className="border text-center">{basa.wifi}</td></tr>
                  <tr><td className="border text-center">বেডরুম</td><td className="border text-center">{basa.availableRooms}</td></tr>
                  <tr><td className="border text-center">কিচেন</td><td className="border text-center">{basa.kitchen}</td></tr>
                  <tr><td className="border text-center">বাথরুম</td><td className="border text-center">{basa?.bathroom || 1}</td></tr>
                  <tr><td className="border text-center">বারান্দা</td><td className="border text-center">{basa.balcony}</td></tr>
                </tbody>
              </table>
            </section>

            <section aria-labelledby="amenities-heading">
              <h2 id="amenities-heading" className="text-3xl font-medium">সুবিধা সমূহ:</h2>
              <p className="text-xl mt-3">{basa.description}</p>
            </section>

            <section aria-labelledby="location-heading">
              <h2 id="location-heading" className="text-3xl font-medium">Location:</h2>
              <p className="text-xl mt-3">{basa.location.uni_en || basa.location.upa_en}, {basa.location.dis_en}</p>
            </section>

            {
              ((token === "admin" || token === "559385") && basa?.status !== "approved") && <div className="flex justify-end items-center gap-6">
                <button disabled={status === "Approved"} onClick={handleUpate} className="cursor-pointer px-6 py-3 border border-[#06aa97] bg-[#06aa97] text-[#fff] hover:bg-white hover:text-[#06aa97] dark:hover:bg-transparent transition duration-300 rounded ">
                  Approve
                </button>
                <button onClick={handleDelete} className="cursor-pointer px-6 py-3 border border-[#ff7b9c] bg-[#ff7b9c] text-[#fff] hover:bg-white hover:text-[#ff7b9c] dark:hover:bg-transparent transition duration-300 rounded ">
                  Delete
                </button>
              </div>

            }
            {(token === "admin" || token === "559385") && basa?.status }
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
