import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../public/logo.webp";
import { HiMenuAlt3 } from "react-icons/hi";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="absolute z-10 flex w-screen max-w-full items-center justify-between px-5 lg:px-14">
      <Image src={Logo} alt="" width={150} height={150} className="mr-20" />
      <nav className="hidden lg:inline-flex">
        <ul className="flex flex-nowrap">
          <li className="mx-5 inline-block cursor-pointer pl-5 text-base font-semibold text-white hover:text-[#ec5727] md:text-lg">
            <Link href="/">Home</Link>
          </li>
          <li className="mx-5 inline-block cursor-pointer pl-5 text-base font-semibold text-white hover:text-[#ec5727] md:text-lg">
            <Link href="#about">About</Link>
          </li>
          <li className="mx-5 inline-block cursor-pointer pl-5 text-base font-semibold text-white hover:text-[#ec5727] md:text-lg">
            Blog
          </li>
          <li className="mx-5 inline-block cursor-pointer pl-5 text-base font-semibold text-white hover:text-[#ec5727] md:text-lg">
            Courses
          </li>
          <li className="mx-5 inline-block cursor-pointer pl-5 text-base font-semibold text-white hover:text-[#ec5727] md:text-lg">
            Contact
          </li>
        </ul>
      </nav>
      <a
        href="https://form.jotform.com/221863726638465"
        target="_blank"
        rel="noreferrer"
        className="hidden min-w-[112px] rounded-full bg-[#EC5727] px-5 py-3 text-white lg:inline-flex "
      >
        Join Now
      </a>
      <div className="lg:hidden">
        <button className="text-2xl text-white lg:hidden">
          <HiMenuAlt3 />
        </button>
      </div>
    </header>
  );
};

export default Header;
