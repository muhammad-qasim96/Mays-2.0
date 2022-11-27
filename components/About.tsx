import Image from "next/image";
import React from "react";
import Title from "./Title";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="relative mx-auto h-fit min-h-screen w-full overflow-hidden border-b-2 border-mainColor/20">
      <div className="absolute z-0 flex h-full w-full items-center justify-center">
        <div className="absolute z-0 aspect-square h-2/3 animate-pulse rounded-full border border-mainColor/10" />
        <div className="absolute z-0 aspect-square h-2/3 animate-ping rounded-full border border-mainColor/25" />
      </div>

      <div className="z-10 m-auto max-w-6xl px-4 py-7 md:px-5 lg:px-0">
        <Title name="About" />
        <div className="z-10 flex flex-col items-center justify-between space-y-10 lg:flex-row">
          <div className="space-y-5">
            <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl xl:text-6xl">
              Dr. Mays Aljbory
            </h2>
            <ul className="list-disc pl-5">
              <li className="text-gray-200 lg:text-lg xl:text-xl">
                Bachelor&apos;s degree in Oral and Dental Medicine,
              </li>
              <li className="text-gray-200 lg:text-lg xl:text-xl">
                Diploma in Fitness Training.
              </li>
              <li className="text-gray-200 lg:text-lg xl:text-xl">
                Diploma in healthy nutrition.
              </li>
              <li className="text-gray-200 lg:text-lg xl:text-xl">
                Healthy life coach.
              </li>
              <li className="text-gray-200 lg:text-lg xl:text-xl">
                Certificate in the study of hormones and their effects on body
                weight.
              </li>
              <li className="text-gray-200 lg:text-lg xl:text-xl">
                Certificate in non-surgical facelift and skincare.
              </li>
              <li className="text-gray-200 lg:text-lg xl:text-xl">
                Health medical and science content creator.
              </li>
            </ul>
            <p className="w-4/5 text-lg font-medium text-white md:text-xl lg:text-2xl xl:text-3xl">
              I help you change your lifestyle to a healthy lifestyle based on
              scientific foundations and steps.
            </p>
            <div className="flex space-x-5">
              <a
                href="https://form.jotform.com/221863726638465"
                target="_blank"
                rel="noreferrer"
                className="z-10 whitespace-nowrap rounded-full bg-mainColor px-5 py-3 text-lg text-white duration-200 ease-out hover:scale-110 lg:text-xl xl:text-2xl"
              >
                Join Now
              </a>
            </div>
          </div>
          <div className="relative aspect-[13/16] h-56 flex-shrink-0 overflow-hidden rounded-lg shadow-xl shadow-gray-700 md:h-96">
            <Image
              src="https://le-de.cdn-website.com/e03de90437ae4dbc817e54b739183f2b/dms3rep/multi/opt/photo_2022-08-26_16-03-59-a69c240d-1920w.jpg"
              alt="Dr. Mays"
              height={415}
              width={323}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
