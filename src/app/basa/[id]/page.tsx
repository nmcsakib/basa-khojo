// app/basa/[id]/page.tsx
import { notFound } from 'next/navigation';
import Breadcrumb from '@/app/components/Breadcrumb';
import BasaClient from '@/app/components/BasaClient';
import { Metadata } from 'next';

async function fetchBasaById(id: string): Promise<Post | null> {
  try {
    const res = await fetch(`${process.env.SERVER}/api/posts/${id}`, {
      cache: 'force-cache',
    });

    if (!res.ok) return null;

    const basa: Post = await res.json();
    return basa;
  } catch (err) {
    console.log(err);
    return null;
  }
}

// Metadata with title
export async function generateMetadata({ params }: {params: Promise<{ id: string }>}): Promise<Metadata> {
  const { id } = await params;
  const basa = await fetchBasaById(id);

  return {
    title: ` ${basa?.title ?? "Details"} | Basa Khojo`,
  };
}

export default async function BasaPage({ params }: {params: Promise<{ id: string }>}) {
  const { id } = await params;
  const basa = await fetchBasaById(id);

  if (!basa) return notFound();

  return (
    <div className="px-4">
      <Breadcrumb location={basa.location} />
      <BasaClient basa={basa} />
    </div>
  );
}
