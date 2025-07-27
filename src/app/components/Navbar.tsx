import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className=' nav-bg w-full flex justify-center text-2xl myFont text-slate-700'>
            <Link href="/" className='border-r-2 border-white text-center w-1/2 py-3 left-hov'>বাসা খোঁজো </Link>
            <Link href={'/asbabpotro'} className='w-1/2 text-center py-2 cursor-pointer right-hov text-lg md:text-2xl'>আসবাবপত্র খোঁজো</Link>
        </div>
    );
};

export default Navbar;