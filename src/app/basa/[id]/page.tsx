// app/basa/[id]/page.tsx
import { notFound } from 'next/navigation';
import Breadcrumb from '@/app/components/Breadcrumb';
import BasaClient from '@/app/components/BasaClient';
import { Metadata } from 'next';

export async function fetchBasaById(id: string): Promise<Post | null> {
  try {
    const res = await fetch(`${process.env.SERVER}/api/posts/${id}`, {
      cache: 'no-cache',
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

  if (!basa) {
    return {
      title: "Not Found | Basa Khojo",
      description: "The page you are looking for does not exist.",
    };
  }

  const { title, location, rent, gender } = basa;
  const locationString = `${location.uni_en || location.upa_en}, ${location.dis_en}`;
  const pageTitle = `${title} for ${gender} in ${locationString} | Basa Khojo`;
  const description = `For rent: ${title} in ${locationString}. Price: ${rent} BDT. Find more details and contact the landlord on Basa Khojo.`;
  const keywords = `rent in ${location.dis_en}, ${gender} flat, ${location.upa_en} rent, house rent, bachelor mess, to-let, বাসা ভাড়া, মেস`;

  return {
    title: pageTitle,
    description: description,
    keywords: keywords,
    openGraph: {
      title: pageTitle,
      description: description,
      url: `https://basa-khojo.vercel.app/basa/${id}`,
      siteName: "Basa Khojo",
      images: [
        {
          url: basa.images[0] ?? "/fallback.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: description,
      images: [basa.images[0] ?? "/fallback.png"],
    },
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
