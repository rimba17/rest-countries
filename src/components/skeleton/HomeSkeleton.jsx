const HomeSkeleton = () => {
  return (
    <div className="flex flex-col gap-6 animate-pulse">
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
        {/* Search Skeleton */}
        <div className="md:w-2/3 lg:w-1/2 relative">
          <div className="h-12 w-full rounded-md bg-element-bg shadow-element-box" />
        </div>

        {/* Filter Skeleton */}
        <div className="w-2/3 md:w-1/3 lg:w-1/4 relative">
          <div className="h-12 w-full rounded-md bg-element-bg shadow-element-box" />
        </div>
      </div>

      {/* Card Grid */}
      <div className="px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 md:px-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            className="flex flex-col gap-6 bg-element-bg rounded-md shadow pb-4"
            key={i}
          >
            {/* Image */}
            <div className="relative w-full aspect-[2/1] bg-gray-300" />
            {/* Content */}
            <div className="px-4 flex flex-col gap-4">
              <div className="h-6 w-3/4 bg-gray-300 rounded" />
              <div>
                <div className="flex flex-col gap-2">
                  <div className="h-4 w-1/2 bg-gray-300 rounded" />
                  <div className="h-4 w-2/3 bg-gray-300 rounded" />
                  <div className="h-4 w-1/3 bg-gray-300 rounded" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSkeleton;
