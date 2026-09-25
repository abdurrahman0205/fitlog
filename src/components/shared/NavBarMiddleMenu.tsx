'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const NavBarMiddleMenu = () => {

  // const [isSelected, setIsSelected] = useState('workouts');

  const pathname = usePathname()
  let isMyPlan = false;
  if (pathname === '/myplan') {
      isMyPlan = true
  }


  const navMenu = <>
    <li>
      <Link href='/'
      // onClick={() => setIsSelected('workouts')}
      // isSelected === 'workouts'
        className={`${!isMyPlan ? 'text-[#C2F800] font-semibold bg-[#C2F800]/20' : '' } rounded-2xl text-[#9CA3AF]`}>Workouts</Link> </li>

    <li><Link href='/myplan'
    // onClick={() => setIsSelected('myplan')}
    // isSelected === 'myplan'
      className={`${isMyPlan ? 'text-[#C2F800] font-semibold bg-[#C2F800]/20' : ''} rounded-2xl text-[#9CA3AF] hover:transition-[#C2F800]!`}
    >My Plan</Link></li>
  </>;

  return (
    <ul className="menu menu-horizontal px-1 font-semibold gap-2 text-[14px] ">
      {navMenu}

    </ul>
  );
};

export default NavBarMiddleMenu;