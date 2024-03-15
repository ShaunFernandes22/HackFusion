import React from "react";

function Button({ size, variant, children }) {
  return (
    <button className={`button-${size} button-${variant}`}>{children}</button>
  );
}

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
const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100 dark:bg-gray-950 dark:border-gray-800">
      <div className="container flex items-center justify-between px-4 h-[60px] md:px-6">
        <a className="flex items-center space-x-2 text-sm font-medium" href="#">
          <SquareIcon className="w-5 h-5" />
          <span className="font-semibold">EduQuest</span>
        </a>
        <nav className="hidden space-x-4 text-sm font-medium md:flex">
          <a
            className="text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
            href="#"
          >
            Features
          </a>
          <a
            className="text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
            href="#"
          >
            AI Proctoring
          </a>
          <a
            className="text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
            href="#"
          >
            Contact Sales
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <Button size="sm" variant="outline">
            Sign in
          </Button>
          <Button size="sm">Sign up</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
