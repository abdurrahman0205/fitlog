'use client'
import { FitLogContext } from '@/contexts/FitLogContext';
import { TheLibraryDataType } from '@/types/types';
import React, { useContext } from 'react';
import { PiCalendarPlus } from 'react-icons/pi';
import { VscBookmark } from 'react-icons/vsc';


const PageDetailsPageButton = ({ fitLog }: { fitLog: TheLibraryDataType }) => {

  const {isTodaysPlan, setIsTodaysPlan, isSaved, setIsSaved  } = useContext(FitLogContext);
  
  const handleTodaysPlan = (fitLog: TheLibraryDataType) => {
    setIsTodaysPlan([...isTodaysPlan, fitLog]);
  }
  
  const handleSavedPlan = (fitLog: TheLibraryDataType) => {
    setIsSaved([...isSaved, fitLog]);
    console.log(isSaved,'This is saved plan Rendering');
  }
  
 


  return (
    <div className='flex gap-4'>
      <button
        onClick={()=> handleTodaysPlan(fitLog)}
        className='flex items-center gap-2 bg-[#CCFF00] rounded-xl text-black font-semibold text-[16px] py-3 px-6 cursor-pointer'><PiCalendarPlus className='text-[18px]' />Add to today&apos;s plan</button>

      <button
        
        onClick={() => handleSavedPlan(fitLog)}
        className='flex items-center gap-2 rounded-xl outline outline-[#374151] text-white font-semibold text-[16px] py-3 px-6'><VscBookmark className='text-[18px]' />Save for later</button>
      
    </div>
  );
};

export default PageDetailsPageButton;