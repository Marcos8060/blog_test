import React from "react";
import { useRouter } from "next/router";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";

const BlogDetailSection = () => {
  const router = useRouter();

  const { data } = router.query;
  const blogItem = data ? JSON.parse(data as string) : null;

  return (
    <>
      <Header />
      <section className="sm:px-12 px-4 py-8">
        <Link href="/" className="flex items-center gap-4 hover:text-link">
          <HiOutlineArrowNarrowLeft />
          <p>Back to Blog Posts</p>
        </Link>
        <div className="mt-12 md:w-8/12 mx-auto space-y-4">
          <h1 className="text-center text-xl font-semibold">
            {blogItem.title}
          </h1>
          <p className="text-center text-sm mt-2">{blogItem.pub_date}</p>
          <div className="md:block hidden relative overflow-hidden cursor-pointer">
            <div
              className="absolute inset-0 bg-gradient-to-t from-primary to-transparent overflow-hidden"
              style={{ zIndex: 1 }}
            ></div>
            <img
              className="w-full object-cover rounded-2xl"
              src={blogItem.img}
              alt=""
            />
            <div className="absolute text-white bottom-8 z-10 px-4">
              <h4 className="mb-4 text-4xl font-bold">{blogItem.title}</h4>
            </div>
          </div>
          <p className="text-sm">{blogItem.description}</p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogDetailSection;
