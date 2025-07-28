'use client';

import BasicSwipeCard from '../ToolTip';

export default function Footer() {
  return (
    <footer className=" flex flex-col md:flex-row justify-between gap-5 items-center mx-auto rounded-lg shadow-sm m-4 font-sans">
<BasicSwipeCard/>
      <div className=" mx-auto md:w-1/2 text-center py-3 px-5 rounded-md bg-slate-800 text-white/90">
     © All rights reserved 2025
      </div>
    </footer>
  );
}
