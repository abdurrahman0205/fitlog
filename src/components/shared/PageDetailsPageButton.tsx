'use client'
import { FitLogContext } from '@/contexts/FitLogContext';
import { TheLibraryDataType } from '@/types/types';
import React, { useContext } from 'react';
import { PiCalendarPlus } from 'react-icons/pi';
import { VscBookmark } from 'react-icons/vsc';
import { Bounce, toast } from 'react-toastify';


const PageDetailsPageButton = ({ fitLog }: { fitLog: TheLibraryDataType }) => {

  const { isTodaysPlan, setIsTodaysPlan, isSaved, setIsSaved } = useContext(FitLogContext);

  const handleTodaysPlan = (fitLog: TheLibraryDataType) => {

    if (!isTodaysPlan.includes(fitLog)) {
      setIsTodaysPlan([...isTodaysPlan, fitLog]);
      toast.success(`Added ${fitLog.name} to your Today's Plan`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      })
    } else {
      toast.error(`${fitLog.name} is already added.`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      })
    }
  }

  const handleSavedPlan = (fitLog: TheLibraryDataType) => {

    if (!isSaved.includes(fitLog)) {
      setIsSaved([...isSaved, fitLog]);
      toast.success(`Saved ${fitLog.name} for later`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      })
    } else {
      toast.error(`${fitLog.name} is already saved.`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      })
    }


  }


  return (
    <div className='flex gap-4'>
      <button
        onClick={() => handleTodaysPlan(fitLog)}
        className='flex items-center gap-2 bg-[#CCFF00] rounded-xl text-black font-semibold text-[16px] py-3 px-6 cursor-pointer'><PiCalendarPlus className='text-[18px]' />Add to today&apos;s plan</button>

      <button

        onClick={() => handleSavedPlan(fitLog)}
        className='flex items-center gap-2 rounded-xl outline outline-[#374151] text-white font-semibold text-[16px] py-3 px-6 cursor-pointer'><VscBookmark className='text-[18px]' />Save for later</button>

    </div>
  );
};

export default PageDetailsPageButton;