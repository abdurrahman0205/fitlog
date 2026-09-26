import React from 'react';

const MyPlanLoading = () => {
  return (
    <section>
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col gap-6">

          {/* Header */}
          <div className="mt-13 space-y-3">
            <div className="skeleton h-14 w-64 rounded-md" />
            <div className="skeleton h-5 w-96 max-w-full rounded-md" />
          </div>

          {/* MetricsSummaryRow */}
          <div className="grid grid-cols-3 items-center rounded-2xl border border-[#232732] bg-[#13161D] py-9 pl-7">

            <div className="space-y-3">
              <div className="skeleton h-4 w-20" />
              <div className="skeleton h-12 w-14" />
            </div>

            <div className="space-y-3">
              <div className="skeleton h-4 w-16" />
              <div className="skeleton h-12 w-14" />
            </div>

            <div className="space-y-3">
              <div className="skeleton h-4 w-16" />
              <div className="skeleton h-12 w-16" />
            </div>

          </div>

          {/* PlanTabs */}
          <div className="flex gap-2">
            <div className="skeleton h-10 w-24 rounded-xl" />
            <div className="skeleton h-10 w-24 rounded-xl" />
          </div>

          {/* TodaysPlan / Saved */}
          <div className="mb-15 grid grid-cols-1 gap-3">

            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="flex w-full items-center justify-between overflow-hidden rounded-2xl border border-[#232732] px-3 py-2"
              >
                {/* Exercise info */}
                <div className="flex items-center gap-3">

                  <div className="skeleton h-20 w-30 shrink-0 rounded-2xl" />

                  <div className="flex flex-col gap-3">
                    <div className="skeleton h-5 w-40" />
                    <div className="skeleton h-3 w-24" />

                    <div className="flex gap-5">
                      <div className="skeleton h-3 w-14" />
                      <div className="skeleton h-3 w-16" />
                      <div className="skeleton h-3 w-8" />
                    </div>
                  </div>

                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <div className="skeleton h-9 w-28 rounded-2xl" />
                  <div className="skeleton h-9 w-32 rounded-2xl" />
                  <div className="skeleton h-6 w-6 rounded-full" />
                </div>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default MyPlanLoading;