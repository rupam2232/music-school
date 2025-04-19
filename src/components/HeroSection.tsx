import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-zinc-400 to-black dark:from-neutral-50 dark:to-neutral-500">
          Master the art of music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg dark:text-neutral-300 max-w-lg mx-auto">
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether you&apos;re a beginner or looking to refine
          your skills, join us to unlock your true potential.
        </p>
        <div className="mt-4">
          <Link href={"/courses"}>
            <Button
            duration={4000}
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 cursor-pointer hover:bg-neutral-100 dark:hover:bg-slate-800 hover:shadow-lg transition-all duration-200 ease-in-out"
            >
              Explore courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
