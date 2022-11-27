import React from "react";
import { SocialIcon } from "react-social-icons";
import Title from "./Title";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="mx-auto h-screen w-full overflow-hidden bg-darkBg pt-7">
      <div className="mx-auto h-full max-w-6xl px-4 md:px-5 lg:px-0">
        <Title name="Contact Me" />
        <div className="flex h-full  w-full flex-col items-center justify-center ">
          <div className="flex w-full flex-row justify-center">
            <div className="grid h-auto place-items-center">
              <div className="flex flex-col space-y-3">
                <SocialIcon url="https://www.facebook.com/dr.maysaljbory" />
                <SocialIcon url="https://www.instagram.com/dr.maysaljbory/" />
                <SocialIcon url="https://www.youtube.com/channel/UCV3UKMcmpSwPopq387iNbGw" />
                <SocialIcon
                  url="https://www.tiktok.com/@dr.maysaljbory?_t=8VIALvMEkc9&_r=1"
                  bgColor="#303030"
                />
              </div>
            </div>
            <div className="divider lg:divider-horizontal">OR</div>
            <div className="card rounded-box grid h-20 place-items-center bg-base-300">
              <p className="p-4 text-xl">
                <span className="font-semibold text-mainColor">Email : </span>
                drmays.info@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
