import React, { FormEvent } from "react";
import { ImFacebook2 } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { FaTiktok, FaYoutube } from "react-icons/fa";

type Props = {};

const Contact = (props: Props) => {
  const handleForm = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div
      id="contact"
      className="flex w-full items-center justify-center gap-3 bg-mainColor py-3"
    >
      <p className="text-lg font-semibold uppercase text-darkBg">
        contact me at:
      </p>
      <form
        onSubmit={handleForm}
        className="relative flex overflow-hidden rounded-md bg-slate-100 py-2"
      >
        <input
          type="text"
          placeholder="Enter your e-mail"
          className="flex-1 bg-transparent px-2 text-black outline-none placeholder:text-sm"
        />
        <button className="absolute right-0 top-0 h-full bg-darkBg px-2 text-white/90 hover:text-white">
          JOIN
        </button>
      </form>
      <div className="flex items-center gap-3">
        <a href="https://www.facebook.com/dr.maysaljbory">
          <ImFacebook2 className="text-2xl text-white" />
        </a>
        <a href="https://www.instagram.com/dr.maysaljbory/">
          <BsInstagram className="text-2xl text-white" />
        </a>
        <a href="https://www.youtube.com/channel/UCV3UKMcmpSwPopq387iNbGw">
          <FaYoutube className="text-3xl text-white" />
        </a>
        <a href="https://www.tiktok.com/">
          <FaTiktok className="text-2xl text-white" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
