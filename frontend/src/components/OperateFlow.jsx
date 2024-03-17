import React from "react";

const OperateFlow = () => {
  return (
    <div>
      <h2 className="text-3xl  text-[#00df9a] font-bold md:py-6  flex justify-center items-center mb-24 -ml-60 ">
        How do we operate
      </h2>

      <div
        className=" h-96 steps-path w-full ml-30 mb-40 flex justify-center items-center"
        data-aos="fade"
      >
        <svg viewBox="0 0 1000 400" id="stepPath">
          <path
            className="steps "
            pathLength="100"
            d="M 100 200 C 250 200 150 50 300 50 L 500 50 C 650 50 550 200 700 200 L 900 200"
          />
          <path
            className="steps"
            pathLength="100"
            d="M 100 200 C 250 200 150 350 300 350 L 500 350 C 650 350 550 200 700 200 L 900 200 "
          />
          <text
            className="path-text-1"
            dominantBaseline="middle"
            textAnchor="middle"
            x="50"
            y="200"
            fontSize="16pt"
            fill="white"
          >
            Sign Up
          </text>
          <text
            className="path-text-2"
            dominantBaseline="middle"
            textAnchor="middle"
            x="275"
            y="25"
            fill="white"
            fontSize="16pt"
          >
            Teacher creates meet
          </text>
          <text
            className="path-text-2"
            dominantBaseline="middle"
            textAnchor="middle"
            x="275"
            y="375"
            fill="white"
            fontSize="16pt"
          >
            Student joins meet
          </text>
          <text
            className="path-text-3"
            dominantBaseline="middle"
            textAnchor="middle"
            x="525"
            y="375"
            fill="white"
            fontSize="16pt"
          >
            Attends lecture
          </text>
          <text
            className="path-text-3"
            dominantBaseline="middle"
            textAnchor="middle"
            x="525"
            y="25"
            fill="white"
            fontSize="16pt"
          >
            Conducts lecture
          </text>
          <text
            className="path-text-4"
            dominantBaseline="middle"
            textAnchor="middle"
            x="700"
            y="175"
            fill="white"
            fontSize="16pt"
          >
            Mood detect
          </text>
          <text
            className="path-text-5"
            dominantBaseline="middle"
            textAnchor="middle"
            x="950"
            y="200"
            fill="white"
            fontSize="16pt"
          >
            Stats
          </text>
          <circle
            cx="100"
            cy="200"
            r={10}
            className="path-point path-point-1"
          ></circle>
          <circle
            cx="300"
            cy="50"
            r={10}
            className="path-point path-point-2"
          ></circle>
          <circle
            cx="300"
            cy="350"
            r={10}
            className="path-point path-point-3"
          ></circle>
          <circle
            cx="500"
            cy="50"
            r={10}
            className="path-point path-point-4"
          ></circle>
          <circle
            cx="500"
            cy="350"
            r={10}
            className="path-point path-point-5"
          ></circle>
          <circle
            cx="700"
            cy="200"
            r={10}
            className="path-point path-point-6"
          ></circle>
          <circle
            cx="900"
            cy="200"
            r={10}
            className="path-point path-point-7"
          ></circle>
        </svg>
      </div>
    </div>
  );
};

export default OperateFlow;
