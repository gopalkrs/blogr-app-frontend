import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { usePostStore } from "../store/postsStore";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Eye,
  Heart,
  Loader,
  MoveLeft,
  Tags,
} from "lucide-react";
import { format } from "date-fns";
import { Button } from "../components/ui/button";
import DOMPurify from "dompurify";
import { useGetUserStore } from "../store/useGetUserStore";
import ArticleEndSection from "../components/article-page/ArticleEndSection";

const BlogPage = () => {
  const { id } = useParams();

  const { isLoading, posts, getPostWithId } = usePostStore();

  const { user, fetchIfUserLogged } = useGetUserStore();
  useEffect(() => {
    fetchIfUserLogged();
    getPostWithId(id);
  }, []);

  if (isLoading && !posts) {
    return (
      <div className="flex items-center justify-center h-screen animate-spin">
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-orange-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to={'/articles'} className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline font-medium">Back to Blogs</span>
            </Link>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Eye className="w-4 h-4" />
                <span className="hidden sm:inline">0 views</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-orange-100 overflow-hidden px-6 pb-6 mb-8">
          <div className="p-6 sm:p-8">
            {/* Meta Info */}
            <div className="h-64 sm:h-80 bg-gradient-to-br from-orange-400 to-amber-400 relative">
              <img
                loading="lazy"
                className="h-full w-full object-cover"
                src={
                  posts.imageUrl ||
                  `https://gopalkrsbucket.s3.eu-north-1.amazonaws.com/f8a413fc-d089-4e28-9651-ad7f1f94795b-christin-hume-k2Kcwkandwg-unsplash.jpg`
                }
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-6 left-6">
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-white">
                  {posts.category}
                </span>
              </div>
            </div>
            <div className="my-6 flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>
                  {posts?.date && format(new Date(posts.date), "PPp")}
                </span>
              </div>
              {/* <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{posts.readTime}</span>
              </div> */}
              <div className="flex items-center space-x-1">
                <Heart className="w-4 h-4" />
                <span>{posts.likes} likes</span>
              </div>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            {posts.title}
          </h1>
          {/*Author Info*/}
          <div className="flex items-center space-x-4 p-4 bg-orange-50/50 rounded-xl mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">{"R"}</span>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">
                {/* {posts?.user[0]?.name} */}
              </h3>
              <p className="text-sm text-gray-600">bio...</p>
              <p className="text-xs text-gray-500">0 followers</p>
            </div>
            <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
              Follow
            </button>
          </div>
          {/* Post Content */}
          <div className="prose prose-lg max-w-none">
            <div
              className="text-gray-700 leading-relaxed mb-6"
              dangerouslySetInnerHTML={{ __html: posts.content }}
            />
          </div>
          {/* <ArticleEndSection /> */}
          <ArticleEndSection />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
