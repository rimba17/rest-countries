"use client";
import { useRouter } from "next/navigation";
import { IoIosArrowRoundBack } from "react-icons/io";
const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="mt-4 flex items-center gap-2 px-6 font-semibold py-2 rounded cursor-pointer bg-element-bg shadow-element-box"
    >
      <IoIosArrowRoundBack size={30} />
      Back
    </button>
  );
};

export default BackButton;
