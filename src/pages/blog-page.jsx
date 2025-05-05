import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { usePostStore } from "../store/postsStore";
import { Loader, MoveLeft } from "lucide-react";
import { format } from "date-fns";
import { Button } from "../components/ui/button";
import { useGetUserStore } from "../store/useGetUserStore";

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
    <div className="min-h-screen my-10">
      <Button
        variant={"ghost"}
        className="text-blue-500 bg-transparent my-10 mx-5 hover:none"
      >
        <Link
          to={`/users/${user?.id}`}
          className="flex flex-row items-center gap-1"
        >
          <MoveLeft /> dashboard
        </Link>
      </Button>
      <div className="mx-auto max-w-[80%] md:max-w-2xl sm:max-w-xl bg-white shadow-md rounded-md py-12 px-6 ">
        <h1 className="py-5 font-bold text-md text-center sm:text-2xl leading-tight">
          {posts.title}
        </h1>
        <div className="flex items-center justify-between">
          {posts?.user && (
            <div className="flex flex-col items-center gap-1">
              <p className="text-gray-600 text-sm font-light">
                {posts?.user[0].name}
              </p>
              {posts?.user && posts?.user[0].role === "admin" ? (
                <span className="bg-gray-700 text-white rounded-full flex items-center justify-center text-center text-xs px-2">
                  {posts?.user[0].role}
                </span>
              ) : (
                <span className="bg-amber-300 text-white rounded-full flex items-center justify-center text-center text-xs px-2">
                  {posts?.user[0].role}
                </span>
              )}
            </div>
          )}
          <p className="text-gray-400 text-xs font-light">
            {posts?.date && format(new Date(posts.date), "PPp")}
          </p>
        </div>

        <article className=" text-gray-800">
          <p className="py-5 text-sm sm:text-xl">{posts.content}</p>
        </article>
      </div>
    </div>
  );
};

export default BlogPage;
