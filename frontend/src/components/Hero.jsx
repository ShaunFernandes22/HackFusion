import React from "react";
import { useNavigate } from "react-router";
import { ReactTyped } from "react-typed";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="text-white">
      <div className=" border-gray-200 px-4 lg:px-6 py-8">
        <div className="max-w-[1200px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold p-2 text-2xl">
            Revolutionizing student success
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
            Navigate e-Learning Your Way
          </h1>
          <div className="flex justify-center items-center">
            <ReactTyped
              className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
              strings={[
                "Elevating Education",
                "Empowering Educators",
                "Enhancing Learning",
              ]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
          <p className="md:text-2xl text-xl font-bold text-gray-500 p-2 top-2">
            From Campus to Cloud: Revolutionizing Student Learning!
          </p>
          <button
            className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black"
            onClick={() => navigate("/meeting")}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
