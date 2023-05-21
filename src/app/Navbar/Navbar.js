/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */

// 'use client';

// import { useState } from 'react';

// import './Navbar.module.css';

// function NavLink({ to, children }) {
//   return (
//     <a href={to} className="mx-4">
//       {children}
//     </a>
//   );
// }
// function MobileNav({ open, setOpen }) {
//   return (
//     <div
//       className={`absolute left-0 top-0 h-screen w-screen bg-white${
//         open ? '-translate-x-0' : '-translate-x-full'
//       } drop-shadow-md transition-transform duration-300 ease-in-out `}
//     >
//       <div className="flex h-20 items-center justify-center bg-white drop-shadow-md">
//         {/* <div className="flex h-full w-full rounded-lg bg-white shadow-md " /> */}
//         {/* logo container */}
//         <a className="text-xl font-semibold" href="/">
//           LOGO
//         </a>
//       </div>
//       <div className="ml-4 flex flex-col">
//         <a
//           className="my-4 text-xl font-medium"
//           href="/"
//           onClick={() =>
//             setTimeout(() => {
//               setOpen(!open);
//             }, 100)
//           }
//         >
//           Home
//         </a>
//         <a
//           className="my-4 text-xl font-medium"
//           href="/about"
//           onClick={() =>
//             setTimeout(() => {
//               setOpen(!open);
//             }, 100)
//           }
//         >
//           About
//         </a>
//         <a
//           className="my-4 text-xl font-normal"
//           href="/profile"
//           onClick={() =>
//             setTimeout(() => {
//               setOpen(!open);
//             }, 100)
//           }
//         >
//           Profile
//         </a>
//         <a
//           className="my-4 text-xl font-medium"
//           href="/dashboard"
//           onClick={() =>
//             setTimeout(() => {
//               setOpen(!open);
//             }, 100)
//           }
//         >
//           Dashboard
//         </a>
//       </div>
//     </div>
//   );
// }

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="flex-between h-20 items-center bg-white p-4 drop-shadow-md mb-16 pt-3">
//       <MobileNav open={false} setOpen={setOpen} />
//       <div className="flex w-3/12">
//         <a className="text-2xl font-semibold" href="/">
//           LOGO
//         </a>
//       </div>
//       <div className="flex w-9/12 items-center justify-end">
//         <div
//           className="relative z-50 flex h-8 w-8 flex-col items-center justify-between md:hidden"
//           onClick={() => {
//             setOpen(!open);
//           }}
//         >
//           {/* hamburger button */}
//           <span
//             className={`h-1 w-full rounded-lg bg-black transition duration-300 ease-in-out${
//               open ? 'translate-y-3.5 rotate-45' : ''
//             }`}
//           />
//           <span
//             className={`h-1 w-full rounded-lg bg-black transition-all duration-300 ease-in-out ${
//               open ? 'w-0' : 'w-full'
//             }`}
//           />
//           <span
//             className={`h-1 w-full rounded-lg bg-black transition duration-300 ease-in-out${
//               open ? '-translate-y-3.5 -rotate-45' : ''
//             }`}
//           />
//         </div>

//         <div className="sm:hidden flex relative">
//           <NavLink to="/">HOME</NavLink>
//           <NavLink to="/about">ABOUT</NavLink>
//           <NavLink to="/profile">PROFILE</NavLink>
//           <NavLink to="/dashboard">DASHBOARD</NavLink>
//           <NavLink to="/about">About</NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// }


// import React, { useState } from 'react';

// function Nav() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between">
//       <div className="flex justify-between items-center">
//         <span className="text-2xl font-[Poppins] cursor-pointer">
//           <img
//             className="h-10 inline"
//             src="https://tailwindcss.com/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg"
//             alt="logo"
//           />
//           tailwind
//         </span>

//         <span
//           className="text-3xl cursor-pointer mx-2 md:hidden block"
//           onClick={toggleMenu}
//           role="button"
//           aria-label="Toggle Menu"
//         >
//           {menuOpen ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           )}
//         </span>
//       </div>

//       <ul
//         className={`md:flex md:items-center ${
//           menuOpen ?  'md:static opacity-100' : 'absolute opacity-0'
//         } bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 transition-all ease-in duration-500`}
//       >
//         <li className="mx-4 my-6 md:my-0">
//           <a href="#" className="text-xl hover:text-cyan-500 duration-500">
//             HOME
//           </a>
//         </li>
//         <li className="mx-4 my-6 md:my-0">
//           <a href="#" className="text-xl hover:text-cyan-500 duration-500">
//             SERVICE
//           </a>
//         </li>
//         <li className="mx-4 my-6 md:my-0">
//           <a href="#" className="text-xl hover:text-cyan-500 duration-500">
//             ABOUT
//           </a>
//         </li>
//         <li className="mx-4 my-6 md:my-0">
//           <a href="#" className="text-xl hover:text-cyan-500 duration-500">
//             CONTACT
//           </a>
//         </li>
//         <li className="mx-4 my-6 md:my-0">
//           <a href="#" className="text-xl hover:text-cyan-500 duration-500">
//             BLOG'S
//           </a>
//         </li>

//         <button className="bg-cyan-400 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded">
//           Get started
//         </button>
//       </ul>
//     </nav>
//   );
// }

// export default Nav;


// import React, { useEffect, useState } from 'react';
// import { IonIcon } from '@ionic/react';
// import { menu, close } from 'ionicons/icons';
// import './Navbar.module.css';

// export default function Nav() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   useEffect(() => {
//     function menuHandler() {
//       setMenuOpen(!menuOpen);
//     }

//     document.querySelector('.text-3xl').addEventListener('click', menuHandler);

//     return () => {
//       document.querySelector('.text-3xl').removeEventListener('click', menuHandler);
//     };
//   }, [menuOpen]);

//   return (
//     <nav className="p-5 h-16 bg-white shadow md:flex md:items-center md:justify-between">
//       <div className="flex justify-between items-center">
//         <span className="text-2xl cursor-pointer">
//           <img className="h-10 inline" src="" alt="Logo" />
//           <a className="text-2xl font-semibold" href="/">
//             Logo
//           </a>
//         </span>

//         <span className="text-3xl cursor-pointer mx-2 md:hidden block" onClick={toggleMenu}>
//           {menuOpen ? <IonIcon icon={close} /> : <IonIcon icon={menu} />}
//         </span>
//       </div>

//       <ul
//         className={`${
//           menuOpen ? 'block' : 'hidden'
//         } md:flex md:items-center md:bg-white md:w-auto md:py-0 py-4 md:pl-0 pl-7 transition-all ease-in duration-500`}
//       >
//         <li className="mx-4 my-6 md:my-0">
//           <a href="/" className="text-xl hover:text-cyan-500 duration-500">
//             HOME
//           </a>
//         </li>
//         <li className="mx-4 my-6 md:my-0">
//           <a href="/about" className="text-xl hover:text-cyan-500 duration-500">
//             ABOUT
//           </a>
//         </li>
//         <li className="mx-4 my-6 md:my-0">
//           <a href="/dashboard" className="text-xl hover:text-cyan-500 duration-500">
//             DASHBOARD
//           </a>
//         </li>
//         <li className="mx-4 my-6 md:my-0">
//           <a href="/profile" className="text-xl hover:text-cyan-500 duration-500">
//             PROFILE
//           </a>
//         </li>

//         <button className="bg-cyan-400 text-white duration-500 px-5 py-2 mx-4 hover:bg-cyan-500 rounded">
//           Get Started
//         </button>
//       </ul>
//     </nav>
//   );
// }