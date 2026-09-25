'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBarMiddleMenu = () => {
  const pathname = usePathname()
  let isMyPlan = false;
  if (pathname === '/myplan') {
      isMyPlan = true
  }


  const navMenu = <>
    <li>
      <Link href='/'
        className={`${!isMyPlan ? 'text-[#C2F800] font-semibold bg-[#C2F800]/20' : '' } rounded-2xl text-[#9CA3AF]`}>Workouts</Link> </li>

    <li><Link href='/myplan'

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