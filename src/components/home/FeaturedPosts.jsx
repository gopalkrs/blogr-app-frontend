import { ArrowRight } from "lucide-react";
import React from "react";
import PostCard from "../posts-card/PostCard";

const FeaturedPosts = ({ posts }) => {
  return (
    <section>
      <div className="mb-20 px-6 md:px-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Featured Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our editor's picks and trending articles that are making
            waves in the community
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Large Featured Post */}
          {posts?.map((post, idx) => (
            <PostCard key={idx} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
