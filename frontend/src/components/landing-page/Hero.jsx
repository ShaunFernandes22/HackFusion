import React from "react";

export default function Hero() {
  return (
    <section className="bg-black dark py-12 md:py-24">
      <div className="container px-4 flex flex-col gap-4 items-center text-center">
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            EduQuest
          </h1>
          <p className="text-gray-400 text-lg">
            The cutting-edge remote learning platform
          </p>
        </div>
        <div className="flex flex-col gap-4 lg:gap-8">
          <p className="text-gray-500 max-w-[700px] ">
            Revolutionizing the way students engage with educational content and
            interact with their peers and instructors.
          </p>
          <img
            alt="EduQuest"
            className="rounded-xl overflow-hidden"
            height="350"
            src="/placeholder.svg"
            style={{
              aspectRatio: "700/350",
              objectFit: "cover",
            }}
            width="700"
          />
        </div>
      </div>
    </section>
  );
}
