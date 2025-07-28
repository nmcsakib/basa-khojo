'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const SideBar = () => {
    const pathname = usePathname()
    const menuItems = [
        { name: 'ভাড়া দিন', path: '/landlord', icon: "/add_icon.png" },
        { name: 'সকল পোস্ট দেখুন', path: '/landlord/houses', icon: "/product_list_icon.svg" }
    ];

    return (
        <div className='md:w-64 w-[64px] border-r text-base border-gray-300 text-white
         flex flex-col backdrop-blur-xl overflow-y-hidden'>
            {menuItems.map((item) => {

                const isActive = pathname === item.path;

                return (
                    <Link href={item.path} key={item.name} passHref className='border border-white'>
                        <div
                            className={
                                `flex items-center py-3 px-4 gap-3 ${isActive
                                    ? "border-r-4 md:border-r-[6px] secondary-color/10 border-amber-500/90"
                                    : "border-white"
                                }`
                            }
                        >
                            <Image
                                width={20}
                                height={20}
                                src={item.icon}
                                alt={`${item.name.toLowerCase()}_icon`}
                                className="w-7 h-7 invert"
                            />
                            <p className='md:block hidden text-center'>{item.name}</p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default SideBar;
