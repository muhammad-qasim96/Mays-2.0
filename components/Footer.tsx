import Image from "next/image";
import React from "react";
import Logo from "../public/logo.webp";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="footer flex flex-col bg-neutral p-10 text-neutral-content md:flex-row">
      <div className="relative flex-shrink-0">
        <Image
          src={Logo}
          alt="logo"
          height={150}
          width={150}
          className="fill-current"
        />
        <p>
          Mays Aljbory
          <br />
          Health and Lifestyle coach.
        </p>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <span className="footer-title">About</span>
          <div className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
            dolores aliquam odio hic esse, itaque blanditiis corporis porro
            molestias fugit dolorem nesciunt accusantium nam quis facilis earum
            nemo laboriosam alias.
          </div>
        </div>
        <div>
          <span className="footer-title">Contact</span>
          <div className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
            dolores aliquam odio hic esse, itaque blanditiis corporis porro
            molestias fugit dolorem nesciunt accusantium nam quis facilis earum
            nemo laboriosam alias.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
