import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/assets/logo.svg';
import NavBarMiddleMenu from './NavBarMiddleMenu';

const NavBar = () => {

  const navMenu = <>
    <li className='text-[#C2F800] rounded-2xl bg-[#C2F800]/20'>
      <Link href='/'>Workouts</Link> </li>
    <li className='hover:bg-none'><Link href='/myplan'>My Plan</Link></li>
  </>;

  return (
    <header className='bg-[#000000] shadow-sm border-b-2 border-[#1B1F28]'>
      <nav className=' container mx-auto max-w-5xl'>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
              </div>
              {/* ul, NavBar responsive Menu  */}
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow ">
                {navMenu}
              </ul>
            </div>
            <Link href='/' >
              <Image src={Logo} width={120} height={120} alt='Logo'></Image>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
           {/* ul, NavBar Middle Menu */}
            <NavBarMiddleMenu />
          </div>
          <div className="navbar-end items-center space-x-4">
           
            <div className='flex items-center gap-1' >
              <Link href='/myplan' className='font-semibold text-white' >Plan</Link>
              <span className='inline-flex items-center justify-center rounded-full w-5 h-5 font-bold shrink-0 bg-[#C2F800] text-black'>0</span>
            </div>

            <div className='flex items-center gap-2' >
              <Link href='/myplan' className='font-semibold text-white' >Saved</Link>
              <span className='inline-flex items-center justify-center rounded-full w-5 h-5 outline-2 outline-[#2D313B] font-bold shrink-0 text-white'>0</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;