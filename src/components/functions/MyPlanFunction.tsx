'use client'
import React, { useContext } from 'react';
import TodaysPlan from '../PlansTab/TodaysPlan';
import { FitLogContext } from '@/contexts/FitLogContext';
import EmptyPlan from '../shared/EmptyPlan';
import Saved from '../PlansTab/Saved';

const MyPlanFunction = () => {

  const { isSelected, setIsSelected, isTodaysPlan, isSaved } = useContext(FitLogContext);



  if (isTodaysPlan.length === 0) {
    return <EmptyPlan />
  } else if (!isSelected) {
    return <TodaysPlan />
  }

  if (isSaved.length === 0) {
    return <EmptyPlan />
  } else if (isSelected) {
    return <Saved />
  }


  return '';
};

export default MyPlanFunction;