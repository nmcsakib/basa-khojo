import React from 'react';

const Btn = ({children}: {children: React.ReactNode}) => {
    return (
        <>
         <button className="cursor-pointer font-sans relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group animate-pulse">
    <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
    <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 group-hover:translate-x-56 -translate-y-24 bg-white opacity-100 -translate-x-8"></span>
    <span className="relative w-full text-left text-gray-900 transition-colors duration-200 ease-in-out group-hover:text-white">{children}</span>
    <span className="absolute inset-0 border-2 border-white rounded-full"></span>
</button>

        </>
    );
};

export default Btn;

