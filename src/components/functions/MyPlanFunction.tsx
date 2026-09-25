'use client'
import React, { useContext } from 'react';
import TodaysPlan from '../PlansTab/TodaysPlan';
import { FitLogContext } from '@/contexts/FitLogContext';
import EmptyPlan from '../shared/EmptyPlan';
import Saved from '../PlansTab/Saved';

const MyPlanFunction = () => {

  const { selectedPlan, isTodaysPlan, isSaved } = useContext(FitLogContext);


  if (selectedPlan === 'today') {

    if (isTodaysPlan.length === 0) {
      return <EmptyPlan />
    } else {
      return <TodaysPlan />
    }
  } else {
    if (isSaved.length === 0) {
      return <EmptyPlan />
    } else {
    return <Saved />
  }
}


};

export default MyPlanFunction;