'use client'
import { FitLogContext } from '@/contexts/FitLogContext';
import React, { useContext } from 'react';

interface NavBarFunctionProps {
  request: string
}

const NavBarFunction = ({ request }: NavBarFunctionProps) => {
  
  const {isTodaysPlan, isSaved} = useContext(FitLogContext)

  if (request === 'plan') {
    return isTodaysPlan.length
  } 

  if (request === 'saved') {
    return isSaved.length
  } 

  return 0
};

export default NavBarFunction;