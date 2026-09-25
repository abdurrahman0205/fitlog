'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const NavBarMiddleMenu = () => {

  const [isSelected, setIsSelected] = useState('workouts');


  const navMenu = <>
    <li>
      <Link href='/'
        onClick={() => setIsSelected('workouts')}
        className={`${isSelected === 'workouts' ? 'text-[#C2F800] font-semibold bg-[#C2F800]/20':'' } rounded-2xl text-[#9CA3AF]`}>Workouts</Link> </li>

    <li><Link href='/myplan'
      onClick={() => setIsSelected('myplan')}
      className={`${isSelected === 'myplan' ?'text-[#C2F800] font-semibold bg-[#C2F800]/20':''} rounded-2xl text-[#9CA3AF]`}
    >My Plan</Link></li>
  </>;

  return (
    <ul className="menu menu-horizontal px-1 font-semibold gap-2 text-[14px] ">
      {navMenu}

    </ul>
  );
};

export default NavBarMiddleMenu;