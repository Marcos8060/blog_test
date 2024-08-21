import { Inter } from "next/font/google";
import Header from "@/components/header";
import BlogSection from "./blogSection";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <BlogSection />
      <Footer />
    </>
  );
}
