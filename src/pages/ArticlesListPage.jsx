import { format } from "date-fns";
import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../components/ui/button";
import { Loader, Plus, User, UserCircle, UserCircle2Icon } from "lucide-react";
import { useGetAllPostStore } from "../store/useGetAllPostStore";
import { Link } from "react-router-dom";
import { useGetUserStore } from "../store/useGetUserStore";
import { motion } from "framer-motion";
import RecentPostSlider from "../components/RecentPostSlider";
import BlogCard from "../components/home/BlogCard";
import ArticleListPageHeader from "../components/article-list/ArticleListPageHeader";

const ArticlesListPage = () => {
  const { posts, getAllPostsCreated, isLoading } = useGetAllPostStore();
  const { user, fetchIfUserLogged } = useGetUserStore();

  useEffect(() => {
    getAllPostsCreated();
    fetchIfUserLogged();
  }, []);

  if (isLoading && !posts) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  if (!posts) {
    return (
      <div className="flex items-center flex-col justify-center min-h-screen space-y-6">
        <h3 className="text-md font-medium">No post exists!</h3>
        <p className="text-center text-sm text-muted-foreground">
          It looks like there are no blog posts yet
        </p>
      </div>
    );
  }

  return (
    <motion.section
      initial={{ x: -500, opacity: 0 }}
      exit={{ x: -500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="relative min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50"
    >
      <ArticleListPageHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 justify-center gap-6 sm:grid-cols-3 lg:grid-cols-4 sm:gap-8">
          {posts?.map((post, index) => (
            <BlogCard post={post} user={user} key={index} />
          ))}
        </div>
      </div>
      {user.role === "admin" ? (
        <div className="sticky bottom-6 flex justify-end">
          <Button
            variant={"outline"}
            className="text-xs bg-blue-300 text-gray-50 rounded shadow-xl sm:text-md py-2 px-2 hover:bg-blue-400 hover:text-amber-100 transition-all delay-2 ease-in-out bottom-6 right-6 z-50"
          >
            <Link className="flex items-center gap-1 flex-row" to={"/create"}>
              Create New <Plus className="h-3 w-3" />
            </Link>
          </Button>
        </div>
      ) : (
        <></>
      )}
    </motion.section>
  );
};

export default ArticlesListPage;
