import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import GithubIcon from "./GithubIcon";

export default function Navbar() {
  return (
    <header className="bg-light-bg md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="font-heading font-medium text-light-text mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Shay Milner
          </a>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-primary">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-primary">
            Skills
          </a>
          <a href="#certificates" className="mr-5 hover:text-primary">
            Certificates
          </a>
        </nav>
        <div className="inline-flex items-center">
            <a
            href="#contact"
            className="inline-flex items-center bg-primary border-0 py-1 px-3 focus:outline-none hover:bg-blue-400 rounded text-base mt-4 md:mt-0">
            Hire Me
            <ArrowRightIcon className="w-4 h-4 ml-1" />
            </a>
            <a href="https://github.com/milnershay" target="_blank" rel="noopener noreferrer" className="ml-4 inline-flex items-center text-light-text hover:text-primary">
                <GithubIcon className="w-6 h-6" />
            </a>
        </div>
      </div>
    </header>
  );
}