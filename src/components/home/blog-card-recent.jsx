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
import { UserLock, UserRound } from "lucide-react";

const BlogCardRecent = ({ post }) => {
  const { getAllPostsCreated } = useGetAllPostStore();
  const preview = truncate(post?.content, 100);
  const sanitized = DOMPurify.sanitize(preview);

  return (
    <div className="flex flex-col items-center bg-white">
      <div className="relative h-45 w-45 rounded overflow-hidden shadow-md">
        <img
          className="h-full w-full object-cover"
          src={
            post.imageUrl ||
            "https://gopalkrsbucket.s3.eu-north-1.amazonaws.com/f8a413fc-d089-4e28-9651-ad7f1f94795b-christin-hume-k2Kcwkandwg-unsplash.jpg"
          }
          alt="Blog-promo-image"
        />
      </div>
      <h3 className="text-center font-bold sm:text-md pb-2 text-sm">
        {post.title}
      </h3>
      <div className="flex flex-row items-center justify-around">
        <div className="flex items-center flex-col">
          <div className="flex flex-row items-center gap-1">
            <UserRound className="w-3 h-3 text-amber-500" />
            <p className="text-gray-400 text-sm font-light">
              {post?.user[0].name}
            </p>
          </div>
        </div>
        <p className="text-gray-400 text-xs font-light">
          {format(new Date(post?.date), "PPp")}
        </p>
      </div>
    </div>
    // {/* <p className="text-sm text-muted-foreground text-center">
    //       {post.content.length > 100
    //         ? `${post.content.substring(0, 100)}...`
    //         : post.content}
    //       {post.content.length > 100 && (
    //         <span className="text-blue-500">
    //           <Link to={`/posts/${post._id}`}>Read more</Link>
    //         </span>
    //       )}
    //     </p> */}
    // {/* <div className="text-sm text-muted-foreground">
    //       <div
    //         className="prose"
    //         dangerouslySetInnerHTML={{ __html: sanitized }}
    //       />
    //       {post.content.length > 100 && (
    //         <span className="text-blue-500">
    //           <Link to={`/posts/${post._id}`}>Read more</Link>
    //         </span>
    //       )}
    //     </div> */}
  );
};

export default BlogCardRecent;
