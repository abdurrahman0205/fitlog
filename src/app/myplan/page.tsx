import MetricsSummaryRow from '@/components/shared/MetricsSummaryRow';
import PlanTabs from '@/components/PlansTab/PlanTabs';
import { oswald } from '@/lib/Fonts';

import MyPlanFunction from '@/components/functions/MyPlanFunction';


const MyPlanPage = () => {
  return (
    <section>
      <div className='container mx-auto max-w-5xl px-5 lg:px-0'>
        <div className='flex flex-col gap-6'>

          <div className='mt-13'>
            <h1 className={`${oswald.className} text-5xl font-bold text-[#FFFFFF]`}>MY PLAN</h1>
            <p className='text-[16px] text-[#8A92A0] mt-3'>Cap of five lifts for today. Finish them, then load more.</p>
          </div>

          <div> <MetricsSummaryRow /> </div>
          <div> <PlanTabs /> </div>

          <div className='mb-15'>
            <MyPlanFunction />
          </div>


        </div>
      </div>
    </section>
  );
};

export default MyPlanPage;