import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePostStore } from "../store/postsStore";
import { Loader, MoveLeft } from "lucide-react";
import { format } from "date-fns";
import { Button } from "../components/ui/button";

const Blogs = () => {
  const { id } = useParams();

  const { isLoading, posts, getPostWithId } = usePostStore();
  useEffect(() => {
    getPostWithId(id);
  }, []);

  if (isLoading) {
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
        <MoveLeft /> dashboard
      </Button>
      <div className="mx-auto max-w-[80%] md:max-w-2xl sm:max-w-xl bg-white shadow-md rounded-md py-12 px-6 ">
        <h1 className="py-5 font-bold text-md text-center sm:text-2xl leading-tight">
          {posts.title}
        </h1>
        <p className="italic text-muted-foreground text-xs sm:text-sm">
          {format(new Date(posts.date), "PPpp")}
        </p>
        <article className=" text-gray-800">
          <p className="py-5 text-sm sm:text-xl">{posts.content}</p>
        </article>
      </div>
    </div>
  );
};

export default Blogs;
