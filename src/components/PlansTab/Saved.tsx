'use client'
import { FitLogContext } from '@/contexts/FitLogContext';
import { oswald } from '@/lib/Fonts';
import { TheLibraryDataType } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { FaRegStar } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';
import { PiFireSimpleFill } from 'react-icons/pi';
import { RxCross2 } from 'react-icons/rx';
import { toast } from 'react-toastify';

const Saved = () => {

  const { isSaved, setIsSaved } = useContext(FitLogContext)

  const handleSavedPlanDelete =(fitLog: TheLibraryDataType) => {
      const restItem = isSaved.filter((deletedPlan: TheLibraryDataType) => deletedPlan !== fitLog)
      setIsSaved([...restItem]);
      toast.error(`Removed ${fitLog.name} from the list`)
    } 


  return (
    <div className='grid grid-cols-1 gap-3'>
      {
        isSaved.map((FitLog: TheLibraryDataType) => {


          const { id, name, image, equipment, rating, duration, caloriesBurned, } = FitLog;


          return (
            <div key={id} className='w-full bg-gray-00 flex justify-between items-center rounded-2xl overflow-hidden py-2 px-3 border border-[#232732]'>

              <div className="flex gap-3 items-center">
                <figure className='2xl'>
                  <Image src={image} width={740} height={740} className='w-30 h-20 object-cover rounded-2xl' alt={`${name}`} />
                </figure>
                <div className="">
                  {/* card-body*/}

                  <h2 className={`font-bold ${oswald.className}`}>{name.toUpperCase()}</h2>
                  <p className='text-[12px] text-[#black]'>{equipment}</p>



                  <div className='flex justify-start text-white items-center space-x-5'>
                    <div className='flex gap-1 items-center'><IoMdTime className='text-[16px] text-[#CCFF00]' /><span>{`${duration} min`}</span></div>

                    <div className='flex gap-1 items-center' ><PiFireSimpleFill className='text-[16px] text-[#CCFF00]' /><span>{`${caloriesBurned} kcal`}</span>
                    </div>

                    <div className='flex gap-1 items-center' ><FaRegStar className='text-[16px] text-[#CCFF00]' /><span>{rating}</span>
                    </div>
                  </div>

                </div>
              </div>
              {/* Button part */}

              <div className='flex gap-3 justify-end items-center text-[13px] text-black'>
                <Link href={`/thelibrarydetails/${id}`} className='text-white rounded-2xl cursor-pointer py-2 px-5 outline outline-[#374151]'>View Details</Link>

                <RxCross2
                  onClick={() => handleSavedPlanDelete(FitLog)}
                  className='text-[#6B7280] text-[25px] mr-5 cursor-pointer' />
              </div>

            </div>
          )
        })
      }
    </div>
  );
};

export default Saved;