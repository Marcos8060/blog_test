import { blogData } from "@/components/blogData";
import { filter } from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";

const BlogSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Function to truncate text
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  };

  // Filter blogs by title
  const filteredBlogs = blogData.filter((data) =>
    data.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="sm:px-12 px-4 py-8">
      <section className="md:flex items-center justify-between">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold">The Accessibility Blog</h1>
          <p>The voice of the excluded</p>
        </div>
        <div className="relative">
          <input
            className="border border-primary rounded px-4 py-2 text-xs focus:outline-none w-full md:focus:w-96"
            type="text"
            placeholder="Search by Title"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
            <IoMdSearch className="absolute top-2 right-4" />
        </div>
      </section>

      <p className="text-center my-4 font-bold text-sm">
        {searchQuery &&
          `Showing ${filteredBlogs.length} Result(s) of "${searchQuery}"`}
      </p>

      <section className="grid md:grid-cols-3 grid-cols-1 gap-8">
        {(searchQuery ? filteredBlogs : blogData).map((data) => (
          <Link
            key={data.id}
            href={{
              pathname: `/blogDetail/${data.id}`,
              query: { data: JSON.stringify(data) },
            }}
          >
            <div className="w-full">
              <img
                className="w-full rounded-tl rounded-tr"
                src="/images/sports.jpg"
                alt=""
              />
              <div className="bg-primary p-4 space-y-2 rounded-br rounded-bl">
                <p className="text-sm">{data.pub_date}</p>
                <h1 className="font-semibold">{data.title}</h1>
                <p className="text-sm">{truncateText(data.description, 100)}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </section>
  );
};

export default BlogSection;
