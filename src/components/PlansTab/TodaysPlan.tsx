'use client'
import { FitLogContext } from '@/contexts/FitLogContext';
import { oswald } from '@/lib/Fonts';
import Image from 'next/image';
import React, { useContext } from 'react';
import { FaRegStar } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';
import { PiFireSimpleFill } from 'react-icons/pi';

const TodaysPlan = () => {

  const { isTodaysPlan, setIsTodaysPlan } = useContext(FitLogContext)
  
  const {  } = isTodaysPlan;

  // const { name, image, equipment, muscleGroups, rating, duration, caloriesBurned, description, instructions, reps, difficulty, sets } = isTodaysPlan;


  return (
    <div>
      {
        isTodaysPlan.map((FitLog) => {
          

          const { id, name, image, equipment, rating, duration, caloriesBurned, } = FitLog;


          return (
            <div key={id} className="card bg-[#15171D] shadow-sm rounded-2xl">
              <figure className='h-50'>
                <Image src={image} width={740} height={740} className='w-full h-auto object-cover' alt={`${name}`} />
              </figure>
              <div className="card-body">

                <h2 className={`card-title font-bold ${oswald.className}`}>{name.toUpperCase()}</h2>
                <p className='text-[12px] text-[#9CA3AF]'>{equipment}</p>

                <div className="divider my-2"></div>

                <div className='flex justify-start text-white items-center space-x-5'>
                  <div className='flex gap-1 items-center'><IoMdTime className='text-[16px] text-[#3B82F6]' /><span>{`${duration} min`}</span></div>

                  <div className='flex gap-1 items-center' ><PiFireSimpleFill className='text-[16px] text-[#FF6B00]' /><span>{`${caloriesBurned} kcal`}</span>
                  </div>

                  <div className='flex gap-1 items-center' ><FaRegStar className='text-[16px] text-[#FFC107]' /><span>{rating}</span>
                  </div>
                </div>

              </div>
            </div>
          )
        })
      }
      </div>
  );
};

export default TodaysPlan;