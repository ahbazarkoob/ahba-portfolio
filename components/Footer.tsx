"use client";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import Link from "next/link";

const FooterSection = () => {
  return (
    <footer className="flex flex-row items-center justify-center gap-6 p-4 bg-gray-200">
      <Link
        href="mailto:ahbazarkoob@gmail.com"
        aria-label="Email Ahba"
        target="_blank"
      >
        <MailIcon className="text-black" fontSize="large" />
      </Link>
      <Link
        href="https://github.com/ahbazarkoob/"
        aria-label="Ahba's GitHub"
        target="_blank"
      >
        <GitHubIcon className="text-black" fontSize="large" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/ahba-lateef-zarkoob-9a503920b/"
        aria-label="Ahba's LinkedIn"
        target="_blank"
      >
        <LinkedInIcon className="text-blue-500" fontSize="large" />
      </Link>
    </footer>
  );
};

export default FooterSection;
