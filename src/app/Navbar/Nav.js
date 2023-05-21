/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */

'use client';

import React, { useState } from 'react';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white p-5 shadow md:flex md:items-center md:justify-between">
      <div className="flex items-center justify-between">
        <span className="cursor-pointer font-[Poppins] text-2xl">
          <img className="inline h-10" src="" />
          <a href="/">
            Wander<span className="font-black text-blue-400">Sub</span>
          </a>
        </span>

        <span
          className="mx-2 block cursor-pointer text-3xl md:hidden"
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
          menuOpen ? 'block' : 'hidden'
        } left-0 w-full py-4 pl-7 transition-all duration-500 ease-in md:flex md:w-auto md:items-center md:bg-white md:py-0 md:pl-0`}
      >
        <li className="mx-4 my-6 md:my-0">
          <a href="/" className="text-xl duration-500 hover:text-cyan-500">
            HOME
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="/dashboard" className="text-xl duration-500 hover:text-cyan-500">
            DASHBOARD
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="/about" className="text-xl duration-500 hover:text-cyan-500">
            ABOUT
          </a>
        </li>

        <button className="mx-4 rounded bg-cyan-400 px-6 py-2 font-[Poppins] text-white duration-500 hover:bg-cyan-500">
          Get started
        </button>
      </ul>
    </nav>
  );
}

export default Nav;
