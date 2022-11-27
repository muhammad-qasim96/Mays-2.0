import Image from "next/image";
import React, { useState, useEffect } from "react";
import Logo from "../public/logo.webp";
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";
import { SocialIcon } from "react-social-icons";

type Props = {};

const Header = (props: Props) => {
  const [nav, setNav] = useState<boolean>(false);

  const handleNav = () => {
    setNav((prev) => !prev);
  };

  useEffect(() => {
    nav
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [nav]);

  return (
    <header className="absolute z-50  w-screen max-w-full">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 md:px-5 lg:px-0">
        <Image src={Logo} alt="" width={150} height={150} />
        <nav className="hidden lg:inline-flex">
          <ul className="flex flex-nowrap items-center justify-evenly space-x-12">
            <li className="cursor-pointer text-lg font-semibold text-white duration-200 hover:scale-110 hover:text-mainColor">
              <a href="#about">About</a>
            </li>
            <li className="cursor-pointer text-lg font-semibold text-white duration-200 hover:scale-110 hover:text-mainColor">
              <a href="#blog">Blog</a>
            </li>
            <li className="cursor-pointer text-lg font-semibold text-white duration-200 hover:scale-110 hover:text-mainColor">
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a
                href="https://form.jotform.com/221863726638465"
                target="_blank"
                rel="noreferrer"
                className="hidden whitespace-nowrap rounded-full bg-mainColor px-5 py-3 font-pop text-lg text-white duration-200 ease-out hover:scale-110 lg:inline-flex"
              >
                Join Now
              </a>
            </li>
          </ul>
        </nav>

        {/****** Mobile menu ******/}

        <div className="lg:hidden">
          <button
            onClick={handleNav}
            className="relative text-3xl text-white md:text-5xl lg:hidden"
          >
            {nav ? <HiX /> : <HiOutlineMenuAlt4 />}
          </button>

          <div
            className={
              nav
                ? "fixed left-0 top-0 z-20 flex h-screen flex-col space-y-5 bg-black/80 px-10 pt-24 backdrop-blur duration-300 ease-out"
                : "fixed -left-full top-0 z-20 flex h-screen flex-col space-y-5 bg-black/80 px-10 pt-24 backdrop-blur duration-300 ease-in"
            }
          >
            <ul className="mt-3 flex flex-col space-y-5">
              <li
                onClick={handleNav}
                className="cursor-pointer text-base font-semibold text-white hover:text-mainColor md:text-xl"
              >
                <a href="#about">About</a>
              </li>
              <li
                onClick={handleNav}
                className="cursor-pointer text-base font-semibold text-white hover:text-mainColor md:text-xl"
              >
                <a href="#blog">Blog</a>
              </li>

              <li
                onClick={handleNav}
                className="cursor-pointer text-base font-semibold text-white hover:text-mainColor md:text-xl"
              >
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <a
              href="https://form.jotform.com/221863726638465"
              target="_blank"
              rel="noreferrer"
              className="whitespace-nowrap rounded-xl bg-mainColor px-5 py-3 text-center font-pop text-white duration-200 ease-out hover:scale-110"
            >
              Join Now
            </a>
            <div className="flex items-center space-x-5">
              <SocialIcon url="https://www.facebook.com/dr.maysaljbory" />
              <SocialIcon url="https://www.instagram.com/dr.maysaljbory/" />
              <SocialIcon url="https://www.youtube.com/channel/UCV3UKMcmpSwPopq387iNbGw" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
