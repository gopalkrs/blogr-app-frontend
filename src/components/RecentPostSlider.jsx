import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DOMPurify from "dompurify";
import { Delete, ShieldUser, User, UserLock, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import truncate from "html-truncate";
import * as motion from "motion/react-client";
import { formatDistanceToNow } from 'date-fns';


const RecentPostSlider = ({ post }) => {
  const preview = truncate(post?.content, 100);
  const sanitized = DOMPurify.sanitize(preview);
 

  return (
          <motion.div
            className="absolute flex h-full md:h-8/12 w-full flex-col rounded-md shadow-md bg-slate-50 p-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
              <h2 className="text-center font-semibold sm:text-md pb-2 text-sm">
                {post.title}
              </h2>
            
              <div className="text-sm sm:mt-10 mt-4 text-gray-400">
                <div
                  className="prose"
                  dangerouslySetInnerHTML={{ __html: sanitized }}
                />
                {/* {post.content.length > 100 && (
                  <span className="text-blue-500">
                    <Link to={`/posts/${post._id}`}>Read more</Link>
                  </span>
                )} */}
              </div>
            <div className="absolute bottom-1 flex flex-col flex-start mt-4">
              
                <div className="flex flex-row items-center gap-1">
                  <span>
                  {post?.user[0].role === "admin" ? (
                    <UserLock className="h-4 w-4 text-red-500" />
                  ) : (
                    <UserRound className="w-3 h-3 text-amber-500" />
                  )}
                  </span>
                  <p className="text-gray-400 sm:text-sm text-xs font-light">
                    {post?.user[0].name}
                  </p>
                </div>
              
              <p className="text-gray-500 text-xs font-light">
                {formatDistanceToNow(new Date(post?.date), { addSuffix: true })}
              </p>
              </div>
          </motion.div>
  );
};

export default RecentPostSlider;
