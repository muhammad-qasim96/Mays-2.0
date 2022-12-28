import React from "react";
import Card from "./Card";
import Title from "./Title";
import Posts from "../data/blogPosts.json";

type Props = {};

const Blog = (props: Props) => {
  return (
    <div
      id="blog"
      className="h-fit min-h-screen w-full border-b-2 border-mainColor/20"
    >
      <div className="mx-auto max-w-6xl py-7 px-4 md:px-5 lg:px-0">
        <Title name="Blog" />
        <div className="grid w-full gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {Posts.map((post) => {
            return (
              <Card
                key={post.id}
                id={post.id}
                photoUrl={post.photo}
                header={post.header}
                body={post.body}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
