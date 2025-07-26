"use client"

import Breadcrumb from "@/app/components/Breadcrumb";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BiStar } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";


const Basa = () => {
const [mainImage, setMainImage] = useState('');
    const { id } = useParams()
    const images = [
        {
            image1: "https://t3.ftcdn.net/jpg/12/13/72/80/360_F_1213728051_pFIL7Ysaklimctx4U9s0wNvH4oKrNPCO.webp"
        },
        {
            image1: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzfGVufDB8fDB8fHww"
        },
        {
            image1: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg"
        },
        {
            image1: "https://t4.ftcdn.net/jpg/07/41/71/93/240_F_741719394_C9BP3YbiXSJ7WspSDLtKdYxZKKWlf0Jz.jpg"
        }
    ]
    return  (<>
        <div className="px-5 md:px-16 lg:px-32 pt-4 space-y-10 min-h-screen pb-10 backdrop-blur-xs w-11/12 mx-auto my-10 rounded-2xl border border-cyan-300">
            <Breadcrumb/>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="lg:px-16 xl:px-20">
                    <div className="rounded-lg overflow-hidden mb-4">
                        <Image
                           src={mainImage || images?.[0].image1}
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
                                images.map((img, index) =>
                               <Image key={index} onClick={()=>setMainImage(img.image1)} width={200} height={200} alt="pic" src={img.image1} className="w-full h-auto object-cover border border-white"/>
                                )
                               }                        
                            </div>

                        
                    </div>
                </div>

                <div className="flex flex-col text-white">
                    <h1 className="text-3xl font-medium text-white mb-4">
                        This is Basa
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
                    <p className="text-white text-xl mt-3">
                        Last Update: 20/07/2025 
                    </p>
                    <p className="text-3xl font-medium mt-6">
                        ভাড়া: $ 2,500
                    </p>
                       <div className="flex flex-col md:flex-row gap-7 py-6">
                          <button
                className="px-6 py-2 flex justify-center items-center gap-2 border border-[#06aa97] bg-[#06aa97] text-[#fff] hover:bg-white hover:text-[#06aa97] dark:hover:bg-transparent transition duration-300 rounded ">
                <BsWhatsapp/> Contact Number
            </button>
            <button
                className="px-6 py-2 border border-[#3B9DF8] bg-[#3B9DF8] text-white hover:bg-white hover:text-blue-500  transition duration-300 rounded flex justify-center items-center gap-2">
               <FaFacebook/> Facebook ID
            </button>
                       </div>
                     <h2 className="text-3xl font-medium">Details:</h2>
                    <div className="overflow-x-auto pt-3 pb-6">
                        <table className="table-auto border-collapse w-full text-lg border">
                            <tbody>
                                 <tr className="border py-5 text-red-300">
                                    <td className=" font-medium border text-center">সিট বাকি:</td>
                                    <td className="text-center">02</td>
                                </tr>
                                <tr className="border py-5">
                                    <td className=" font-medium border text-center">বেডরুম</td>
                                    <td className="text-center"> 02</td>
                                </tr>
                                <tr className="border py-5">
                                    <td className=" font-medium border text-center"> কিচেন:</td>
                                    <td className="text-center">01</td>
                                </tr>
                                <tr>
                                    <td className=" font-medium border text-center">বাথরুম :</td>
                                    <td className="text-center">02</td>
                                </tr>
                                <tr className="border py-5">
                                    <td className=" font-medium border text-center">বারান্দা:</td>
                                    <td className="text-center">01</td>
                                </tr>
                               
                               
                            </tbody>
                        </table>
                    </div>
         <div>
            <h2 className="text-3xl font-medium">Summary:</h2>
             <p className=" text-xl mt-3">
                        This basa is very cool, 24/7 wifi, no loadsheeding. Meal available, only good students are there. No smoking is allowed here. 
                    </p>
         </div>
                 
                </div>
            </div>
          
        </div>
    </>
    ) 
};

export default Basa;