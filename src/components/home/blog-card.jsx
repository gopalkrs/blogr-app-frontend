import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DOMPurify from "dompurify";
import truncate from "html-truncate";
import { useGetAllPostStore } from "../../store/useGetAllPostStore";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { Delete, Dot, UserCircle, UserLock, UserRound } from "lucide-react";
import { usePostStore } from "../../store/postsStore";

const BlogCard = ({ post, user }) => {
  const { getAllPostsCreated } = useGetAllPostStore();
  const preview = truncate(post?.content, 100);
  const sanitized = DOMPurify.sanitize(preview);

  const { deletePostWithId } = usePostStore();
  
    const deletePostHandler = async (id) => {
      await deletePostWithId(id);
      await getAllPostsCreated();
    };

  return (
    <Link to={`/posts/${post._id}`} className="flex flex-col items-center max-w-60">
      <div className="relative h-50 w-60 rounded-xl overflow-hidden shadow-md">
      {post.userId === user?.id && (
          <Delete
            onClick={() => deletePostHandler(post?._id)}
            className="absolute text-white right-1 z-50 top-1 w-5 h-5 cursor-pointer"
          />
        )}
        <img
          className="h-full w-full object-cover"
          src={
            post.imageUrl ||
            "https://gopalkrsbucket.s3.eu-north-1.amazonaws.com/f8a413fc-d089-4e28-9651-ad7f1f94795b-christin-hume-k2Kcwkandwg-unsplash.jpg"
          }
          alt="Blog-promo-image"
        />
      </div>
      <div className="space-y-2 px-1 pt-2 ">
      <h3 className="font-bold sm:text-md text-sm">
        {post.title}
      </h3>
       <div className="text-xs text-muted-foreground">
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: sanitized }}
          />
        </div>
      <div className="flex flex-row items-center">
        <div className="flex items-center flex-col">
          <div className="flex flex-row items-center gap-1">
            <UserCircle className="w-3 h-3 text-gray-900" />
            <p className="text-gray-500 text-xs font-medium">
              {post?.user[0].name}
            </p>
          </div>
        </div>
        <p className="flex flex-row items-center text-gray-400 text-xs font-light">
          <Dot/>{format(new Date(post?.date), "P")}
        </p>
      </div>
    </div>
    </Link>
  );
};

export default BlogCard;
