import React from "react";
import { useRouter } from "next/router";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const BlogDetailSection = () => {
  const router = useRouter();

  const { data } = router.query;
  const blogItem = data ? JSON.parse(data as string) : null;

  return (
    <section className="sm:px-12 px-4 py-8">
      <div className="flex items-center gap-4">
        <HiOutlineArrowNarrowLeft />
        <p>Back to Blog Posts</p>
      </div>
      <div className="mt-12 w-10/12 mx-auto space-y-4">
        <h1 className="text-center text-xl font-semibold">{blogItem.title}</h1>
        <p className="text-center text-sm mt-2">{blogItem.pub_date}</p>
        <img className="h-80 w-full object-cover" src="/images/sports.jpg" alt="" />
        <p className="text-sm">{blogItem.description}</p>
      </div>
    </section>
  );
};

export default BlogDetailSection;
