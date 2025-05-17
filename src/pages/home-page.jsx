import React, { use, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { MoveLeft, MoveRight, PenToolIcon, RocketIcon, UsersIcon } from "lucide-react";
//import motion from "motion";
import * as motion from "motion/react-client";
import { useGetAllPostStore } from "../store/useGetAllPostStore";
import RecentPostSlider from "../components/RecentPostSlider";
import { AnimatePresence } from "framer-motion";
import TestimonialSection from "../components/TestimonialSection";

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
    <div>
      <section className="flex flex-col sm:flex-row-reverse items-center sm:gap-10 gap-2 justify-center h-screen px-6 md:px-16 py-20 bg-gray-50">
        <div>
          <img
            className="w-full h-auto"
            src="/brainstorming.svg"
            alt="Blog Image"
          />
        </div>
        <div className="flex flex-col items-center justify-center max-w-lg text-center md:text-left">
          <h1 className="sm:text-3xl text-2xl font-bold text-center">
            Start your blogging journey <br />
            <span className="text-blue-200">in minutes</span>
          </h1>
          <p className="mt-4 text-gray-400 text-sm">
            Bloggr empowers creators to share stories, insights, and ideas with
            a global audience.
          </p>
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <Button
              asChild
              className="text-white bg-gray-800 hover:bg-gray-600"
            >
              <Link to={"/create"}>Get Started</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to={"/dashboard"}>Explore Blogs</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-white py-12 px-6 md:px-16">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
          Why Bloggr?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center bg-gray-800 text-white p-6 rounded-lg shadow-md"
          >
            <PenToolIcon className="mx-auto mb-2 text-red-500 h-6 w-6" />
            <h3 className="font-semibold">Easy to Use</h3>
            <p className="text-sm text-gray-100">
              A clean editor that lets you focus on writing.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center  bg-gray-800 text-white p-6 rounded-lg shadow-md"
          >
            <RocketIcon className="mx-auto mb-2 text-amber-500 h-6 w-6" />
            <h3 className="font-semibold">Instant Publishing</h3>
            <p className="text-sm text-gray-100">
              Your stories go live with just one click.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center  bg-gray-800 text-white p-6 rounded-lg shadow-md"
          >
            <UsersIcon className="mx-auto mb-2 text-green-500 h-6 w-6" />
            <h3 className="font-semibold">Grow Your Audience</h3>
            <p className="text-sm text-gray-100">
              Share and connect with fellow bloggers.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="bg-cyan-100 py-12 px-6 md:px-16">
        <h2 className="text-center text-xl font-bold">Just Dropped: New Reads</h2>
        <div className="w-full max-w-xl mx-auto relative p-4">
          <div className="relative h-64 overflow-hidden">
            <AnimatePresence mode="wait">
              {posts?.slice(-4).map((post, ind) => 
              ind === index? (
                <RecentPostSlider key={index} index={index} post={post} />
              ) : null )}
            </AnimatePresence>
          </div>

          {/* controls
          <div className="flex justify-between mt-4">
            <button className="text-lg px-4 py-2" onClick={goToPrev}><MoveLeft /></button>
            <button className="text-lg px-4 py-2" onClick={goToNext}><MoveRight /></button>
          </div> */}
        </div>
      </section>
      <section className="">
        <TestimonialSection />
      </section>
    </div>
  );
};

export default HomePage;
