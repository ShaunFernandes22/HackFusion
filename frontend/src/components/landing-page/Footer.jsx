import React from "react";

function SquareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </svg>
  );
}
const Footer = () => {
  return (
    <footer className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-10 px-4 md:px-6 lg:grid-cols-3 lg:gap-16">
        <div className="space-y-4">
          <a className="flex items-center space-2 text-2xl font-bold" href="#">
            <SquareIcon className="w-6 h-6" />
            <span className="sr-only">EduQuest</span>
          </a>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Elevate your meetings with EduQuest's AI-powered platform. © 2023
            EduQuest. All rights reserved.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-xl font-semibold">Contact Us</h4>
          <ul className="grid gap-2">
            <li>123 Street Name, City, Country</li>
            <li>contact@EduQuest.com</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-xl font-semibold">Features</h4>
          <ul className="grid gap-2">
            <li>
              <a className="text-blue-600 underline" href="#">
                Features
              </a>
            </li>
            <li>
              <a className="text-blue-600 underline" href="#">
                AI Proctoring
              </a>
            </li>
            <li>
              <a className="text-blue-600 underline" href="#">
                Contact Sales
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
