
import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';


const PlanTabs = () => {
  return (
    <div className='grid grid-cols-2 items-center text-[14px] '>
      <div className='flex items-center justify-start'>
        <div className='bg-[#151921] border border-[#2B303D] rounded-[10px] p-0.75 space-x-1 text-center'>
          <button className='border border-[#2B303D] rounded-[9px] px-3.5 py-1.5 bg-[#1F242D]'>{`Today's Plan`}</button>

          <button className='rounded-[9px] px-3.5 py-1.5'>Saved</button>
          {/* border border-[#2B303D] */}
        </div>
      </div>

      <div className='flex gap-2 items-center justify-end'>
        <span>Sort By</span>
        <button className='flex items-center gap-0.5 border border-[#2B303D] rounded-[9px] px-3.5 py-1.5'>Duration <IoIosArrowDown className='text-[12px]' />
</button>
      </div>
    </div>
  );
};

export default PlanTabs;