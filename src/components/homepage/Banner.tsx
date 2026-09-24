import Image from 'next/image';
import BannerImage from '@/assets/banner.png';
import { oswald } from '@/lib/Fonts';




const Banner = () => {
  return (
    <section className='mt-10'>
      <div className='container max-w-5xl mx-auto flex justify-between items-center py-10 px-12 bg-[#15171D] rounded-2xl border border-[#222630]'>
        <div className=''>
          <p className='mb-6 text-[#C2F800]'>WORKOUT LIBRARY</p>
          <h1 className={`${oswald.className} text-[50px]/12 font-extrabold`}>TRAIN WITH INTENT. LOG EVERY SET.</h1>
          <p className='max-w-120 mt-4 text-[#9CA3AF]'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.</p>
          <a href="#library"><button className='btn mt-6 bg-[#C2F800] border-none text-black'>BROWSE WORKOUTS</button></a>
        </div>
        <div> <Image src={BannerImage} width={500} height={500} alt='Banner'></Image> </div>
      </div>
    </section>
  );
};

export default Banner;