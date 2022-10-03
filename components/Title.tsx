import React from "react";

type Props = {
  name: string;
};

const Title = ({ name }: Props) => {
  return (
    <h2 className="mb-5 inline-block border-b-4 border-mainColor text-3xl font-bold text-mainColor md:text-4xl">
      {name}
    </h2>
  );
};

export default Title;
