"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logoUrl from "@/assets/logo.png";

// bg-[#18A999]

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <header className="fixed z-30 w-full px-10 sm:px-6 bg-pink-50">
        <div className="mx-auto max-w-5xl">
          <div className="hidden md:flex h-28 items-center justify-between">
            <Link href="/">
              <p className=" text-3xl font-bold">
                AZ<span className="text-target">.</span>
              </p>
            </Link>
            <nav>
              {/* <Link href="#intro">
                <Image alt="logo" src={logoUrl} height={24} />
              </Link> */}
              <ul className="flex flex-col items-center gap-8 md:gap-5 md:flex-row sm:gap-3">
                <ListItem href="#aboutMe" title="About" />
                <ListItem href="#experience" title="Experience" />
                <ListItem href="#skills" title="Skills" />
                <ListItem href="#education" title="Education" />
                <ListItem href="#education" title="Courses" />
                <ListItem href="#contact" title="Contact" />
              </ul>
            </nav>
          </div>
          <div>
            <button
              className="md:hidden  focus:outline-none"
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
              <div className="md:hidden bg-[#18A999] text-[var(--color-light)] absolute top-16 left-0 w-full z-40">
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
          </div>
          {/* <div className="flex h-28 items-center justify-between md:hidden">
            <Link href="/">
              <p className=" text-3xl font-bold">
                <span className="vertical-align:inherit;">
                  <span className="vertical-align:inherit;">AZ</span>
                </span>
                <span className="text-target">
                  <span className="vertical-align:inherit;">
                    <span className="vertical-align:inherit;">.</span>
                  </span>
                </span>
              </p>
            </Link>
          </div> */}
        </div>
      </header>

      {/* <header
        class="fixed z-30 w-full bg-primary px-10 sm:px-6"
        style="opacity: 1;"
      >
        <div class="mx-auto max-w-5xl">
          <div class="flex h-28 items-center justify-between sm:hidden">
            <a href="/">
              <p class=" text-3xl font-bold">
                DG<span class="text-target">.</span>
              </p>
            </a>
            <nav>
              <ul class="flex items-center gap-8 md:gap-5 sm:flex-col sm:gap-3">
                <li>
                  <a
                    class="relative flex items-center text-lg transition before:absolute before:text-yellow-400 before:opacity-0 before:transition before:content-['{'] after:absolute after:right-0 after:text-yellow-400 after:opacity-0 after:transition after:content-['}'] hover:text-target before:hover:-translate-x-4 before:hover:opacity-100 after:hover:translate-x-4 after:hover:opacity-100"
                    href="#home"
                  >
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">Start</font>
                    </font>
                  </a>
                </li>
                <li>
                  <a
                    class="relative flex items-center text-lg transition before:absolute before:text-yellow-400 before:opacity-0 before:transition before:content-['{'] after:absolute after:right-0 after:text-yellow-400 after:opacity-0 after:transition after:content-['}'] hover:text-target before:hover:-translate-x-4 before:hover:opacity-100 after:hover:translate-x-4 after:hover:opacity-100"
                    href="#about"
                  >
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">About me</font>
                    </font>
                  </a>
                </li>
                <li>
                  <a
                    class="relative flex items-center text-lg transition before:absolute before:text-yellow-400 before:opacity-0 before:transition before:content-['{'] after:absolute after:right-0 after:text-yellow-400 after:opacity-0 after:transition after:content-['}'] hover:text-target before:hover:-translate-x-4 before:hover:opacity-100 after:hover:translate-x-4 after:hover:opacity-100"
                    href="#projects"
                  >
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">Projects</font>
                    </font>
                  </a>
                </li>
                <li>
                  <a
                    class="relative flex items-center text-lg transition before:absolute before:text-yellow-400 before:opacity-0 before:transition before:content-['{'] after:absolute after:right-0 after:text-yellow-400 after:opacity-0 after:transition after:content-['}'] hover:text-target before:hover:-translate-x-4 before:hover:opacity-100 after:hover:translate-x-4 after:hover:opacity-100"
                    href="#skills"
                  >
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">Skills</font>
                    </font>
                  </a>
                </li>
                <li>
                  <a
                    class="relative flex items-center text-lg transition before:absolute before:text-yellow-400 before:opacity-0 before:transition before:content-['{'] after:absolute after:right-0 after:text-yellow-400 after:opacity-0 after:transition after:content-['}'] hover:text-target before:hover:-translate-x-4 before:hover:opacity-100 after:hover:translate-x-4 after:hover:opacity-100"
                    href="#contact"
                  >
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">Contact</font>
                    </font>
                  </a>
                </li>
              </ul>
            </nav>
            <div class="relative" data-headlessui-state="">
              <button
                class="text-target flex items-center"
                id="headlessui-menu-button-:r0:"
                type="button"
                aria-haspopup="menu"
                aria-expanded="false"
                data-headlessui-state=""
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-sun"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </svg>
              </button>
            </div>
          </div>
          <div class="hidden h-28 items-center justify-between sm:flex">
            <a href="/">
              <p class=" text-3xl font-bold">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">DG</font>
                </font>
                <span class="text-target">
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">.</font>
                  </font>
                </span>
              </p>
            </a>
            <div class="hidden flex-col sm:flex">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-menu"
                >
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header> */}
    </>
  );
};

export default Header;

const ListItem = ({ href, title }: { href: string; title: string }) => {
  return (
    <li>
      <a
        href={href}
        className="relative flex items-center text-lg transition text-white hover:text-target 
               before:absolute before:left-0 before:translate-x-[-1rem] before:opacity-0 
               before:transition before:content-['{'] 
               after:absolute after:right-0 after:translate-x-[1rem] after:opacity-0 
               after:transition after:content-['}'] 
               hover:before:translate-x-0 hover:before:opacity-100 
               hover:after:translate-x-0 hover:after:opacity-100"
      >
        <span className="mx-2">{title}</span>
      </a>
    </li>
  );
};
