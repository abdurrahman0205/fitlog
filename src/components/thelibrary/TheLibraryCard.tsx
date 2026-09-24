import React from 'react';
import { TheLibraryDataType } from '@/types/types'
import Image from 'next/image';
import { IoMdTime } from 'react-icons/io';
import { FaRegStar } from 'react-icons/fa';
import { PiFireSimpleFill } from 'react-icons/pi';
import { oswald } from '@/lib/Fonts';
import Link from 'next/link';

interface TheLibraryCardProps {
  fitLog: TheLibraryDataType
}

const TheLibraryCard = ({ fitLog }: TheLibraryCardProps) => {

  const { id, name, image, equipment, muscleGroups, rating, duration, caloriesBurned } = fitLog


  return (
    <Link href={`/thelibrarydetails/${id}`}>
    <div className="card bg-base-100 shadow-sm rounded-2xl">
      <figure className='h-50'>
          <Image src={image} width={740} height={740} className='w-full h-auto object-cover' alt={`${name}`} />
      </figure>
      <div className="card-body">

        <div className='flex gap-2'>{
          muscleGroups.map((type, index) => {
            return (
              <div className='bg-[#C2F800] rounded-xl px-2 font-bold text-black text-[11px]' key={index}>{type.toUpperCase()}
              </div>
            );
          })
        }</div>
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
      </Link>
  );
};

export default TheLibraryCard;