import Link from "next/link";
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'


function StudioNavbar(props: any) {
  return (
    <div className="bg-[#1a1a1a]">
      <div className="flex items-center justify-between p-5">
        <Link href="/blog" className="text-[#FDC82B] flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 text-[#FDC82B] mr-2" />
          Go To Blog
        </Link>

        <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#FDC82B]">
          <h1 className="font-bold text-white">Want to plan a trip 👉</h1>
          <Link href={"/create-trip"} className="text-[#FDC82B] font-bold ml-2">
            www.aitripio.com/create-trip
          </Link>
        </div>
      </div>
      <>
        {props.renderDefault(props)}
      </>
    </div>
  );
};
export default StudioNavbar;
