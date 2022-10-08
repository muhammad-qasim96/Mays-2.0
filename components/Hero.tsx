import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

const Hero = (props: Props) => {
  return (
    <main className="h-screen overflow-hidden bg-hero bg-cover bg-right ">
      <div className="h-full w-full bg-black/30">
        <div className="mx-auto h-full w-full max-w-6xl ">
          <div className="mx-auto flex h-full w-full flex-col justify-center px-4 backdrop-blur-sm md:px-5 lg:px-0 lg:backdrop-blur-none">
            <h1 className="mb-10 max-w-2xl text-[2.5rem] font-black capitalize tracking-wide text-white md:text-6xl lg:text-7xl">
              Start changing <br />{" "}
              <span className="text-mainColor">your life</span>
            </h1>
            <p className="w-2/3 text-base font-medium text-gray-300 md:text-xl lg:w-2/4 lg:text-2xl">
              I help you change your life to a healthier one based on scientific
              foundations and steps.
            </p>
          </div>
          <div className="absolute bottom-10 right-0 z-20 hidden flex-col space-y-4 rounded-l-xl  bg-black/25 p-5 backdrop-blur-md hover:right-0 lg:flex">
            <SocialIcon url="https://www.facebook.com/dr.maysaljbory" />
            <SocialIcon url="https://www.instagram.com/dr.maysaljbory/" />
            <SocialIcon url="https://www.youtube.com/channel/UCV3UKMcmpSwPopq387iNbGw" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
