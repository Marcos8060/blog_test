import { blogData } from "@/components/blogData";
import Link from "next/link";
import React from "react";

const BlogSection = () => {
  return (
    <section className="sm:px-12 px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold">The Accessibility Blog</h1>
        <p>The voice of the excluded </p>
      </div>

      <section className="grid md:grid-cols-3 grid-cols-1 gap-8">
        {blogData.map((data) => (
          <Link key={data.id} href={{ pathname: `/blogDetail/${data.id}`, query: { data: JSON.stringify(data) } }}>
            <div className="w-full">
              <img
                className="w-full rounded-tl rounded-tr"
                src="/images/sports.jpg"
                alt=""
              />
              <div className="bg-primary p-4 space-y-2">
                <p className="text-sm">{data.pub_date}</p>
                <h1 className="font-semibold">{data.title}</h1>
                <p className="text-sm">{data.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </section>
  );
};

export default BlogSection;
