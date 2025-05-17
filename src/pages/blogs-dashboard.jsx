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
import BlogPost from "../components/BlogPost";
import { useGetUserStore } from "../store/useGetUserStore";
import { motion } from "framer-motion";

const BlogsDashboard = () => {
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
      className="relative w-full max-w-4xl mx-auto px-4 space-y-4 m-10 min-h-screen"
    >
      <div className="grid grid-cols-1 justify-center gap-6 sm:grid-cols-3 sm:gap-8">
        {posts?.map((post, index) => (
          <BlogPost post={post} user={user} key={index} />
        ))}
      </div>
      {user.role === "admin" ? (
        <div className="sticky bottom-6 flex justify-end">
          <Button
            variant={"outline"}
            className="text-xs sm:text-md py-2 px-2 hover:bg-gray-900 hover:text-amber-100 transition-all delay-2 ease-in-out text-white bg-black bottom-6 right-6 z-50"
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

export default BlogsDashboard;
