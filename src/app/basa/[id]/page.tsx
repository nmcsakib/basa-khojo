// app/basa/[id]/page.tsx
import { notFound } from 'next/navigation';
import Breadcrumb from '@/app/components/Breadcrumb';
import BasaClient from '@/app/components/BasaClient';
import { Metadata } from 'next';

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


async function fetchBasaById(id: string): Promise<BasaProp | null> {
  try {
    const res = await fetch(`${process.env.SERVER}/api/posts/${id}`, {
      cache: 'force-cache',
    });

    if (!res.ok) return null;

    const basa: BasaProp = await res.json();
    return basa;
  } catch (err) {
    return null;
  }
}

// Metadata with title
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const id = params.id;
  const basa = await fetchBasaById(id);

  return {
    title: ` ${basa?.title ?? "Details"} | Basa Khojo`,
  };
}

export default async function BasaPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const basa = await fetchBasaById(id);

  if (!basa) return notFound();

  return (
    <div className="px-4">
      <Breadcrumb location={basa.location} />
      <BasaClient basa={basa} />
    </div>
  );
}
