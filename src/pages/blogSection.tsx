import { blogData } from "@/components/blogData";
import React from "react";

const BlogSection = () => {
  return (
    <section className="px-12 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold">The Accessibility Blog</h1>
        <p>The voice of the excluded </p>
      </div>

      <section className="grid grid-cols-3 gap-8">
        {blogData.map((data, index) => (
          <div className="w-full" key={index}>
            <img
              className="w-full rounded-tl rounded-tr"
              src="/images/sports.jpg"
              alt=""
            />
            <div className="bg-primary p-4">
              <p className="text-sm">{data.pub_date}</p>
              <h1 className="font-semibold">
                {data.title}
              </h1>
              <p className="text-sm">
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default BlogSection;
