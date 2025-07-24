'use client'
import React, { useState } from "react";
// import { assets } from "@/assets/assets";
import Image from "next/image";
import Dropdown from "../components/Dropdown";
import RoomInput from "../components/RoomInput";

const AddProduct = () => {

 const [files, setFiles] = useState<(File | null)[]>([null, null, null, null]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Earphone');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

  };

  return (
    <div className="flex-1 min-h-screen flex flex-col justify-between">
      <form onSubmit={handleSubmit} className="md:p-10 p-4 space-y-5 max-w-lg">
        <div>
          <p className="text-base font-medium">Room Images (1st one is Thumbnail)</p>
          <div className="flex flex-wrap items-center gap-3 mt-2">

            {[...Array(4)].map((_, index) => (
              <label key={index} htmlFor={`image${index}`}>
                <input onChange={(e) => {
                  const updatedFiles = [...files];
                  updatedFiles[index] = e.target?.files?.[0] || null;
                  setFiles(updatedFiles);
                }} type="file" id={`image${index}`} hidden />
                <Image
                  key={index}
                  className="max-w-24 cursor-pointer"
                  src={files[index] ? URL.createObjectURL(files[index]) : "/upload_area.png"}
                  alt=""
                  width={100}
                  height={100}
                />
              </label>
            ))}

          </div>
        </div>
        <RoomInput label="Title" type="text" placeholder="Sublet Rent"/>
         <label className="text-base font-medium" htmlFor="product-name">
            Location
          </label>
        <Dropdown setLocation={setLocation}/>
        <div className="flex flex-col gap-1 max-w-md">
          <label
            className="text-base font-medium"
            htmlFor="product-description"
          >
            subidha Description
          </label>
          <textarea
            id="product-description"
            rows={4}
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none"
            placeholder="Type here"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
          ></textarea>
        </div>
        <div className="flex items-center gap-5 flex-wrap">
         <RoomInput label="Mobile Number" type="number" placeholder="+8801XXXXXX"/>
         <RoomInput label=" Facebook ID" type="text" placeholder="https://facebook.com"/>
         <RoomInput label=" Rent" type="number" placeholder="0"/>
         <RoomInput label=" Available Rooms" type="number" placeholder="0"/>
         <RoomInput label=" Balcony" type="number" placeholder="0"/>
         <RoomInput label=" Balcony" type="number" placeholder="0"/>
         <RoomInput label="Kitchen" type="number" placeholder="0"/>
     
        </div>
        <button type="submit" className="px-8 py-2.5 text-black border cursor-pointer bg-[#00d6cb] font-medium rounded">
          ADD
        </button>
      </form>
      {/* <Footer /> */}
    </div>
  );
};

export default AddProduct;