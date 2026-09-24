import { getData } from '@/components/thelibrary/TheLibrary';
import { oswald } from '@/lib/Fonts';
import { TheLibraryDataType } from '@/types/types';
import Image from 'next/image';
import React from 'react';



const TLDetailsPage = async({params,}:{params: Promise<{id: string}>}) => {

  const { id } = await params;

  const fitLogData = await getData();
  const fitLog = fitLogData.find((data: TheLibraryDataType) => data.id === Number(id));

  const { name, image, equipment, muscleGroups, rating, duration, caloriesBurned, description, instructions, reps, difficulty, sets } = fitLog


  const tableDetails = [
    ["equipment", equipment],
    ["difficulty", difficulty],
    ["sets", sets],
    ["reps", reps],
    ["duration", `${duration} min`],
    ["calories", `${caloriesBurned} kcal`],
    ["rating", rating],
  ];
 
  return (
    <section>

      <div className='container px-10 md:px-0 mx-auto max-w-5xl mt-15'>
      
        <div className='grid md:grid-cols-2 gap-5 justify-between'>
          <div className=''><Image src={image} width={740} height={740} className='w-full h-auto rounded-md' alt={name} /></div>


          <div className='space-y-5'>
            <h1 className={`text-3xl font-bold text-white ${oswald.className}`}>{name.toUpperCase()}</h1>
            <p className='text-[#9CA3AF] text-[15px]'>{description}</p>
            
            <div className='flex gap-2'>{
              muscleGroups.map((type: string, index: number) => {
                return (
                  <div className='bg-[#C2F800] rounded-xl px-2 font-bold text-[14px] text-black' key={index}>{type}
                  </div>
                );
              })
            }</div>


            
            <div className='bg-[#151922] border border-[#20242E] rounded-2xl grid grid-cols-1 overflow-hidden'>
              {tableDetails.map((value, index) => {
                
                return (
                  <div key={index} className='w-full border-b border-[#20242E]'>
                    <div className='flex justify-between items-center mx-6 py-3'>
                      <h3 className={`text-[#9CA3AF] font-bold text-[13px]`}>{value[0].toUpperCase()}</h3>
                      <p className='text-[13px]'>{value[1]}</p>
                    </div>
                  </div>
                )
              })}


            </div>
            
            
            <div className=''>
              <h2 className='mt-6 mb-4 font-bold'>INSTRUCTIONS</h2>
              <ol className='list-decimal list-inside space-y-2 text-[14px]' >{instructions.map((item: string, index: number) =>
                <li key={index} className='text-[#D1D5DB]'>{item}</li>)}
              </ol>
            </div>

            <div>
              <button></button>
              <button></button>
            </div>

          </div>
        </div>
      </div> 
    </section>
  );
};

export default TLDetailsPage;