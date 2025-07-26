
import React from "react";
import Image from "next/image";
import Link from "next/link";
interface Post {
    post: {
        _id: string;
        title: string;
        images: string[];
        location: {
            division?: string;
            university?: {
                district: string
            }
        };
        rent: string;
        availableRooms: string;
    }
}
const ProductCard = ({ post }: Post) => {

    return (
        <div className="md:w-full w-11/12 mx-auto border border-cyan-600 shadow-xl backdrop-blur-xs rounded-2xl relative">
            <Image width={200} height={200}
                src={post.images[2] || post.images[0] || post.images[2] || post.images[3] }
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
                        <h2 className="font-semibold text-2xl text-white">{post.title}</h2>
                        <p className="text-sm text-green-400">{post.location?.division || post.location?.university?.district}</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between w-full p-4 ">
                <div className="flex flex-col gap-4 ">
                    <div>

                        <p className="text-[#e0e0e0] text-[0.9rem]">
                            Rent : {post.rent}
                        </p>{" "}

                        <p className="text-[#e0e0e0] text-[0.9rem]">
                            Available : {post.availableRooms}
                        </p>{" "}
                    </div>
                    <div className="text-lg text-yellow-500 font-bold">
                        <span className="text-xs text-gray-400">Last Update:</span> <br /> August, 2025
                    </div>
                </div>
                <Link href="/basa/123"
                    className=" btn p-3 rounded backdrop-blur-3xl border border-slate-300 text-white hover:bg-blue-400/20 hover:text-white shadow-2xl">
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
