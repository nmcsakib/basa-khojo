'use client';
import React, { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FiX, FiCheck } from "react-icons/fi";

const ContactModal = ({contacts}: {contacts: string[]}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (number: string) => {
    try {
      await navigator.clipboard.writeText(number);
      setCopied(number);
      setTimeout(() => setCopied(null), 2000); // clear after 2 seconds
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
  <>

   <button onClick={() => setIsModalOpen(true)}
                className="cursor-pointer px-6 py-2 flex justify-center items-center gap-2 border border-[#06aa97] bg-[#06aa97] text-[#fff] hover:bg-white hover:text-[#06aa97] dark:hover:bg-transparent transition duration-300 rounded ">
                <BsWhatsapp/> Contact Number
            </button>
    <div
      className={`${
        isModalOpen ? "visible opacity-100" : "invisible opacity-0"
      } w-full h-screen left-0 z-[200000000] flex items-center justify-center transition-all duration-300 absolute md:top-0 top-1/3`}
    >
      <div
        className={`${
          isModalOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        } w-[90%] sm:w-[80%] md:w-[30%] bg-slate-900/95  backdrop-blur-3xl border border-pink-300 rounded-lg p-6 transition-all duration-300 text-xl relative`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-4 right-4 text-white text-2xl hover:text-pink-400 cursor-pointer"
          aria-label="Close Modal"
        >
          <FiX />
        </button>

        {/* Content */}
        <div className="w-full flex flex-col items-center justify-center gap-5">
          <h2 className="text-[#fff] text-2xl font-semibold">Contact Numbers</h2>

          {contacts?.map((number) => (
            <button
              key={number}
              onClick={() => handleCopy(number)}
              className="cursor-pointer w-full text-center px-6 py-2 flex justify-center items-center gap-2 border border-[#06aa97] bg-[#06aa97] text-[#fff] hover:bg-white hover:text-[#06aa97] dark:hover:bg-transparent transition duration-300 rounded"
            >
              {copied === number ? (
                <>
                  <FiCheck className="text-green-400" /> Copied!
                </>
              ) : (
                number
              )}
            </button>
          ))}

          <p className="text-sm text-gray-300 mt-2">Click on a number to copy</p>
        </div>
      </div>
    </div>
  </>
  );
};

export default ContactModal;
