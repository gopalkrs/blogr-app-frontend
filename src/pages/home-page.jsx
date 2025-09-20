import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
//import motion from "motion";
import * as motion from "motion/react-client";
import { useGetAllPostStore } from "../store/useGetAllPostStore";
import FeaturesGrid from "../components/home/FeaturesGrid";
import BrowseByCategories from "../components/home/BrowseByCategories";
import FeaturedPosts from "../components/home/FeaturedPosts";
import NewsLetter from "../components/home/NewsLetter";
import PostCard from "../components/posts-card/PostCard";
import {
  useGetMostLikedPosts,
  useGetMostRecentPosts,
} from "../store/useFilteredPosts";

const HomePage = () => {
  const { posts, getAllPostsCreated, isLoading } = useGetAllPostStore();

  const { featuredPosts, getFeaturedPosts } = useGetMostLikedPosts();

  const { recentPosts, getMostRecentPosts } = useGetMostRecentPosts();

  useEffect(() => {
    getAllPostsCreated();
    //console.log(posts);
  }, []);

  useEffect(() => {
    getFeaturedPosts();
    //console.log(featuredPosts);
  }, []);

  useEffect(() => {
    getMostRecentPosts();
    //console.log(featuredPosts);
  }, []);



  return (
    <section>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Discover Amazing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
              {" "}
              Stories
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of readers exploring insightful articles, tutorials,
            and stories from passionate writers around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={"/articles"}
              className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-full hover:from-orange-600 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 font-medium shadow-xl flex items-center space-x-2"
            >
              <span>Start Reading</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to={"/create"}
              className="text-gray-700 border-2 border-gray-200 px-8 py-4 rounded-full hover:border-orange-300 hover:text-orange-600 transition-all duration-300 font-medium flex items-center space-x-2 bg-white/50"
            >
              Create
            </Link>
          </div>
        </div>
      </section>

      <FeaturesGrid />
      {featuredPosts && <FeaturedPosts posts={featuredPosts} />}

      <section className="py-12 px-6 md:px-16">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600">
              Fresh insights and stories published recently
            </p>
          </div>
          <Link
            to={"/articles"}
            className="hidden md:block bg-white/60 backdrop-blur-sm border-2 border-orange-200 text-orange-600 px-6 py-3 rounded-full hover:border-orange-300 hover:bg-white/80 transition-all duration-300 font-medium"
          >
            View All Posts
          </Link>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {recentPosts?.map((post, ind) => (
            <PostCard key={ind} post={post} />
          ))}
        </div>
      </section>
      <BrowseByCategories />
      <NewsLetter />
    </section>
  );
};

export default HomePage;
