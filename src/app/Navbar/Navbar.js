/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */

'use client';

import { useState } from 'react';

import './Navbar.module.css';

function NavLink({ to, children }) {
  return (
    <a href={to} className="mx-4">
      {children}
    </a>
  );
}
function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute left-0 top-0 h-screen w-screen bg-white${
        open ? '-translate-x-0' : '-translate-x-full'
      } drop-shadow-md transition-transform duration-300 ease-in-out `}
    >
      <div className="flex h-20 items-center justify-center bg-white drop-shadow-md">
        {' '}
        {/* logo container */}
        <a className="text-xl font-semibold" href="/">
          LOGO
        </a>
      </div>
      <div className="ml-4 flex flex-col">
        <a
          className="my-4 text-xl font-medium"
          href="/"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Home
        </a>
        <a
          className="my-4 text-xl font-medium"
          href="/about"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          About
        </a>
        <a
          className="my-4 text-xl font-normal"
          href="/profile"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Profile
        </a>
        <a
          className="my-4 text-xl font-medium"
          href="/dashboard"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Dashboard
        </a>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex h-20 items-center bg-white p-4 drop-shadow-md">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="flex w-3/12 items-center">
        <a className="text-2xl font-semibold" href="/">
          LOGO
        </a>
      </div>
      <div className="flex w-9/12 items-center justify-end">
        <div
          className="relative z-50 flex h-8 w-8 flex-col items-center justify-between md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full rounded-lg bg-black transition duration-300 ease-in-out${
              open ? 'translate-y-3.5 rotate-45' : ''
            }`}
          />
          <span
            className={`h-1 w-full rounded-lg bg-black transition-all duration-300 ease-in-out ${
              open ? 'w-0' : 'w-full'
            }`}
          />
          <span
            className={`h-1 w-full rounded-lg bg-black transition duration-300 ease-in-out${
              open ? '-translate-y-3.5 -rotate-45' : ''
            }`}
          />
        </div>

        <div className="hidden md:flex">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/profile">PROFILE</NavLink>
          <NavLink to="/dashboard">DASHBOARD</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </div>
    </nav>
  );
}
