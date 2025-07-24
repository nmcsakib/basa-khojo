"use client"

import Breadcrumb from "@/app/components/Breadcrumb";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BiStar } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";


const Basa = () => {

    const { id } = useParams()

    return  (<>
        <div className="px-6 md:px-16 lg:px-32 pt-14 space-y-10 min-h-screen pb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="px-5 lg:px-16 xl:px-20">
                    <div className="rounded-lg overflow-hidden bg-gray-500/10 mb-4">
                        <Image
                           src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzfGVufDB8fDB8fHww"
                alt=""
                            className="w-full h-auto object-cover mix-blend-multiply"
                            width={1280}
                            height={720}
                        />
                    </div>

                    <div className="grid grid-cols-4 gap-4">
                      
                            <div
                                // onClick={() => setMainImage(image)}
                                className="cursor-pointer rounded-lg bg-gray-500/10 flex gap-3"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzfGVufDB8fDB8fHww"
                                    alt="alt"
                                    className="w-full h-auto object-cover mix-blend-multiply"
                                    width={1280}
                                    height={720}
                                />
                                <Image
                                    src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzfGVufDB8fDB8fHww"
                                    alt="alt"
                                    className="w-full h-auto object-cover mix-blend-multiply"
                                    width={1280}
                                    height={720}
                                />
                                <Image
                                    src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzfGVufDB8fDB8fHww"
                                    alt="alt"
                                    className="w-full h-auto object-cover mix-blend-multiply"
                                    width={1280}
                                    height={720}
                                />
                                <Image
                                    src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzfGVufDB8fDB8fHww"
                                    alt="alt"
                                    className="w-full h-auto object-cover mix-blend-multiply"
                                    width={1280}
                                    height={720}
                                />
                            </div>

                        
                    </div>
                </div>

                <div className="flex flex-col">
                    <h1 className="text-3xl font-medium text-gray-800/90 mb-4">
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
                    <p className="text-gray-600 mt-3">
                        This basa is very cool, 24/7 wifi, no loadsheeding. Meal available, only good students are there. No smoking is allowed here.
                    </p>
                    <p className="text-3xl font-medium mt-6">
                        Rent: $ 2,500
                    </p>
                       <div className="flex gap-7 py-6">
                          <button
                className="px-6 py-2 flex justify-center items-center gap-2 border border-[#06aa97] bg-[#06aa97] text-[#fff] hover:bg-white hover:text-[#06aa97] dark:hover:bg-transparent transition duration-300 rounded ">
                <BsWhatsapp/> Contact Number
            </button>
            <button
                className="px-6 py-2 border border-[#3B9DF8] bg-[#3B9DF8] text-white hover:bg-white hover:text-blue-500  transition duration-300 rounded ">
                Facebook ID
            </button>
                       </div>
                     <h2 className="text-3xl font-medium">Details:</h2>
                    <div className="overflow-x-auto pt-3 pb-6">
                        <table className="table-auto border-collapse w-full text-lg border">
                            <tbody>
                                <tr className="border py-5">
                                    <td className="text-gray-600 font-medium border text-center">Bed Room</td>
                                    <td className="text-center"> 02</td>
                                </tr>
                                <tr className="border py-5">
                                    <td className="text-gray-600 font-medium border text-center">Kitchen:</td>
                                    <td className="text-center">01</td>
                                </tr>
                                <tr>
                                    <td className="text-gray-600 font-medium border text-center">Bathroom:</td>
                                    <td className="text-center">02</td>
                                </tr>
                                <tr className="border py-5">
                                    <td className="text-gray-600 font-medium border text-center">Balcony:</td>
                                    <td className="text-center">01</td>
                                </tr>
                                <tr className="border py-5">
                                    <td className="text-gray-600 font-medium border text-center">Bathroom:</td>
                                    <td className="text-center">02</td>
                                </tr>
                               
                            </tbody>
                        </table>
                    </div>
         <div>
            <h2 className="text-3xl font-medium">Location:</h2>
         <hr className="bg-gray-600 my-2" />
            <Breadcrumb/>
         </div>
                 
                </div>
            </div>
          
        </div>
    </>
    ) 
};

export default Basa;