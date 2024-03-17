import React from "react";

const Footer = () => {
  return (
    <footer className="border-y border-gray-700 bg-gray-900">
      <div className="max-w-[1240px] mx-auto py-6 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 ">
        <div>
          <h1 className="w-full text-3xl font-bold italic text-[#00df9a]">
            EduQuest
          </h1>
          <h4 className="text-base text-white">Akshay Kamath</h4>
          <h4 className="text-base text-white">Daksh Jain</h4>
          <h4 className="text-base text-white">Naman Shah</h4>
          <h4 className="text-base text-white">Shaun Fernandes</h4>
        </div>
        <div className="lg:col-span-2 flex justify-between ">
          <div>
            <h6 className="font-medium text-gray-400">Solutions</h6>
            <ul>
              <li className="py-2 text-sm hover:text-[#00df9a] cursor-pointer">
                Analytics
              </li>
              <li className="py-2 text-sm hover:text-[#00df9a] cursor-pointer">
                Marketing
              </li>

              <li className="py-2 text-sm hover:text-[#00df9a] cursor-pointer">
                Insights
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Support</h6>
            <ul>
              <li className="py-2 text-sm hover:text-[#00df9a] cursor-pointer">
                Pricing
              </li>
              <li className="py-2 text-sm hover:text-[#00df9a] cursor-pointer">
                <a href="https://documenter.getpostman.com/view/24438498/2sA2xny9wk">
                  Documentation
                </a>
              </li>

              <li className="py-2 text-sm hover:color-green hover:text-[#00df9a] cursor-pointer">
                <a href="https://documenter.getpostman.com/view/24438498/2sA2xny9wk">
                  API Status
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Company</h6>
            <ul>
              <li className="py-2 text-sm hover:text-[#00df9a] cursor-pointer">
                Blog
              </li>
              <li className="py-2 text-sm hover:text-[#00df9a] cursor-pointer">
                Jobs
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-3 border-gray-200 sm:mx-auto lg:my-2" />
        <span className="text-base text-gray-500 sm:text-center">
          © 2024 Team Byte Bhelpuri. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
