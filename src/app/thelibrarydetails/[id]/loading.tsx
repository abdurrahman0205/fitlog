import React from 'react';

const DetailsPageLoading = () => {
  return (
    <section>
      <div className="container mx-auto mt-15 mb-18 max-w-5xl px-10 md:px-0">
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">

          {/* Image skeleton */}
          <div>
            <div className="skeleton h-auto aspect-square w-full rounded-md bg-[#20242E]" />
          </div>

          {/* Details */}
          <div className="space-y-5">

            {/* Title */}
            <div className="skeleton h-10 w-3/4 rounded-md bg-[#20242E]" />

            {/* Description */}
            <div className="space-y-2">
              <div className="skeleton h-4 w-full rounded bg-[#20242E]" />
              <div className="skeleton h-4 w-11/12 rounded bg-[#20242E]" />
              <div className="skeleton h-4 w-4/5 rounded bg-[#20242E]" />
            </div>

            {/* Muscle tags */}
            <div className="flex gap-2">
              <div className="skeleton h-6 w-16 rounded-xl bg-[#20242E]" />
              <div className="skeleton h-6 w-20 rounded-xl bg-[#20242E]" />
            </div>

            {/* Details table */}
            <div className="overflow-hidden rounded-2xl border border-[#20242E] bg-[#151922]">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between border-b border-[#20242E] px-6 py-3 last:border-b-0"
                >
                  <div className="skeleton h-4 w-24 rounded bg-[#20242E]" />
                  <div className="skeleton h-4 w-20 rounded bg-[#20242E]" />
                </div>
              ))}
            </div>

            {/* Instructions */}
            <div>
              <div className="skeleton mb-5 h-6 w-32 rounded bg-[#20242E]" />

              <div className="space-y-3">
                <div className="skeleton h-4 w-full rounded bg-[#20242E]" />
                <div className="skeleton h-4 w-11/12 rounded bg-[#20242E]" />
                <div className="skeleton h-4 w-10/12 rounded bg-[#20242E]" />
                <div className="skeleton h-4 w-9/12 rounded bg-[#20242E]" />
              </div>
            </div>

            {/* Button */}
            <div className="mt-8">
              <div className="skeleton h-12 w-full rounded-xl bg-[#20242E]" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsPageLoading;