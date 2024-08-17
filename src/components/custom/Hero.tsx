import Link from "next/link";
import Image from "next/image";

import { Button } from "../ui/button";

function Hero() {
  return (
    <div className="flex flex-col items-center mx-56 gap-9">
        <h1 className="font-extrabold text-[50px] text-center mt-16">
            <span className="bg-gradient-to-bl from-yellow-500 via-purple-500 to-blue-500 inline-block text-transparent bg-clip-text">  
                Unlock Your Dream Journey with AI: 
            </span>
            Custom Plans in Seconds
        </h1>
        <p className="text-xl text-gray-500 text-center">
            Your ultimate travel curator and trip planner, crafting bespoke itineraries perfectly aligned with your interests and budget.
        </p>

        <Link href={"/create-trip"} passHref>
            <Button>Get Started, It's Free</Button>
        </Link>
        
        <Image
            src="/landing.png"
            alt="Cover" 
            width={800}
            height={800}
            className="mt-5"
        />
    </div>
  );
};
export default Hero;