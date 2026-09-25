'use client'
import { FitLogContext, FitLogContextDataType } from '@/contexts/FitLogContext';
import { TheLibraryDataType } from '@/types/types';
import React, { useContext } from 'react';

interface MFPropsType {
  request: string,
}



const MetricCountFunctions = ({request}:MFPropsType) => {

  const {isTodaysPlan, selectedPlan, isSaved} = useContext(FitLogContext);

  
  // Plan Count Section
  if (selectedPlan === 'today' && request === 'plan') {
    return isTodaysPlan.length;
  } 

  if (selectedPlan === 'saved' && request === 'plan') {
    return isSaved.length;
  } 


// Duration Total Count Section
  if (selectedPlan === 'today' && request === 'duration') {
   //Today's Plan
   return isTodaysPlan.reduce((total: number, currentValue: TheLibraryDataType,) => {
      const { duration } = currentValue;
      return total + duration;
    }, 0)

  }

  if (selectedPlan === 'saved' && request === 'duration') {
   //Saved Plan
    return isSaved.reduce((total: number, currentValue: TheLibraryDataType,) => {
      const { duration } = currentValue;
      return total + duration;
    }, 0)

  }

  //Calories Total Count Section
  if (selectedPlan === 'today' && request === 'calories') {
   //Today's Plan
    return isTodaysPlan.reduce((total: number, currentValue: TheLibraryDataType,) => {
     const { caloriesBurned } = currentValue;
     return total + caloriesBurned;
    }, 0)

  }

  if (selectedPlan === 'saved' && request === 'calories') {
   //Saved Plan
    return isSaved.reduce((total: number, currentValue: TheLibraryDataType,) => {
     const { caloriesBurned } = currentValue;
     return total + caloriesBurned;
    }, 0)

  }


};

export default MetricCountFunctions;