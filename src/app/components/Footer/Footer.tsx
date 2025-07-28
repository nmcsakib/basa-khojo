'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white w-3/4 mx-auto rounded-lg shadow-sm m-4 dark:bg-gray-800 font-sans">
      <div className="w-full mx-auto p-4 md:flex md:items-center md:justify-between">
        <span className=" text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{' '}
          <Link
            href="https://www.facebook.com/nmcsakib.1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-green-400"
          >
            Sakib
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link href="/asbabpotro" className="hover:underline me-4 md:me-6">
              AsbabPotro
            </Link>
          </li>
          <li>
            <Link  href="https://www.facebook.com/nmcsakib.1" className="hover:underline text-green-400">
              Contact with Developer
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
