import Link from "next/link";
import courseData from "../data/music_courses.json";
import { Button } from "./ui/moving-border";
import { GlowingEffect } from "./ui/glowing-effect";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

const FeaturedCourses = () => {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-12 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight dark:text-white sm:text-4xl">
            Learn With the Best
          </p>
        </div>
      </div>
      <div className="mt-10 px-4 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 justify-center">
          {featuredCourses.map((course: Course) => (
            <div
              key={course.id}
              className="relative border border-zinc-100 dark:border-zinc-600 h-full rounded-2xl p-2 md:rounded-3xl md:p-3"
            >
              <GlowingEffect
                blur={0}
                borderWidth={3}
                spread={80}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative border border-zinc-200 dark:border-zinc-800 flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 shadow-[0px_0px_27px_0px_#F5FFFA] dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {course.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {course.description}
                </p>
                <p className="mt-4 text-xl font-bold text-gray-800 dark:text-white">
                  ${course.price} <span className="line-through text-base">{course.price * 2}</span> <span className="text-sm">(Flat 50% off)</span>
                </p>
                <Link
                  href={`/courses/${course.slug}`}
                  className="mt-4 inline-block text-teal-600 hover:underline"
                >
                  View Course
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link href={"/courses"}>
          <Button
            duration={4000}
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 cursor-pointer hover:bg-neutral-100 dark:hover:bg-slate-800 hover:shadow-lg transition-all duration-200 ease-in-out"
          >
            View All Courses
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCourses;
