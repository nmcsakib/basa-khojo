import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className=' nav-bg w-full flex justify-center text-2xl'>
            <Link href="/" className='border-r-2 border-white text-center w-1/2 py-3 left-hov'>Basa Khujo</Link>
            <div className='w-1/2 text-center py-3 cursor-pointer right-hov'> Tools Khujo</div>
        </div>
    );
};

export default Navbar;