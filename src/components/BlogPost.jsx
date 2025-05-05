import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { usePostStore } from "../store/postsStore";
import { Delete, ShieldUser, User, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const BlogPost = ({ post, user }) => {
  const { deletePostWithId } = usePostStore();

  return (
    <div>
      <Card className="relative shadow-md bg-white">
        {post.userId === user.id && (
          <Delete
            onClick={() => deletePostWithId(post?._id)}
            className="absolute right-5 top-1 w-5 h-5 cursor-pointer"
          />
        )}
        <CardHeader className="flex items-center justify-center border-b border-gray-100 py-2">
          <CardTitle className="text-center font-bold sm:text-md pb-2 text-sm">
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
        <CardFooter className="flex flex-row items-center justify-around">
          <div className="flex items-center flex-col">
            <div className="flex flex-row items-center gap-1">
              {post?.user[0].role === "admin" ? (
                <ShieldUser className="h-4 w-4 text-gray-700" />
              ) : (
                <UserRound className="w-3 h-3 text-amber-500" />
              )}
              <p className="text-gray-600 text-sm font-light">
                {post?.user[0].name}
              </p>
            </div>

            {/* <span
              className={`${
                post?.user[0].role === "admin" ? "bg-red-400" : "bg-amber-300"
              } px-1 rounded-full text-center text-xs font-light text-white`}
            >
              {post.user[0].role}
            </span> */}
          </div>
          <p className="text-gray-400 text-xs font-light">
            {format(new Date(post?.date), "PPp")}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BlogPost;
