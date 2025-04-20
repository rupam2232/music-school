import { Meteors } from "@/components/ui/meteors";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 pt-36">
      <Meteors number={10} />
      <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 dark:text-white">
        Contact Us
      </h1>
      <div className="px-4 lg:px-0 md:w-[45rem] lg:w-[30rem] mx-auto">
      <p className="text-center text-base text-gray-700 dark:text-gray-300 mb-8">
        We&apos;re here to help with any questions about our courses, programs,
        or events. Reach out and let us know how we can assist you in your
        musical journey.
      </p>
      <input required type="email" placeholder="Your email address" className="w-full border border-zinc-500 rounded-md px-4 py-2 text-sm dark:bg-black" />
      <textarea required placeholder="Your message" rows={4} className="w-full mt-4 resize-none border border-zinc-500 rounded-md px-4 py-2 text-sm dark:bg-black" />
      <button type="button" className="w-full mt-4 bg-teal-500 text-white rounded-md px-4 py-2 text-sm font-bold hover:bg-teal-600 transition duration-200 cursor-pointer">
        Send Message
      </button>
      </div>
    </div>
  );
};

export default page;
