import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <main className="h-screen overflow-hidden bg-hero bg-cover px-14">
      <div className="flex h-full w-full flex-col justify-center bg-black/25">
        <h1 className="mb-10 max-w-2xl text-7xl font-black capitalize tracking-wide text-white">
          Start changing <span className="text-[#ec5727]">your life</span>
        </h1>
        <p className="max-w-xl text-2xl font-medium text-white">
          I help you change your life to a healthier one based on scientific
          foundations and steps.
        </p>
      </div>
    </main>
  );
};

export default Hero;
