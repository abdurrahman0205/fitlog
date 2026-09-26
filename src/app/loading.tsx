const GlobalLoading = () => {
  return (
    <section>
      <div className="container px-10 md:px-0 mx-auto max-w-5xl">

        {/* Banner */}
        <div className="mt-10 flex min-h-107.5 items-center justify-between gap-10 rounded-2xl border border-[#222630] bg-[#15171D] px-12 py-10">

          {/* Banner text */}
          <div className="w-full max-w-2xl space-y-5">
            <div className="skeleton h-5 w-40 bg-[#252A33]" />

            <div className="space-y-3">
              <div className="skeleton h-12 w-full bg-[#252A33]" />
              <div className="skeleton h-12 w-4/5 bg-[#252A33]" />
            </div>

            <div className="space-y-2">
              <div className="skeleton h-4 w-full bg-[#20242C]" />
              <div className="skeleton h-4 w-5/6 bg-[#20242C]" />
              <div className="skeleton h-4 w-3/5 bg-[#20242C]" />
            </div>

            <div className="skeleton h-12 w-48 rounded-md bg-[#252A33]" />
          </div>

          {/* Banner image */}
          <div className="hidden lg:block">
            <div className="skeleton h-90 w-90 rounded-2xl bg-[#20242C]" />
          </div>
        </div>


        {/* Library */}
        <div className="my-15">

          {/* Library heading */}
          <div className="space-y-3">
            <div className="skeleton h-8 w-48 bg-[#252A33]" />
            <div className="skeleton h-4 w-80 bg-[#20242C]" />
          </div>


          {/* Cards */}
          <div className="mt-10 grid gap-8 md:grid-cols-3">

            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-2xl bg-[#15171D]"
              >

                {/* Image */}
                <div className="skeleton h-50 w-full rounded-none bg-[#252A33]" />

                {/* Card body */}
                <div className="space-y-4 p-6">

                  {/* Muscle groups */}
                  <div className="flex gap-2">
                    <div className="skeleton h-5 w-16 rounded-xl bg-[#252A33]" />
                    <div className="skeleton h-5 w-20 rounded-xl bg-[#252A33]" />
                  </div>

                  {/* Title */}
                  <div className="skeleton h-6 w-40 bg-[#252A33]" />

                  {/* Equipment */}
                  <div className="skeleton h-4 w-24 bg-[#20242C]" />

                  {/* Divider */}
                  <div className="h-px bg-[#292E38]" />

                  {/* Stats */}
                  <div className="flex gap-5">
                    <div className="skeleton h-4 w-16 bg-[#20242C]" />
                    <div className="skeleton h-4 w-20 bg-[#20242C]" />
                    <div className="skeleton h-4 w-10 bg-[#20242C]" />
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default GlobalLoading;