'use client'
import { TheLibraryDataType } from '@/types/types';
import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

 interface FitLogContextDataType {
  isSelected: boolean;
  setIsSelected: Dispatch<SetStateAction<boolean>>
  isTodaysPlan: TheLibraryDataType[]
  setIsTodaysPlan: Dispatch<SetStateAction<TheLibraryDataType[]>>
  isSaved: TheLibraryDataType[]
  setIsSaved: Dispatch<SetStateAction<TheLibraryDataType[]>>
}


export const FitLogContext = createContext<FitLogContextDataType>({});

const FitLogProvider = ({children}:{children: ReactNode}) => {

  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [isTodaysPlan, setIsTodaysPlan] = useState<TheLibraryDataType[]>([]);
  const [isSaved, setIsSaved] = useState<TheLibraryDataType[]>([]);


  const sharedData = {
    isSelected,
    setIsSelected,
    isTodaysPlan,
    setIsTodaysPlan,
    isSaved,
    setIsSaved

  }

  return (<FitLogContext.Provider value={sharedData}>{children}</FitLogContext.Provider>
  );
};

export default FitLogProvider;