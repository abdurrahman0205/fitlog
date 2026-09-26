import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/assets/logo.svg';
import NavBarMiddleMenu from './NavBarMiddleMenu';
import NavBarFunction from '../functions/NavBarFunction';

const NavBar = () => {

  const navMenu = <>
    <li className='rounded border border-[#f0f0f077] mb-1 '>
      <Link href='/' className='text-[14px] font-bold'>Workouts</Link> </li>
    <li className='rounded border border-[#f0f0f077]'><Link href='/myplan' className='text-[14px] font-bold'>My Plan</Link></li>
 
  </>;

  return (
    <header className='bg-[#000000] shadow-sm border-b-2 border-[#1B1F28]'>
      <nav className=' container mx-auto max-w-5xl px-4 lg:px-0 pr-2.5 lg:pr-0'>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
              </div>
              {/* NavBar responsive Menu  */}
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content rounded-md z-1 mt-3 w-50 p-5 shadow border border-[#f0f0f03a] bg-black ">
                {navMenu}
              </ul>
            </div>
            <Link href='/' >
              <Image src={Logo} width={120} height={120} alt='Logo'></Image>
            </Link>
          </div>
          <div className="navbar-center hidden md:flex">
           {/* ul, NavBar Middle Menu */}
            <NavBarMiddleMenu />
          </div>
          <div className="navbar-end items-center space-x-4">
           
            <div className='flex items-center gap-1' >
              <Link href='/myplan' className='font-semibold text-white' >Plan</Link>
              <span className='inline-flex items-center justify-center rounded-full w-5 h-5 font-bold shrink-0 bg-[#C2F800] text-black'>
                <NavBarFunction request = 'plan' />
              </span>
            </div>

            <div className='flex items-center gap-2' >
              <Link href='/myplan' className='font-semibold text-white' >Saved</Link>
              <span className='inline-flex items-center justify-center rounded-full w-5 h-5 outline-2 outline-[#2D313B] font-bold shrink-0 text-white'><NavBarFunction request='saved' /></span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;