import BlogCommentModal from "@/components/blog-comment-modal";
import { getAllBlogs } from "@/redux/features";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { IoMdSearch } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import AddComment from "../components/add-comment";

const BlogSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();
  const { blogs } = useSelector((store) => store.blog);

  const getBlogs = async () => {
    await dispatch(getAllBlogs());
  };

  useEffect(() => {
    getBlogs();
  }, []);

  // Function to truncate text
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  };

  // Filter blogs by title
  const filteredBlogs = blogs.filter((data) =>
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
            className="border border-secondary rounded-xl px-4 py-2 text-sm focus:outline-none w-full md:focus:w-96"
            type="text"
            placeholder="Search by Title"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
          <IoMdSearch className="absolute top-2 right-4" />
        </div>
      </section>

      <p className="text-center my-4 font-bold text-sm">
        {searchQuery &&
          `Showing ${filteredBlogs.length} Result(s) for "${searchQuery}"`}
      </p>

      <section className="grid md:grid-cols-3 grid-cols-1 gap-8">
        {filteredBlogs.map((data) => (
          <div key={data.id}>
            {/* <Link
              key={data.id}
              href={{
                pathname: `/blogDetail/${data.slug}`,
                query: { data: JSON.stringify(data) },
              }}
            > */}
            <div className="w-full">
              <img
                className="w-full rounded-tl rounded-tr"
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/${data.image}`}
                alt=""
              />
              <div className="bg-white shadow p-4 space-y-2 rounded-br rounded-bl h-[30vh] relative">
                <h1 className="font-semibold">{data.title}</h1>
                <p className="text-sm">{truncateText(data.description, 50)}</p>
                <section className="flex justify-end">
                  <p className="text-xs">
                    Date:{" "}
                    {new Date(data.pub_date).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: false,
                    })}
                  </p>
                </section>
                <section>
                  <BlogCommentModal {...{ data }} />
                  <div className="absolute bottom-1 w-full left-2">
                    <AddComment {...{ data }} />
                  </div>
                </section>
              </div>
            </div>
            {/* </Link> */}
          </div>
        ))}
      </section>
    </section>
  );
};

export default BlogSection;
