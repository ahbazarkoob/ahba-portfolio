"use client";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <header className="bg-[#18A999] text-[#ede7d9] py-4 sticky top-0 z-50 ">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <a href="#aboutMe">
          <h2 className="text-2xl font-bold">AHBA</h2>
        </a>
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#experience" className="hover:underline">
              Experience
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:underline">
              Skills
            </a>
          </li>
          <li>
            <a href="#education" className="hover:underline">
              Education
            </a>
          </li>
          <li>
            <a href="#education" className="hover:underline">
              Courses
            </a>
          </li>
        </ul>
        <button
          className="md:hidden text-[#ede7d9] focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
        {isOpen && (
          <div className="md:hidden bg-[#18A999] text-[#ede7d9] absolute top-16 left-0 w-full z-40">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li>
                <a
                  href="#experience"
                  className="hover:underline text-lg"
                  onClick={toggleMenu}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:underline text-lg"
                  onClick={toggleMenu}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="hover:underline text-lg"
                  onClick={toggleMenu}
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="hover:underline text-lg"
                  onClick={toggleMenu}
                >
                  Courses
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
