import React from 'react';
import AddPost from '../../AddPostForm';
import { notFound } from 'next/navigation';
import { fetchBasaById } from '@/app/basa/[id]/page';

const page = async ({ params }: { params: Promise<{ id: string }> }) => {

    const { id } = await params;
    const basa = await fetchBasaById(id);

    if (!basa) return notFound()

    return (
        <div className='overflow-y-scroll w-full scrollbar-hide'>
            <h2 className="text-2xl md:text-3xl p-5 text-slate-200 myFont tracking-widest">Update</h2>
            <AddPost basa={basa} />
        </div>
    );
};

export default page;