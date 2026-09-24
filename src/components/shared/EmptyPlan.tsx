import { oswald } from '@/lib/Fonts';
import Link from 'next/link';
import React from 'react';

const EmptyPlan = () => {
  return (
    <div>
      <div className='flex justify-center items-center min-h-87.5 border border-dashed rounded-2xl border-[#FFFF]/30'>
        <div className='flex flex-col items-center text-center'>
          <h1 className={`${oswald.className} text-2xl font-bold text-white`}>NOTHING HERE YET</h1>
          <p className='text-[13px] text-[#A1A1AA] mt-2'>Browse the library and add a lift to get today moving.</p>

          <Link href='/' className='text-center text-black bg-[#C2F10D] text-[13px] font-semibold rounded-2xl mt-6 py-2 px-3 coursor-pointer'>Go to workouts</Link>
        </div>
      </div>
    </div>
  );
};

export default EmptyPlan;