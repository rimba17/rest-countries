import WrapperClient from "@/components/WrapperClient";
import HomeSkeleton from "@/components/skeleton/HomeSkeleton";
import { Suspense } from "react";
import { getCountries } from "@/lib/getCountries";
const Page = () => {
  const countriesData = getCountries();
  return (
    <Suspense fallback={<HomeSkeleton />}>
      <WrapperClient countriesData={countriesData} />
    </Suspense>
  );
};

export default Page;
