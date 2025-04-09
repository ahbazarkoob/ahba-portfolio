import React from "react";

const Header = () => {
  return (
    <header className="bg-[#18A999] text-[#ede7d9] py-4 sticky top-0 z-50 ">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <a href="#aboutMe">
          <h2 className="text-2xl font-bold">AHBA</h2>
        </a>
        <ul className="flex space-x-6">
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
      </nav>
    </header>
  );
};

export default Header;
