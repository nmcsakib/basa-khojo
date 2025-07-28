"use client"
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

const Houses = () => {
       const pathname = usePathname();
    
      useEffect(() => {
        window.gtag('config', 'G-G1BVNBHWZH', {
          page_path: pathname,
        });
      }, [pathname]);
    return (
        <div>
            This is house list
        </div>
    );
};

export default Houses;