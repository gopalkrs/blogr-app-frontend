import { format } from "date-fns";
import React, { useEffect } from "react";
import { usePostStore } from "../store/postsStore";
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
import { allPostStore } from "../store/allPostStore";
import { Link } from "react-router-dom";
import { useUserStore } from "../store/userStore";

const BlogsDashboard = () => {
  const { posts, getAllPostsCreated, isLoading } = allPostStore();
  const { user, fetchIfUserLogged } = useUserStore();

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
    <section className="relative w-full max-w-4xl mx-auto px-4 space-y-4 m-10 min-h-screen">
      <div className="grid grid-cols-1 justify-center gap-6 sm:grid-cols-3 sm:gap-8">
        {posts?.map((post, index) => (
          <Card key={index} className="relative shadow-md bg-white">
            <CardHeader className="flex items-center justify-center">
              <CardTitle className="text-center space-y-2">
                <h2 className="font-bold text-md">{post.title}</h2>
                <div className="flex flex-row items-center justify-around ">
                  <div className="flex flex-row items-center gap-1">
                    <User className="h-3 w-3 text-gray-600" />
                    <p className="text-gray-600 text-sm font-light">
                      {post.user[0].name}
                    </p>
                  </div>
                  <span
                    className={`${
                      post.user[0].role === "admin"
                        ? "bg-blue-500"
                        : "bg-amber-400"
                    } px-1 rounded-full text-center text-xs font-light text-white`}
                  >
                    {post.user[0].role}
                  </span>
                </div>
                <p className="text-gray-400 text-xs font-light">
                  {format(new Date(post.date), "PPp")}
                </p>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                {post.content.length > 100
                  ? `${post.content.substring(0, 100)}...`
                  : post.content}
                {post.content.length > 100 && (
                  <span className="text-blue-500">
                    <Link to={`/posts/${post._id}`}>Read more</Link>
                  </span>
                )}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      {user.user.role === "admin" ? (
        <Button
          variant={"outline"}
          className="fixed text-xs sm:text-md py-2 px-2 hover:bg-blue-400 hover:text-amber-100 transition-all delay-2 ease-in-out text-white bg-blue-500 bottom-1 right-1 z-10"
        >
          <Link className="flex items-center gap-1 flex-row" to={'/create'}>
            Create New <Plus className="h-3 w-3" />
          </Link>
        </Button>
      ) : (
        <></>
      )}
    </section>
  );
};

export default BlogsDashboard;
