import Image from "next/image";
import React from "react";
import Title from "./Title";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="webContainer bg-darkBg pt-7 sm:h-auto md:h-full">
      <Title name="About" />
      <div className="flex flex-col items-center justify-between space-y-10 lg:flex-row">
        <div className="space-y-5">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Dr. Mays Aljbory
          </h2>
          <ul className="list-disc pl-5">
            <li className="text-gray-200">
              Bachelor&apos;s degree in Oral and Dental Medicine,
            </li>
            <li className="text-gray-200">Diploma in Fitness Training.</li>
            <li className="text-gray-200">Diploma in healthy nutrition.</li>
            <li className="text-gray-200">Healthy life coach.</li>
            <li className="text-gray-200">
              Certificate in the study of hormones and their effects on body
              weight.
            </li>
            <li className="text-gray-200">
              Certificate in non-surgical facelift and skincare.
            </li>
            <li className="text-gray-200">
              Health medical and science content creator.
            </li>
          </ul>
          <p className="w-4/5 text-lg font-medium text-white">
            I help you change your lifestyle to a healthy lifestyle based on
            scientific foundations and steps.
          </p>
        </div>
        <div className="relative h-[415px] w-[323px] flex-shrink-0 overflow-hidden rounded-lg shadow-xl shadow-gray-700">
          <Image
            src="https://le-de.cdn-website.com/e03de90437ae4dbc817e54b739183f2b/dms3rep/multi/opt/photo_2022-08-26_16-03-59-a69c240d-1920w.jpg"
            alt="Dr. Mays"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
