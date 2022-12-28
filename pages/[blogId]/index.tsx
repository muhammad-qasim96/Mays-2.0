import Image from "next/image";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

import { GetStaticPaths, GetStaticProps } from "next";
import Posts from "../../data/blogPosts.json";
import { blogPost } from "../../types";

type Props = {
  blogPost: blogPost;
};

const BlogId = ({ blogPost }: Props) => {
  return (
    <div className="mx-auto max-w-6xl px-2 py-16">
      <Link href="/">
        <div className="mb-5 flex cursor-pointer items-center gap-2 hover:brightness-110">
          <BiArrowBack />
          <p>Back</p>
        </div>
      </Link>

      <div className="md:grid-cols-12fr grid h-full">
        <div className="relative h-72 w-full overflow-hidden rounded-md">
          <Image src={blogPost?.photo} alt="" layout="fill" objectFit="cover" />
        </div>

        <div>
          <h2 className="mb-5 text-xl font-bold text-slate-200 md:text-2xl">
            {blogPost?.header}
          </h2>
          <p className="text-lg md:w-3/4">{blogPost?.body}</p>
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
