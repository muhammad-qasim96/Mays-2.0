import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

import Posts from "../../data/blogPosts.json";
import { blogPost } from "../../types";

type Props = {
  blogPost: blogPost;
};

const BlogId = ({ blogPost }: Props) => {
  return (
    <div className="mx-auto max-w-6xl py-16">
      <Link href="/">
        <div className="mb-5 flex cursor-pointer items-center gap-2 hover:brightness-110">
          <BiArrowBack />
          <p>Back</p>
        </div>
      </Link>

      <div className="grid-cols-12fr h-full">
        <div className="relative h-72 w-full overflow-hidden rounded-md">
          <Image src={blogPost?.photo} alt="" layout="fill" objectFit="cover" />
        </div>

        <div className="">
          <h2 className="mb-5 text-2xl font-bold text-slate-200">
            {blogPost?.header}
          </h2>
          <p className="w-3/4 text-lg">{blogPost?.body}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogId;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const params = ctx.params;

  const blogPost = Posts.find((item) => item.id === params?.blogId);

  return {
    props: {
      blogPost,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = Posts.map((post) => {
    return { params: { blogId: post.id } };
  });

  return {
    paths,
    fallback: false,
  };
};
