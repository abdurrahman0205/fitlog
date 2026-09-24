import Image from 'next/image';
import React from 'react';
import FooterLogo from '@/assets/logo.svg'
const Footer = () => {
  return (
    <footer className='border-t-2 border-[#1B1F28]'>
      <div className='container mx-auto flex justify-between items-center py-9'>
        <div><Image src={FooterLogo} width={40} height={40} className='w-20' alt='Footer Logo' /></div>

        <div><p className='text-[12px] text-[#6B7280]'>© 2026 FitLog — Workout Library. Train hard, log honest.</p></div>
      </div>
    </footer>
  );
};

export default Footer;