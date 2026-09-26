'use client'
import { SelectedPlanType, TheLibraryDataType } from '@/types/types';
import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

 export interface FitLogContextDataType {
  selectedPlan: SelectedPlanType,
  setSelectedPlan: Dispatch<SetStateAction<SelectedPlanType>>,
  isTodaysPlan: TheLibraryDataType[],
  setIsTodaysPlan: Dispatch<SetStateAction<TheLibraryDataType[]>>,
  isSaved: TheLibraryDataType[],
   setIsSaved: Dispatch<SetStateAction<TheLibraryDataType[]>>,
   sortBy: 'duration' | 'calories' | 'rating',
   setSortBy: Dispatch<SetStateAction<'duration' | 'calories' | 'rating'>>
  }
 
export const FitLogContext = createContext<FitLogContextDataType>(
  {
    selectedPlan:'today',
    setSelectedPlan: ()=>{},
    isTodaysPlan:[],
    setIsTodaysPlan: ()=> { },
    isSaved:[],
    setIsSaved: () => { },
    sortBy: 'duration',
    setSortBy: () => { },
  }
  );

const FitLogProvider = ({ children }: { children: ReactNode }) => {

  const [selectedPlan, setSelectedPlan] = useState<SelectedPlanType>('today');
  const [isTodaysPlan, setIsTodaysPlan] = useState<TheLibraryDataType[]>([]);
  const [isSaved, setIsSaved] = useState<TheLibraryDataType[]>([]);
  const [sortBy, setSortBy] = useState<'duration' | 'calories' |'rating'>('duration');


  const sharedData = {
    selectedPlan,
    setSelectedPlan,
    isTodaysPlan,
    setIsTodaysPlan,
    isSaved,
    setIsSaved,
    sortBy,
    setSortBy
  }

  return (<FitLogContext.Provider value={sharedData}>{children}</FitLogContext.Provider>
  );
};

export default FitLogProvider;