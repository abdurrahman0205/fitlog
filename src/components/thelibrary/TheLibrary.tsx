import { oswald } from '@/fonts/Fonts';
import React from 'react';

const getData = async () => {
  const response = await fetch('https://api.abcz.workers.dev/api/fitlog');

  return response.json();
}

const TheLibrary = async () => {
  const FitLogData = await getData();

  console.log(FitLogData, 'data');
  return (
    <section id='library' className='mt-15'>
      <div className='container max-w-5xl mx-auto'>

        <div>
          <h1 className={`text-2xl text-[#ffff] font-bold ${oswald.className}`}>THE LIBRARY</h1>
          <p className='text-[#9CA3AF] text-[14px]'>Twelve lifts covering every major muscle group.</p>
        </div>

        <div>
          {}
        </div>

      </div>
    </section>
  );
};

export default TheLibrary;