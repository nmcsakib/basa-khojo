
import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = () => {

    return (
        <div className="md:w-full w-11/12 mx-auto shadow-lg bg-white rounded-2xl relative">
            <Image width={200} height={200}
                src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzfGVufDB8fDB8fHww"
                alt=""
                className="w-full h-64 object-cover rounded-t-2xl"
            />
             <div
                className="px-4 py-1 w-1/3 text-center absolute top-54 right-3  text-green-900 bg-green-300 rounded-full text-[0.9rem] font-[500]">
                Recent
            </div>
            <div className="flex w-full justify-between items-center p-4">
                <div className="flex  items-center gap-4">
                    <div className=" flex flex-col">
                        <h2 className="font-semibold text-2xl">Sublet Room Rent</h2>
                        <p className="text-sm text-gray-500">Santhos, Tangail</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between w-full p-4 ">
                <div className="flex flex-col items-center gap-4 ">
                    <div>
                        {" "}
                        <p className="text-[#424242] text-[0.9rem]">
                            Rent : 2,500
                        </p>{" "}
                        {" "}
                        <p className="text-[#424242] text-[0.9rem]">
                            Available : 2 seats
                        </p>{" "}
                    </div>
                    <div className="text-lg text-yellow-900 font-bold">
                    <span className="text-xs text-gray-500">Last Update:</span> <br /> August, 2025
                    </div>
                </div>
                <Link href="/basa/123"
                    className="btn p-3 rounded dark:bg-slate-700 border bg-black text-white hover:bg-blue-400 hover:text-white">
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
            