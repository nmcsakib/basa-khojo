'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
// import RoomInput from '../RoomInput';
// import Dropdown from '../Dropdown';
// import ImageUploader from './ImageUploader';
// import { roomInputs } from './InputsConfig';
import { usePostForm } from '@/hooks/usePostForm';
import uploadToImgbb from '@/app/lib/imagebb';
import { toast } from 'react-toastify';
import RoomInput from '../components/RoomInput';
import Dropdown from '../components/Dropdown';
import ImageUploader from '../components/AddPost/ImageUploader';
import { roomInputs } from '../lib/InputsConfig';

const AddPostForm = ({ basa }: { basa?: Post }) => {
  const pathname = usePathname();
  const router = useRouter();
  const {
    formData,
    setFormData,
    location,
    setLocation,
    uploadedLinks,
    setUploadedLinks,
    files,
    setFiles,
    loadingStates,
    setLoadingStates,
  } = usePostForm(basa);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = e.target.files?.[0] || null;
    if (!file) return;

    const updatedFiles = [...files];
    updatedFiles[index] = file;
    setFiles(updatedFiles);

    const loading = [...loadingStates];
    loading[index] = true;
    setLoadingStates(loading);

    const url = await uploadToImgbb(file);
    if (url) {
      const newLinks = [...uploadedLinks];
      newLinks[index] = url;
      setUploadedLinks(newLinks);
      updatedFiles[index] = null;
      setFiles(updatedFiles);
    }

    loading[index] = false;
    setLoadingStates([...loading]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast.loading("অ্যাড করা হচ্ছে...");

    let token = localStorage.getItem("bk_token");

    const payload = {
      ...(basa ? {} : { status: 'pending' }),
      lastUpdate: new Date(),
      title: formData.title,
      gender: formData.gender,
      location,
      accLoc: formData.accLoc,
      contacts: [formData.mobile1, formData.mobile2],
      facebook: formData.facebook.split("www.")[1] || "facebook.com",
      rent: formData.rent,
      availableRooms: formData.availableRooms,
      description: formData.description,
      balcony: formData.balcony,
      kitchen: formData.kitchen,
      wifi: formData.wifi,
      images: uploadedLinks.filter(Boolean),
    };

    try {
      if (!basa) {
        if (!token) {
          const newToken = `${Math.random().toString().slice(2, 12)}`;
          localStorage.setItem("bk_token", newToken);
          token = newToken;
          await fetch(`/api/landlords`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ token }),
          });
        }

        const res = await fetch('/api/posts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({...payload, token}),
        });

        const result = await res.json();
        toast.dismiss();
        if (result.acknowledged) {
          toast.success("পোস্টটি অ্যাড করা হয়েছে।");
          router.replace("/landlord/houses");
        } else {
          toast.error("দুঃখিত আবার চেষ্টা করুন।");
        }

      } else {
        if (token === basa.token) {
          const res = await fetch(`/api/posts/update/${basa._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          });

          const result = await res.json();
          toast.dismiss();
          if (result.acknowledged) {
            toast.success("পোস্টটি Update করা হয়েছে।");
            router.replace("/landlord/houses");
          } else {
            toast.error("দুঃখিত আবার চেষ্টা করুন।");
          }
        }
      }
    } catch (err) {
      toast.dismiss();
      toast.error("দুঃখিত আবার চেষ্টা করুন।");
      console.error(err);
    }
  };

  React.useEffect(() => {
    window.gtag?.('config', 'G-G1BVNBHWZH', { page_path: pathname });
  }, [pathname]);

  return (
    <div className="flex-1 flex flex-col justify-between text-white myFont backdrop-blur-xs overflow-y-scroll scrollbar-hide">
      <form onSubmit={handleSubmit} className="md:p-10 p-4 space-y-5 max-w-lg">
        <div>
          <p className="font-medium">রুমের ছবি (প্রথমটি থাম্বনেইল এ বসবে)</p>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            {[0, 1, 2, 3].map(index => (
              <ImageUploader
                key={index}
                index={index}
                file={files[index]}
                uploadedLink={uploadedLinks[index]}
                loading={loadingStates[index]}
                onChange={handleImageChange}
              />
            ))}
          </div>
        </div>

        <RoomInput
          label="টাইটেল"
          type="text"
          placeholder="Sublet Rent (সর্বোচ্চ ৩০ অক্ষর এর মধ্যে)"
          value={formData.title}
          setValue={(val: string) => setFormData((prev) => ({ ...prev, title: val }))}

        />

        <label className="text-base font-medium">লোকেশান নির্বাচন করুন</label>
        <Dropdown uni={false} setLocation={setLocation} />

        <RoomInput
          label="একুরেট লোকেশন"
          type="text"
          placeholder="বিস্তারিত লোকেশন"
          value={formData.accLoc}
          setValue={(val) => setFormData(prev => ({ ...prev, accLoc: val }))}
        />

        <select
          required
          name="gender"
          value={formData.gender}
          onChange={handleChange}
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
            name="description"
            onChange={handleChange}
            value={formData.description}
            required
          />
        </div>

        <div className="flex items-center gap-5 flex-wrap">
          {roomInputs.map((input) => (
            <RoomInput
              key={input.name}
              label={input.label}
              type={input.type}
              placeholder={input.placeholder}
              value={formData[input.name as keyof typeof formData]}
              setValue={(val) =>
                setFormData((prev) => ({ ...prev, [input.name]: val }))
              }
            />
          ))}
        </div>

        <button
          type="submit"
          className="px-8 py-2.5 text-black border cursor-pointer bg-[#00d6cb] font-medium rounded active:bg-emerald-600"
        >
          {basa ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default AddPostForm;
