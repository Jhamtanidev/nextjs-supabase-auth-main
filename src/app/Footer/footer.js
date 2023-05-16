/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './Footer.module.css';

export default function Footer() {
  return (
    <footer className="m-4 rounded-lg bg-white shadow dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a className="mb-4 flex items-center sm:mb-0">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              WanderFloat
            </span>
          </a>
          <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0">
            <li>
              <a className="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
              <a className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
              <a className="mr-4 hover:underline md:mr-6 ">Licensing</a>
            </li>
            <li>
              <a className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
      <span className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
        © 2023 <a className="hover:underline">Flowbite™</a>. All Rights Reserved.
      </span>
    </footer>
  );
}
