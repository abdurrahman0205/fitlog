import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <main className="min-h-screen bg-[#000] flex items-center justify-center px-5">
      <div className="w-full max-w-lg bg-black/50 rounded-3xl p-8 sm:p-12 text-center inset-ring-4 inset-ring-[#C1F801]/30 shadow-lg shadow-[#C1F801]">
        <div className="text-7xl sm:text-8xl font-bold tracking-tight text-white">
          404
        </div>

        <h1 className="mt-4 text-2xl font-bold text-black">
          Page not found
        </h1>

        <p className="mt-3 text-sm sm:text-base text-white">
          Looks like this page doesn&apos;st exist.
        </p>

        <Link
          href="/"
          className="inline-flex mt-7 px-6 py-3 rounded-xl bg-black text-white
                 text-sm font-semibold hover:bg-gray-800 transition-colors"
        >
          Go back home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;