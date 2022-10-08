import React from "react";
import Card from "./Card";
import Title from "./Title";

type Props = {};

const Blog = (props: Props) => {
  return (
    <div className="h-fit min-h-screen w-full border-b-2 border-mainColor/20">
      <div className="mx-auto max-w-6xl py-7 px-4 md:px-5 lg:px-0">
        <Title name="Blog" />
        <div className="grid w-full justify-center gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Blog;
