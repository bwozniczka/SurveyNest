import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { ReviewSlider } from "@/components/reviewsSlider";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="flex justify-center my-4">
        <Image
          src="/survey.jpg"
          width={500}
          height={500}
          alt="survey"
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="text-center mt-20">
        <h2 className="text-4xl font-bold text-gray-800">What our users say</h2>
        <p className="text-gray-600 mt-2">
          Discover the amazing experiences shared by our community.
        </p>
      </div>
      <ReviewSlider></ReviewSlider>
      <Footer></Footer>
    </>
  );
}
