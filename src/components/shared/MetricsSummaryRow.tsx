import { oswald } from '@/lib/Fonts';
import React from 'react';
import MetricCountFunctions from '../functions/MetricCountFunctions';

const MetricsSummaryRow = () => {
  return (
    <div className='grid grid-cols-3 text-[#8A92A0] bg-[#13161D] border border-[#232732] items-center pl-7 rounded-2xl py-9'>
      <div className=''> 
        <h2 className='text-[15px]'>Exercises</h2>
        <h1 className={`text-[#CCFF00] text-[45px] font-bold ${oswald.className}`}>
          <MetricCountFunctions request={'plan'} />
        </h1>
      </div>   

      <div className=''> 
        <h2 className='text-[15px]' >Minutes</h2>
        <h1 className={`text-[#FFFFFF] text-[45px] font-bold ${oswald.className}`} >
          <MetricCountFunctions request={'duration'} />
        </h1>
      </div>   

      <div className=''> 
        <h2 className='text-[15px]'>Calories</h2>
        <h1 className={` text-[#FFFFFF] text-[45px] font-bold ${oswald.className}`} >
          <MetricCountFunctions request={'calories'} />
        </h1>
      </div>   
    </div>
  );
};

export default MetricsSummaryRow;
