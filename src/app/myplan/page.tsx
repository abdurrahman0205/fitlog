import EmptyPlan from '@/components/shared/EmptyPlan';
import MetricsSummaryRow from '@/components/shared/MetricsSummaryRow';
import PlanTabs from '@/components/shared/PlanTabs';
import { oswald } from '@/lib/Fonts';


const MyPlanPage = () => {
  return (
    <section>
      <div className='container mx-auto max-w-5xl'>
        <div className='flex flex-col gap-6'>

          <div className='mt-13'>
            <h1 className={`${oswald.className} text-5xl font-bold text-[#FFFFFF]`}>MY PLAN</h1>
            <p className='text-[16px] text-[#8A92A0] mt-3'>Cap of five lifts for today. Finish them, then load more.</p>
          </div>

          <div> <MetricsSummaryRow /> </div>
          <div> <PlanTabs /> </div>

          <div className='mb-15'> <EmptyPlan/> </div>


        </div>
      </div>
    </section>
  );
};

export default MyPlanPage;