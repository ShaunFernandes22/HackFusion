import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className='bg-gray-900'>
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold italic text-[#00df9a]'>EduQuest</h1>

      <div className="flex items-center lg:order-2">
        <Link
          to="#"
          className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
          Log in
        </Link>
        <Link
          to="#"
          className="text-white bg-[#00df9a] hover:text-[#5cae94] focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
          Sign up
        </Link> 
      </div>
      <ul className='hidden md:flex'>
        <li className='p-4'>
            <NavLink to='/' 
            className={({isActive})=> `block duration-200 border-b border-gray-700 
                        ${isActive ? "text-[#00df9a]" : "text-gray-300" } lg:border-0 hover:text-[#00df9a] lg:p-0`}>
                        Home
            </NavLink>
        </li>
        <li className='p-4'>
            <NavLink to='/meeting' 
            className={({isActive})=> `block duration-200 border-b border-gray-700 
                        ${isActive ? "text-[#00df9a]" : "text-gray-300" } lg:border-0 hover:text-[#00df9a] lg:p-0`}>
                Meeting
            </NavLink>
        </li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold italic text-[#00df9a] m-4'>EduQuest</h1>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Company</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4'>Contact</li>
      </ul>
    </div>
    </nav>
  );
};

export default Navbar;