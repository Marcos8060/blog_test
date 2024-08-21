import { Inter } from "next/font/google";
import Header from "@/components/header";
import BlogSection from "./blogSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <BlogSection />
    </>
  );
}
