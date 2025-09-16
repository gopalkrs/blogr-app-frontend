import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
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
import TestimonialSection from "../components/home/TestimonialSection";
import FeaturesGrid from "../components/home/FeaturesGrid";
import BrowseByCategories from "../components/home/BrowseByCategories";
import BlogCard from "../components/home/BlogCard";
import FeaturedPosts from "../components/home/FeaturedPosts";
import FeaturedPostCard from "../components/posts-card/FeaturedPostCard";
import NewsLetter from "../components/home/NewsLetter";

const HomePage = () => {
  const { posts, getAllPostsCreated, isLoading } = useGetAllPostStore();

  const [index, setIndex] = useState(0);

  // const goToNext = () => {
  //   setIndex((prevIndex) => (prevIndex + 1) % 4);
  // };

  // const goToPrev = () => {
  //   setIndex((prevIndex) => (prevIndex - 1 + 4) % 4);
  // };

  useEffect(() => {
    const fetchPosts = async () => {
      await getAllPostsCreated();
    };
    fetchPosts();
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     goToNext();
  //   }, 3000); // Change slide every 2 seconds

  //   return () => clearInterval(interval); // Cleanup the interval on component unmount so it doesn't keep running
  // }, [index]);

  return (
    <section>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Discover Amazing 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600"> Stories</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of readers exploring insightful articles, tutorials, and stories from passionate writers around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={'/articles'} className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-full hover:from-orange-600 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 font-medium shadow-xl flex items-center space-x-2">
              <span>Start Reading</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link to={'/create'} className="text-gray-700 border-2 border-gray-200 px-8 py-4 rounded-full hover:border-orange-300 hover:text-orange-600 transition-all duration-300 font-medium flex items-center space-x-2 bg-white/50 backdrop-blur-sm">
              Create
            </Link>
          </div>
        </div>
      </section>

      <FeaturesGrid />
      <FeaturedPosts posts={posts?.splice(0, 3)} />

      <section className="py-12 px-6 md:px-16">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Latest Articles</h2>
                <p className="text-xl text-gray-600">Fresh insights and stories published recently</p>
              </div>
              <Link to={'/articles'} className="hidden md:block bg-white/60 backdrop-blur-sm border-2 border-orange-200 text-orange-600 px-6 py-3 rounded-full hover:border-orange-300 hover:bg-white/80 transition-all duration-300 font-medium">
                View All Posts
              </Link>
            </div>
        <div className="sm:hidden w-full max-w-xl mx-auto relative p-4">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              {posts
                ?.slice(0, 4)
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
        <div className="hidden sm:grid lg:grid-cols-3 gap-8">
          {posts?.slice(0, 3).map((post, ind) => (
            <FeaturedPostCard key={ind} post={post} />
          ))}
        </div>
      </section>
      <BrowseByCategories />
      <NewsLetter />
    </section>
  );
};

export default HomePage;
