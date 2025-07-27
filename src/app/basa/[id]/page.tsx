"use client"

import Breadcrumb from "@/app/components/Breadcrumb";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BiStar } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

interface LocationObject {
  division?: string;
  district?: string;
  upazila?: string;
  union?: string;
  university?: {
    
    "id": string,
    "bn_name": string,
    "en_name": string,
    "short_form": string,
    "district": string
    };
}

interface BasaProp {
     title: string;
    gender: string;
    location: LocationObject;
    accLoc: string;
    mobile: string;
    facebook: string;
    rent: string;
    availableRooms: string;
    description: string;
    balcony: string;
    kitchen: string;
    wifi: string;
    images: string[];
}
const Basa = () => {
const [mainImage, setMainImage] = useState('');
const [basa, setBasa] = useState<BasaProp>();
    const {id} = useParams()
    console.log(id);

    useEffect(() => {
        fetch(`/api/posts/${id}`)
        .then(res => res.json())
        .then(data => setBasa(data))
    },[id])
    console.log(basa);
    if (!basa || !basa.images) {
  return <div className="text-white text-center py-10">Loading...</div>
} else {
    return  (<>
        <div className="px-5 md:px-6 lg:px-8 pt-4 space-y-10 min-h-screen pb-10 backdrop-blur-xs w-11/12 mx-auto my-10 rounded-2xl border border-cyan-300">
            <Breadcrumb location={basa?.location}/>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="">
                    <div className="rounded-lg overflow-hidden mb-4">
                        <Image
                           src={mainImage || basa.images[0]}
                            alt=""
                            className="w-full h-auto object-cover border border-white"
                            width={1280}
                            height={720}
                        />
                    </div>

                    <div className="grid grid-cols-4 gap-4">
                      
                            <div className="cursor-pointer rounded-lg flex gap-3"
                            >
                               {
                                basa.images.map((img) =>
                               <Image key={img} onClick={()=>setMainImage(img)} width={200} height={200} alt="pic" src={img} className="w-full h-auto object-cover border border-white"/>
                                )
                               }                        
                            </div>

                        
                    </div>
                </div>

                <div className="flex flex-col text-white">
                    <h1 className="text-3xl font-medium text-white mb-4">
                        {basa?.title}
                    </h1>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-0.5">
                           <BiStar className="text-amber-400"/>
                           <BiStar className="text-amber-400"/>
                           <BiStar className="text-amber-400"/>
                           <BiStar className="text-amber-400"/>
                           
                        </div>
                        <p>(4.5)</p>
                    </div>
                    <p className="text-red-400 animate-pulse text-xl mt-3">
                       সিট বাকি: {basa?.availableRooms} 
                    </p>
                    <p className="text-white text-xl mt-3">
                        লাস্ট আপডেট: 20/07/2025 
                    </p>
                    <p className="text-3xl font-medium mt-6">
                        ভাড়া: {basa?.rent} টাকা 
                    </p>
                       <div className="flex flex-col md:flex-row gap-7 py-6">
                          <button
                className="px-6 py-2 flex justify-center items-center gap-2 border border-[#06aa97] bg-[#06aa97] text-[#fff] hover:bg-white hover:text-[#06aa97] dark:hover:bg-transparent transition duration-300 rounded ">
                <BsWhatsapp/> Contact Number
            </button>
            <button
                className="px-6 py-2 border border-[#3B9DF8] bg-[#3B9DF8] text-white hover:bg-transparent transition duration-300 rounded flex justify-center items-center gap-2">
               <FaFacebook/> Facebook ID
            </button>
                       </div>
                     <h2 className="text-3xl font-medium">বিস্তারিত:</h2>
                    <div className="overflow-x-auto pt-3 pb-6">
                        <table className="table-auto border-collapse text-lg border w-full lg:w-3/4">
                            <tbody>
                                 <tr className="border py-5">
                                    <td className=" font-medium border text-center">ওয়াইফাই</td>
                                    <td className="text-center">{basa?.wifi}</td>
                                </tr>
                                <tr className="border py-5">
                                    <td className=" font-medium border text-center">বেডরুম</td>
                                    <td className="text-center">{basa?.availableRooms}</td>
                                </tr>
                                <tr className="border py-5">
                                    <td className=" font-medium border text-center"> কিচেন:</td>
                                    <td className="text-center">{basa?.kitchen}</td>
                                </tr>
                                <tr>
                                    <td className=" font-medium border text-center">বাথরুম :</td>
                                    <td className="text-center">{basa?.balcony}</td>
                                </tr>
                                <tr className="border py-5">
                                    <td className=" font-medium border text-center">বারান্দা:</td>
                                    <td className="text-center">{basa?.balcony}</td>
                                </tr>
                               
                               
                            </tbody>
                        </table>
                    </div>
         <div>
            <h2 className="text-3xl font-medium">সুবিধা সমূহ:</h2>
             <p className=" text-xl mt-3">
                       {basa?.description} 
                    </p>
         </div>
                 
                </div>
            </div>
          
        </div>
    </>
    ) 
}
};

export default Basa;