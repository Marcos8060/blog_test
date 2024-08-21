import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="bg-primary text-white sm:px-12 px-4 py-4 flex items-center justify-between">
      <Link href="/">
        <h1 className="text-2xl font-bold">Blog</h1>
      </Link>
      <div>
        <p className="text-sm">Copyright@2023. BlogPost</p>
      </div>
    </section>
  );
};

export default Footer;
