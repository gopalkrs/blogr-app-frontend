import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { usePostStore } from "../store/postsStore";
import { ArrowLeft, Loader, MoveLeft, Tags } from "lucide-react";
import { format } from "date-fns";
import { Button } from "../components/ui/button";
import DOMPurify from "dompurify";
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
      <button 
        className="bg-blue-300 text-xs text-gray-50 p-1 rounded shadow-xl my-5 mx-5 hover:none"
      >
        <Link
          to={`/dashboard`} /*/users/${user?.id}*/
          className="flex flex-row items-center"
        >
          <ArrowLeft className="h-4 w-4" /> Dashboard
        </Link>
      </button>
      <div className="mx-auto max-w-[80%] md:max-w-2xl lg:max-w-3xl sm:max-w-xl bg-white py-5 px-6 ">
        <h1 className="py-1 font-bold text-md text-left sm:text-2xl leading-tight">
          {posts.title}
        </h1>
        <div className="flex flex-col py-5">
          {posts?.user && (
            <div className="">
              <p className="text-gray-500 text-xs font-medium">
                {posts?.user[0].name}
              </p>
            </div>
          )}
          <p className="text-gray-400 text-xs font-light">
            {posts?.date && format(new Date(posts.date), "PPp")}
          </p>
          <p><Tags/>{posts?.category || ""}</p>
        </div>
        <div className="relative">
        <img
        className="h-full w-full object-cover"
          src={
            posts.imageUrl ||
            `https://gopalkrsbucket.s3.eu-north-1.amazonaws.com/f8a413fc-d089-4e28-9651-ad7f1f94795b-christin-hume-k2Kcwkandwg-unsplash.jpg`
          }
        />
        </div>

        <article className=" text-gray-800">
          <div
            className="prose py-5 text-sm sm:text-xl"
            dangerouslySetInnerHTML={{ __html: posts.content }}
          />
          {/* <p className="py-5 text-sm sm:text-xl">{posts.content}</p> */}
        </article>
      </div>
    </div>
  );
};

export default BlogPage;
