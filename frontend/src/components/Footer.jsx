import React from "react";
import {
  FaDiscord,
  FaLinkedin,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-y border-gray-700 bg-gray-900">
      <div className="max-w-[1240px] mx-auto py-6 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
          <h1 className="w-full text-3xl font-bold italic text-[#00df9a]">
            EduQuest
          </h1>
          <h4 className="text-base text-white">Akshay Kamath</h4>
          <h4 className="text-base text-white">Daksh Jain</h4>
          <h4 className="text-base text-white">Naman Shah</h4>
          <h4 className="text-base text-white">Shaun Fernandes</h4>
          <div className="flex justify-between md:w-[75%] my-6">
            <FaLinkedin size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDiscord size={30} />
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
          <div>
            <h6 className="font-medium text-gray-400">Solutions</h6>
            <ul>
              <li className="py-2 text-sm">Analytics</li>
              <li className="py-2 text-sm">Marketing</li>
              <li className="py-2 text-sm">Commerce</li>
              <li className="py-2 text-sm">Insights</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Support</h6>
            <ul>
              <li className="py-2 text-sm">Pricing</li>
              <li className="py-2 text-sm">Documentation</li>
              <li className="py-2 text-sm">Guides</li>
              <li className="py-2 text-sm">API Status</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Company</h6>
            <ul>
              <li className="py-2 text-sm">Blog</li>
              <li className="py-2 text-sm">Jobs</li>
              <li className="py-2 text-sm">Press</li>
              <li className="py-2 text-sm">Careers</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Legal</h6>
            <ul>
              <li className="py-2 text-sm">Claim</li>
              <li className="py-2 text-sm">Policy</li>
              <li className="py-2 text-sm">Terms</li>
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
