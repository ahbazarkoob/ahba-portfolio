import React from "react";
import Section from "./Section";

const Contact = () => {
  return (
    <Section id="contact">
      <div className="mx-auto max-w-5xl">
        <h2 className="pb-12 text-center text-4xl font-bold sm:text-3xl">
          Contact
        </h2>
        <div className="flex flex-col items-center gap-6">
          <p className="max-w-2xl text-center text-lg">
            If you have any questions or just want to say hello, feel free to
            email me.
          </p>
          <div className="opacity: 1; transform: none;">
            <button className="false relative flex items-center border px-4 py-4 text-lg transition before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:origin-top-left before:scale-0 before:bg-target before:px-8 before:py-4 before:text-textLight before:opacity-0 before:transition before:content-['Copied'] hover:border-target hover:before:scale-100 hover:before:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="sm:hidden"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>{" "}
              <span className="ml-4 border-l pl-4 sm:m-0 sm:border-0 sm:p-0">
                ahbazarkoob@gmail.com
              </span>
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
