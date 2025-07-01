import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import {
  MoveLeft,
  MoveRight,
  PenToolIcon,
  RocketIcon,
  UsersIcon,
} from "lucide-react";
//import motion from "motion";
import * as motion from "motion/react-client";
import { useGetAllPostStore } from "../store/useGetAllPostStore";
import RecentPostSlider from "../components/RecentPostSlider";
import { AnimatePresence } from "framer-motion";
import TestimonialSection from "../components/TestimonialSection";
import BlogCardRecent from "../components/home/blog-card-recent";

const HomePage = () => {
  const { posts, getAllPostsCreated, isLoading } = useGetAllPostStore();

  const [index, setIndex] = useState(0);

  const goToNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % 4);
  };

  const goToPrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + 4) % 4);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      await getAllPostsCreated();
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000); // Change slide every 2 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount so it doesn't keep running
  }, [index]);

  return (
    <section>
      <div className="relative w-full h-[350px] sm:h-[450px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          src="https://gopalkrsbucket.s3.eu-north-1.amazonaws.com/044656e0-7971-47de-80b2-b94d47beb212-walling-UP7JSnodG2M-unsplash.jpg"
          alt="Blog Image"
        />
        <div className="relative top-20 sm:top-40 md:top-60 left-0 z-10 max-w-xl px-6 text-center md:text-left text-gray-900">
          <h1 className="text-2xl sm:text-3xl font-bold">
            Start your blogging journey <br />
            <span className="text-orange-500">in minutes</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base font-medium text-gray-600">
            Bloggr empowers creators to share stories, insights, and ideas with
            a global audience.
          </p>
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <Button
              asChild
              className="text-white bg-gray-800 hover:bg-gray-600"
            >
              <Link href="/create">Get Started</Link>
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-white bg-orange-400 text-white hover:bg-orange-500"
            >
              <Link href="/dashboard">Explore Blogs</Link>
            </Button>
          </div>
        </div>
      </div>

      <section className="py-12 px-6 md:px-16">
        <h2 className="text-center text-xl font-bold my-10">
          Just Dropped: New Reads
        </h2>
        <div className="sm:hidden w-full max-w-xl mx-auto relative p-4">
          <div className="relative h-64 overflow-hidden">
            <AnimatePresence mode="wait">
              {posts
                ?.slice(-4)
                .map((post, ind) =>
                  ind === index ? (
                    <RecentPostSlider key={index} index={index} post={post} />
                  ) : null
                )}
            </AnimatePresence>
          </div>

          {/* controls
          <div className="flex justify-between mt-4">
            <button className="text-lg px-4 py-2" onClick={goToPrev}><MoveLeft /></button>
            <button className="text-lg px-4 py-2" onClick={goToNext}><MoveRight /></button>
          </div> */}
        </div>
        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {posts?.slice(-4).map((post, ind) => (
            <BlogCardRecent key={ind} post={post} />
          ))}
        </div>
      </section>
      <section className="">
        <TestimonialSection />
      </section>
    </section>
  );
};

export default HomePage;
