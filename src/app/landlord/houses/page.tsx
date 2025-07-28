"use client"
import Card from '@/app/components/Card';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
interface Post {

  _id: string;
  title: string;
  images: string[];
  location: {
    division?: string;
    university?: {
      district: string
    }
  };
  rent: string;
  availableRooms: string;
}

const Houses = () => {
  const pathname = usePathname();
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const token = localStorage.getItem("token")
  useEffect(() => {
    if (!token) return
    fetch(`/api/landlords?token=${token}`)
      .then(res => res.json())
      .then(data => {
        setPosts(data)
        setLoading(false)
      })
  }, [token])
  console.log(posts);
  useEffect(() => {
    window.gtag('config', 'G-G1BVNBHWZH', {
      page_path: pathname,
    });
  }, [pathname]);


  return (
    <div className='overflow-y-scroll scrollbar-hide w-full p-5'>
      <h2 className="text-2xl md:text-3xl p-5 text-slate-200 myFont tracking-widest">আপনার সবগুলো পোস্ট দেখুন </h2>
      {
        loading ?
          <h2 className="text-2xl md:text-3xl p-5 text-slate-200 myFont tracking-widest text-center">Loading...</h2>
          :
          <div className="grid md:grid-cols-3 w-full gap-7">
            {posts.map((post) => (
              <span key={post._id}>
                <Card post={post} />
              </span>
            ))}
          </div>}
    </div>
  );
}

export default Houses;