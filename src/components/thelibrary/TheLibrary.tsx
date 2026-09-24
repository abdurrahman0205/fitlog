import { oswald } from '@/lib/Fonts';
import React from 'react';
import { TheLibraryDataType } from '@/types/types'
import TheLibraryCard from './TheLibraryCard';

export const getData = async () => {
  const response = await fetch('https://api.abcz.workers.dev/api/fitlog');

  return response.json();
}

const TheLibrary = async () => {
  const FitLogData = await getData();

  return (
    <section id='library' className='mt-15 '>
      <div className='container px-10 md:px-0 max-w-5xl mx-auto'>

        <div>
          <h1 className={`text-2xl text-[#ffff] font-bold ${oswald.className}`}>THE LIBRARY</h1>
          <p className='text-[#9CA3AF] text-[14px]mt-5'>Twelve lifts covering every major muscle group.</p>
        </div>

        <div className='grid md:grid-cols-3 gap-8 mt-10'>
          {
            FitLogData.map((fitLog: TheLibraryDataType) => {
              return (
                <div key={fitLog.id}>
                  <TheLibraryCard fitLog={fitLog} />
                </div>
              )

            })
          }
        </div>

      </div>
    </section>
  );
};

export default TheLibrary;