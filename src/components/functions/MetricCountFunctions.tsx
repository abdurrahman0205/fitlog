'use client'
import { FitLogContext } from '@/contexts/FitLogContext';
import React, { useContext } from 'react';

interface MFPropsType {
  request: string,
}

const MetricCountFunctions = ({request}:MFPropsType) => {

  // const { requested } = request

  const {isTodaysPlan, isSelected, isSaved} = useContext(FitLogContext);

  
  // Plan Count Section
  if (!isSelected && request === 'plan') {
    return isTodaysPlan.length;
  } 

  if (isSelected && request === 'plan') {
    return isSaved.length;
  } 


// Duration Total Count Section
  if (!isSelected && request === 'duration') {
   //Today's Plan
   return isTodaysPlan.reduce((total, currentValue,) => {
      const { duration } = currentValue;
      return total + duration;
    }, 0)

  }

  if (isSelected && request === 'duration') {
   //Saved Plan
   return isSaved.reduce((total, currentValue,) => {
      const { duration } = currentValue;
      return total + duration;
    }, 0)

  }

  //Calories Total Count Section
  if (!isSelected && request === 'calories') {
   //Today's Plan
   return isTodaysPlan.reduce((total, currentValue,) => {
     const { caloriesBurned } = currentValue;
     return total + caloriesBurned;
    }, 0)

  }

  if (isSelected && request === 'calories') {
   //Saved Plan
   return isSaved.reduce((total, currentValue,) => {
     const { caloriesBurned } = currentValue;
     return total + caloriesBurned;
    }, 0)

  }

  return ''
};

export default MetricCountFunctions;