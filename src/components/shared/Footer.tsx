import Image from 'next/image';
import React from 'react';
import FooterLogo from '@/assets/logo.svg'
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className='border-t-2 border-[#1B1F28]'>
      <div className='container mx-auto flex flex-col justify-center gap-8 md:gap-0 md:flex-row md:justify-between items-center py-9'>
        <div><Link href='/'><Image src={FooterLogo} width={40} height={40} className='w-25 lg:w-20' alt='Footer Logo' /></Link></div>

        <div><p className='text-[12px] text-[#6B7280]'>© 2026 FitLog — Workout Library. Train hard, log honest.</p></div>
      </div>
    </footer>
  );
};

export default Footer;