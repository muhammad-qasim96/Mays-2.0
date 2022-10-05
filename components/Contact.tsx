import React from "react";
import { SocialIcon } from "react-social-icons";
import Title from "./Title";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="mx-auto h-screen w-full overflow-hidden bg-darkBg pt-7">
      <div className="mx-auto h-full max-w-6xl">
        <Title name="Contact Me" />
        <div className="flex h-full flex-col items-center justify-center">
          <div className="space-x-4">
            <SocialIcon url="https://www.facebook.com/dr.maysaljbory" />
            <SocialIcon url="https://www.instagram.com/dr.maysaljbory/" />
            <SocialIcon url="https://www.youtube.com/channel/UCV3UKMcmpSwPopq387iNbGw" />
            <SocialIcon url="https://www.tiktok.com/@dr.maysaljbory?_t=8VIALvMEkc9&_r=1" />
          </div>
          <div>
            <h2 className="text-lg text-white">Or</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
