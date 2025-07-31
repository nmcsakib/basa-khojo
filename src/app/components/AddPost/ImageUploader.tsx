'use client';
import React from 'react';
import Image from 'next/image';

interface Props {
  index: number;
  file: File | null;
  uploadedLink: string | null;
  loading: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
}

const ImageUploader = ({ index, file, uploadedLink, loading, onChange }: Props) => {
  const preview = uploadedLink
    ? uploadedLink
    : file
    ? URL.createObjectURL(file)
    : '/upload_area.png';

  return (
    <label htmlFor={`image${index}`} className={`relative ${loading ? 'pointer-events-none opacity-50' : ''}`}>
      <input
        type="file"
        id={`image${index}`}
        hidden
        accept="image/*"
        onChange={(e) => onChange(e, index)}
      />
      <div className="relative max-w-24 h-[100px] w-[100px] cursor-pointer border rounded overflow-hidden">
        <Image src={preview} alt="upload Successfull" fill   className='object-cover' />
        {loading && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-sm">
            Uploading...
          </div>
        )}
      </div>
    </label>
  );
};

export default ImageUploader;
