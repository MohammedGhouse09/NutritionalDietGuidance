import React, { useState } from 'react';
import Login from './Login'; // Adjust the import path according to your file structure

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="navbar bg-base-100 sticky top-0 z-50 w-full">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a href="#home">Home</a></li>
              <li>
                <a href="/Height">Meal Plans</a>
                <ul className="p-2">
                  <li><a href="#weekly-plan">Weekly Plan</a></li>
                  <li><a href="#custom-plan">Custom Plan</a></li>
                </ul>
              </li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <a href="#home" className="btn btn-ghost text-xl">Nutrition Guidance</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a href="/">Home</a></li>
            <li><a href="/Height">Meal plans</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <button onClick={openModal} className="btn">Login</button>
        </div>
      </div>
      <Login isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default Navbar;
