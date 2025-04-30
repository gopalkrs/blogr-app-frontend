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
import { Link } from "react-router-dom";
import { Delete, Loader, Recycle } from "lucide-react";
import { Button } from "../components/ui/button";

const UserBlogs = () => {
  const colorArray = ["#ffbd00", "#c9ada7", "#ff5400", "#f2e9e4", "#ff0054"];
  const colVal = () => {
    const val = Math.floor(Math.random() * colorArray.length);
    return colorArray[val];
  };
  const { posts, getAllPost, isLoading, deletePostWithId } = usePostStore();

  useEffect(() => {
    getAllPost();
  }, []);

  if (isLoading && !posts){
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="w-8 h-8 animate-spin" />
      </div>
    );
}
    if(!posts){
        return (
            <div className="flex items-center flex-col justify-center h-screen space-y-6">
              <h3 className="text-md font-medium">No post exists!</h3>
              <p className="text-center text-sm text-muted-foreground">It looks like there are no blog posts yet. <Button className="text-blue-500" size={4} variant={'link'}><Link to={'/create'}>Create One</Link></Button> to get started!</p>
            </div>
          );
    }

    const deletePostHandler = (id) =>{
        deletePostWithId(id);
    }

  return (
    <section className="w-full max-w-4xl mx-auto px-4 space-y-4 m-10 min-h-screen">
      <div className="grid grid-cols-1 justify-center gap-6 sm:grid-cols-3 md:grid-cols-2 sm:gap-8">
        {posts?.map((post, index) => (
          <Card key={index} className="relative shadow-md bg-white">
            <Delete onClick={()=>deletePostWithId(post?._id)} className="absolute right-5 top-1 w-5 h-5 cursor-pointer" />
            <CardHeader className="flex items-center justify-center border-b border-gray-100 py-2">
              <CardTitle className="text-center font-bold text-md pb-2">
                {post.title}
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
      <div className="flex flex-col items-center justify-between p-4 space-y-3 sm:space-y-5 mt-10">
        <div className="text-center">
            <h2 className="text-md sm:text-lg font-semibold text-gray-800">Manage your blogs</h2>
            <p className="text-xs sm:text-sm text-gray-500">You can create a new blog post or remove an existing one below.</p>
        </div>
        <div className="flex gap-3">
        <Button className="text-xs sm:text-sm text-blue-500" variant={'link'}><Link to={'/create'}>Create New blog</Link></Button>
        <Button className="text-xs sm:text-sm text-red-400 cursor-pointer hover:text-red-500" variant={'outline'}>Delete All Blogs <Recycle /></Button>
        </div>

      </div>
    </section>
  );
};

export default UserBlogs;
