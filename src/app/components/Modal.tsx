
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

// react icons
import { MdKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";

const Modal = ({setRole} : {setRole: Dispatch<SetStateAction<"" | "male" | "female">>}) => {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [publishButtonActive, setPublishButtonActive] = useState(false);

    const publishButtonContent = [
        "male", "female"
    ]

   useEffect(() => {
  const handleClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    if (
      !target.closest(".publishButtonOptions") &&
      !target.closest(".publishButton")
    ) {
      setPublishButtonActive(false);
    }
  };

  document.addEventListener("click", handleClick);
  return () => {
    document.removeEventListener("click", handleClick);
  };
}, []);


    return (
        <div
            className={`${isModalOpen ? " visible" : " invisible"
                } w-full h-screen fixed top-0 left-0 z-[200000000] bg-black/90 flex items-center justify-center transition-all duration-300`}
        >
            <div
                className={`${isModalOpen
                        ? " scale-[1] opacity-100"
                        : " scale-[0] opacity-0"
                    } w-[90%] sm:w-[80%] md:w-[30%] bg-white/10 backdrop-blur-sm border border-pink-300 rounded-lg p-4 transition-all duration-300 text-xl`}
            >

                <div className="w-full flex items-center justify-center flex-col">
                    <h2 className="text-[#fff] text-[2rem] font-[500]">
                       আমি 
                    </h2>


                    <div className="flex flex-col md:flex-row gap-7 py-6">
                        <Link href="/landlord" onClick={() => setIsModalOpen(false)}
                            className="px-6 py-2 flex justify-center items-center gap-2 border border-[#06aa97] bg-[#06aa97] text-[#fff] hover:bg-white hover:text-[#06aa97] dark:hover:bg-transparent transition duration-300 rounded ">
                            ভাড়া দিতে চাই 
                        </Link>
                        <div
                            className="flex items-center rounded bg-[#3B9DF8] border-none outline-none text-[#fff] justify-between relative">
                            <button
                                className="text-[1rem] px-6 py-1.5 transition-all duration-500 cursor-auto">
                                স্টুডেন্ট 
                            </button>

                            <div onClick={() => setPublishButtonActive(!publishButtonActive)}
                                className="bg-[#005fb2] w-[50px] py-1.5 flex items-center justify-center cursor-pointer rounded-r publishButton">
                                <MdKeyboardArrowDown className="text-[2rem]" />
                            </div>

                            <ul className={`${publishButtonActive ? "opacity-100 z-20 translate-y-0" : " opacity-0 z-[-1] translate-y-[-5px]"} bg-transparent publishButtonOptions transition-all duration-500 flex flex-col absolute top-[46px] rounded right-0 text-text text-[0.9rem] w-full text-center`}>
                                {
                                    publishButtonContent?.map((item, index) => (
                                        <li className="py-2 px-6 hover:bg-blue-700 bg-blue-400 text-white cursor-pointer w-full border-b rounded text-xl"
                                            key={index} onClick={() => {
                                                 setRole(item)
                                                setIsModalOpen(false)
                                            }
                                            }>{item === "male" ? "ছাত্র" : "ছাত্রী"}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};

export default Modal;
