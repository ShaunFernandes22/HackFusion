import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full py-16 text-center md:py-24 lg:py-32 xl:py-40">
      <div className="container px-4 md:px-6">
        <div className="max-w-[600px] mx-auto space-y-4">
          <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-white-800">
            Professional Meetings
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl/line-tight lg:text-7xl/line-tight font-secondary">
            Elevate Your Meetings with EduQuest
          </h1>
          <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            The all-in-one platform for productive and engaging meetings. With
            EduQuest's advanced AI features, you can ensure that every meeting
            is efficient, inclusive, and impactful.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
