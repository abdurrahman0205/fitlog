'use client'
import { FitLogContext } from '@/contexts/FitLogContext';
import React, { useContext } from 'react';


const PlanTabs = () => {

  const { selectedPlan, setSelectedPlan } = useContext(FitLogContext);



  return (
    <div className='grid grid-cols-2 items-center text-[14px] '>
      <div className='flex items-center justify-start'>
        <div className='bg-[#151921] border border-[#2B303D] rounded-[10px] p-0.75 space-x-0.5 text-center'>
          <button
            onClick={() => setSelectedPlan('today')}
            className={`cursor-pointer rounded-[9px] px-3.5 py-1.5 ${selectedPlan === 'today' ? 'border border-[#2B303D] bg-[#1F242D]' : ''}`}>Today&apos;s</button>

          <button
            onClick={() => setSelectedPlan('saved')}
            className={`cursor-pointer rounded-[9px] px-3.5 py-1.5 ${selectedPlan === 'saved' ? 'border border-[#2B303D] bg-[#1F242D]' : ''}`}>Saved</button>

        </div>
      </div>

      <div className='flex gap-2 items-center justify-end'>
        <span>Sort By</span>
        <select defaultValue='Duration'
          className='flex items-center gap-0.5 border border-[#2B303D] rounded-[9px] px-3.5 py-1.5'>
          <option disabled={true}>Select</option>
          <option>Duration</option>
          <option>Rating</option>
          <option>Calorie</option>
        </select>
      </div>
    </div>
  );
};

export default PlanTabs;