import BackButton from "@/components/BackButton";
import DetailCountrie from "@/components/DetailCountrie";
import DetailSkeleton from "@/components/skeleton/DetailSkeleton";
import BackSkeleton from "@/components/skeleton/BackSkeleton";
import { getDetailCountrieByCCA2 } from "@/lib/getDetailCountrieByCCA2";
import { Suspense } from "react";
const Page = async ({ params }) => {
  const { slug } = await params;
  const dataDetailPromise = getDetailCountrieByCCA2(slug);
  return (
    <div className="flex flex-col gap-8 items-start">
      <Suspense fallback={<BackSkeleton />}>
        <BackButton />
      </Suspense>
      <Suspense fallback={<DetailSkeleton />}>
        <DetailCountrie dataDetailPromise={dataDetailPromise} />
      </Suspense>
    </div>
  );
};

export default Page;
