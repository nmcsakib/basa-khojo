'use client';
import React, { useState } from "react";
import Image from "next/image";
import Dropdown from "../components/Dropdown";
import RoomInput from "../components/RoomInput";
import uploadToImgbb from "../lib/imagebb";
interface LocationObject {
  division?: string;
  district?: string;
  upazila?: string;
  union?: string;
}

const AddPost = () => {
  const [files, setFiles] = useState<(File | null)[]>([null, null, null, null]);
  const [uploadedLinks, setUploadedLinks] = useState<(string | null)[]>([null, null, null, null]);
  const [loadingStates, setLoadingStates] = useState<boolean[]>([false, false, false, false]);

  const [title, setTitle] = useState('');
  const [gender, setGender] = useState('');
  const [mobile1, setMobile1] = useState('');
  const [mobile2, setMobile2] = useState('');
  const [facebook, setFacebook] = useState('');
  const [rent, setRent] = useState('');
  const [availableRooms, setAvailableRooms] = useState('');
  const [description, setDescription] = useState('');
  const [balcony, setBalcony] = useState('');
  const [kitchen, setKitchen] = useState('');
  const [location, setLocation] = useState<LocationObject>({});
  const [accLoc, setAccLoc] = useState('');
  const [wifi, setWifi] = useState('');
  const isAnyUploading = loadingStates.some(Boolean);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = e.target.files?.[0] || null;
    if (!file) return;

    const updatedFiles = [...files];
    updatedFiles[index] = file;
    setFiles(updatedFiles);

    // Show loading state
    const newLoading = [...loadingStates];
    newLoading[index] = true;
    setLoadingStates(newLoading);

    // Upload the image to ImgBB
    const url = await uploadToImgbb(file);
    if (url) {
      const updatedLinks = [...uploadedLinks];
      updatedLinks[index] = url;
      setUploadedLinks(updatedLinks);

      const updatedFilesAfterUpload = [...files];
      updatedFilesAfterUpload[index] = null;
      setFiles(updatedFilesAfterUpload);
    }

    // Hide loading state
    newLoading[index] = false;
    setLoadingStates([...newLoading]);
  };

  const getPreview = (index: number) => {
    if (uploadedLinks[index]) return uploadedLinks[index]!;
    if (files[index]) return URL.createObjectURL(files[index]!);
    return "/upload_area.png";
  };



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      title,
      gender,
      location,
      accLoc,
      contacts: [mobile1, mobile2],
      facebook,
      rent,
      availableRooms,
      description,
      balcony,
      kitchen,
      wifi,
      images: uploadedLinks.filter(Boolean),
    };

    console.log("Submitting:", payload);
    try {
      const res = await fetch(`/api/posts`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payload)

      })
      const result = await res.json()
      if (result.acknowledged) {
        console.log("success");
        console.log("Server response:", result);
      } else {
        console.log("failed");
      }

    } catch (error) {
      console.error("Error submitting product:", error);
    }
  };

  return (
    <div className="flex-1 flex flex-col justify-between text-white myFont backdrop-blur-xs overflow-y-scroll scrollbar-hide">
      <form onSubmit={handleSubmit} className="md:p-10 p-4 space-y-5 max-w-lg ">
        <div>
          <p className="font-medium">রুমের ছবি (প্রথমটি থাম্বনেইল এ বসবে)</p>
          <div className={`flex flex-wrap items-center gap-3 mt-2`}>
            {[...Array(4)].map((_, index) => (
              <label
                key={index}
                htmlFor={`image${index}`}
                className={`relative ${isAnyUploading ? 'pointer-events-none opacity-50' : ''}`}


              >
                <input
                  type="file"
                  id={`image${index}`}
                  hidden
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, index)}
                />
                <div className="relative max-w-24 h-[100px] w-[100px] cursor-pointer border rounded overflow-hidden" >
                  <Image
                    src={getPreview(index)}
                    alt="upload"
                    fill
                    className="object-cover"
                  />
                  {loadingStates[index] && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-sm">
                      Uploading...
                    </div>
                  )}
                </div>
              </label>
            ))}
          </div>
        </div>

        <RoomInput label="টাইটেল" type="text" placeholder="Sublet Rent" setValue={setTitle} />
        <label className="text-base font-medium">লোকেশান নির্বাচন করুন</label>
        <Dropdown uni={false} setLocation={setLocation} />
        <RoomInput label="একুরেট লোকেশন" type="text" placeholder="বিস্তারিত লোকেশন" setValue={setAccLoc} />
        <select onChange={(e) => {
          const selectedItem = e.target.value;
          setGender(selectedItem);
        }}
          required
          className="w-full border border-slate-200 outline-0 p-2 rounded bg-slate-800"
        >
          <option value="">কাদের জন্য ভাড়া দিতে চান?</option>
          <option value="male">ছেলে</option>
          <option value="female">মেয়ে</option>
        </select>
        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium">সুবিধা সমূহ </label>
          <textarea
            rows={4}
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-white resize-none"
            placeholder="Type here"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
          ></textarea>
        </div>

        <div className="flex items-center gap-5 flex-wrap">
          <RoomInput label="Mobile Number 1" type="number" placeholder="+8801XXXXXX" setValue={setMobile1} />
          <RoomInput label="Mobile Number 2 (Optional)" type="number" placeholder="+8801XXXXXX" setValue={setMobile2} />
          <RoomInput label="Facebook ID" type="text" placeholder="https://facebook.com" setValue={setFacebook} />
          <RoomInput label="সিট বাকি" type="number" placeholder="0" setValue={setAvailableRooms} />
          <RoomInput label="ভাড়া " type="number" placeholder="0" setValue={setRent} />
          <RoomInput label="বারান্দা" type="number" placeholder="0" setValue={setBalcony} />
          <RoomInput label="কিচেন" type="number" placeholder="0" setValue={setKitchen} />
          <RoomInput label="ওয়াইফাই" type="text" placeholder="Yes/No" setValue={setWifi} />
        </div>

        <button
          type="submit"
          className="px-8 py-2.5 text-black border cursor-pointer bg-[#00d6cb] font-medium rounded active:bg-emerald-600"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddPost;
