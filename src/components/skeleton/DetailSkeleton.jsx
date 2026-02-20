const DetailSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-4 py-3 md:grid-cols-2 md:gap-12 lg:items-center animate-pulse">
      {/* image */}
      <div className="relative w-full aspect-[2/1] lg:aspect-square bg-gray-300 rounded-md" />
      {/* content */}
      <div className="flex flex-col gap-6">
        <div className="h-6 w-3/4 bg-gray-300 rounded" />
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:w-full">
          <div className="space-y-2 w-full">
            {Array.from({ length: 4 }).map((_, i) => (
              <div className="h-4 w-full bg-gray-300 rounded-md" key={i} />
            ))}
          </div>
          <div className="space-y-2 w-full">
            {Array.from({ length: 4 }).map((_, i) => (
              <div className="h-4 w-full bg-gray-300 rounded-md" key={i} />
            ))}
          </div>
        </div>
        {/* border countries */}
        <div className="flex flex-col gap-3">
          <div className="h-5 w-1/3 bg-gray-300 rounded" />
          <div className="flex gap-2 flex-wrap">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-8 w-20 bg-gray-300 rounded-md" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSkeleton;
