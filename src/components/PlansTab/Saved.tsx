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

  const { isSaved, setIsSaved, sortBy } = useContext(FitLogContext)

  const handleSavedPlanDelete = (fitLog: TheLibraryDataType) => {
    const restItem = isSaved.filter((deletedPlan: TheLibraryDataType) => deletedPlan !== fitLog)
    setIsSaved([...restItem]);
    toast.error(`Removed ${fitLog.name} from the list`)
  }

  // Sort By
  const sortList = (sortPlan: TheLibraryDataType[]) => {
    const sortedList = [...sortPlan];
    if (sortBy === 'duration') {
      sortedList.sort((a, b) => b.duration - a.duration)
    } else if (sortBy === 'calories') {
      sortedList.sort((a, b) => b.caloriesBurned - a.caloriesBurned)
    } else if (sortBy === 'rating') {
      sortedList.sort((a, b) => b.rating - a.rating)
    }
    return sortedList;
  }

  const sortedPlan = sortList(isSaved);


  return (
    <div className='grid grid-cols-1 md:grid-cols-2 plan:grid-cols-1 gap-3 '>
      {
        sortedPlan.map((FitLog: TheLibraryDataType) => {


          const { id, name, image, equipment, rating, duration, caloriesBurned, } = FitLog;


          return (
            <div key={id} className='w-full flex flex-col plan:flex-row  plan:justify-between plan:items-center rounded-2xl overflow-hidden plan:py-2 plan:px-3 border border-[#232732]'>

              <div className="plan:flex gap-3 plan:items-center">
                <figure className='2xl'>
                  <Image src={image} width={740} height={740} className='w-full h-70 plan:w-30 plan:h-20 object-cover plan:rounded-2xl' alt={`${name}`} />
                </figure>
                <div className="my-4 plan:my-0 mx-5 plan:mx-0 space-y-1">
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

              <div className='flex plan:gap-3 plan:justify-end items-center text-[13px] mb-6 plan:mb-0 justify-around'>
                
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