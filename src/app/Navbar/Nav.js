'use client';

import React, { useState } from 'react';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-[Poppins] cursor-pointer">
          <img
            className="h-10 inline"
            src=""
            
          />
          <a href='/'>Wander<span className="font-black text-blue-400">Sub</span></a>
        </span>

        <span
          className="text-3xl cursor-pointer mx-2 md:hidden block"
          onClick={toggleMenu}
          role="button"
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </span>
      </div>

      <ul
        className={` ${
          menuOpen ?  'block' : 'hidden'
        } md:flex md:items-center md:bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 transition-all ease-in duration-500`}
      >
        <li className="mx-4 my-6 md:my-0">
          <a href="/" className="text-xl hover:text-cyan-500 duration-500">
            HOME
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="/dashboard" className="text-xl hover:text-cyan-500 duration-500">
            DASHBOARD
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="/about" className="text-xl hover:text-cyan-500 duration-500">
            ABOUT
          </a>
        </li>
        
        

        <button className="bg-cyan-400 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded">
          Get started
        </button>
      </ul>
    </nav>
  );
}

export default Nav;
