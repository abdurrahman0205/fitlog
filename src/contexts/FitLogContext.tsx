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
  }
 
  export const FitLogContext = createContext<FitLogContextDataType | null>(null);

const FitLogProvider = ({ children }: { children: ReactNode }) => {

  const [selectedPlan, setSelectedPlan] = useState<SelectedPlanType>('today');
  const [isTodaysPlan, setIsTodaysPlan] = useState<TheLibraryDataType[]>([]);
  const [isSaved, setIsSaved] = useState<TheLibraryDataType[]>([]);


  const sharedData = {
    selectedPlan,
    setSelectedPlan,
    isTodaysPlan,
    setIsTodaysPlan,
    isSaved,
    setIsSaved

  }

  return (<FitLogContext.Provider value={sharedData}>{children}</FitLogContext.Provider>
  );
};

export default FitLogProvider;