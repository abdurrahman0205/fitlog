import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-5">
      <div className="w-full max-w-lg bg-black/50 rounded-3xl p-8 sm:p-12 text-center inset-shadow-sm inset-shadow-white shadow-md shadow-[#C1F801]">
        <div className="text-7xl sm:text-8xl font-bold tracking-tight
        bg-linear-to-b from-0% from-white to-100% to-[#C1F801]
         bg-clip-text text-transparent">
          404
          
        </div>

        <h1 className="mt-4 text-2xl font-bold text-[#C1F801]">
          Page not found
        </h1>

        <p className="mt-3 text-sm sm:text-base text-[#C1F801]">
          Looks like this page doesn&apos;st exist.
        </p>

        <Link
          href="/"
          className="inline-flex mt-7 px-6 py-3 rounded-xl bg-black text-[#C1F801]
                 text-sm font-semibold border border-white/30 hover:bg-white/20 hover:text-white transition-colors"
        >
          Go back home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;