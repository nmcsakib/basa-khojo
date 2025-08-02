'use client';
import { useState, useEffect } from 'react';

export const usePostForm = (basa?: Post) => {
  const [formData, setFormData] = useState({
    title: '',
    gender: '',
    mobile1: '',
    mobile2: '',
    facebook: '',
    rent: '',
    availableRooms: '',
    description: '',
    balcony: '',
    bathroom: '',
    kitchen: '',
    accLoc: '',
    wifi: '',
  });

  const [location, setLocation] = useState<LocationObject>({});
  const [uploadedLinks, setUploadedLinks] = useState<(string | null)[]>([null, null, null, null]);
  const [files, setFiles] = useState<(File | null)[]>([null, null, null, null]);
  const [loadingStates, setLoadingStates] = useState<boolean[]>([false, false, false, false]);

  useEffect(() => {
    if (basa) {
      setFormData({
        title: basa.title || '',
        gender: basa.gender || '',
        mobile1: basa.contacts?.[0] || '',
        mobile2: basa.contacts?.[1] || '',
        facebook: basa.facebook || '',
        rent: basa.rent || '',
        availableRooms: basa.availableRooms || '',
        description: basa.description || '',
        balcony: basa.balcony || '',
        bathroom: basa.bathroom || '',
        kitchen: basa.kitchen || '',
        accLoc: basa.accLoc || '',
        wifi: basa.wifi || '',
      });
      setLocation(basa.location || {});
      setUploadedLinks(basa.images || [null, null, null, null]);
    }
  }, [basa]);

  return {
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
  };
};
