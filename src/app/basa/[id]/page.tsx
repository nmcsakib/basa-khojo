// app/basa/[id]/page.tsx
import { notFound } from 'next/navigation';
import Breadcrumb from '@/app/components/Breadcrumb';
import BasaClient from '@/app/components/BasaClient';

interface LocationObject {
  division?: string;
  district?: string;
  upazila?: string;
  union?: string;
}

interface BasaProp {
  title: string;
  gender: string;
  location: LocationObject;
  accLoc: string;
  contacts: string[];
  facebook: string;
  rent: string;
  availableRooms: string;
  description: string;
  balcony: string;
  kitchen: string;
  wifi: string;
  images: string[];
}

export default async function BasaPage({ params }: { params: { id: string } }) {
  const {id} = await params;
  const res = await fetch(`${process.env.SERVER}/api/posts/${id}`, {
    cache: 'force-cache', 
  });

  if (!res.ok) return notFound();

  const basa: BasaProp = await res.json();
console.log(basa);
  return (
    <div className="px-4">
      <Breadcrumb location={basa.location} />
      <BasaClient basa={basa} />
    </div>
  );
}
