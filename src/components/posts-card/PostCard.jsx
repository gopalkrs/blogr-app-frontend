import truncate from "html-truncate";
import React from "react";
import DOMPurify from "dompurify";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  const preview = truncate(post?.content, 100);
  const sanitized = DOMPurify.sanitize(preview);

  //console.log(post);

  return (
    <Link
      to={`/posts/${post._id}`}
      className="bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden border border-orange-100 hover:border-orange-200 transition-all cursor-pointer duration-300 hover:shadow-xl group"
    >
      <div className="h-64 bg-gradient-to-br from-orange-400 to-amber-400 relative overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={
            post?.imageUrl ||
            "https://gopalkrsbucket.s3.eu-north-1.amazonaws.com/f8a413fc-d089-4e28-9651-ad7f1f94795b-christin-hume-k2Kcwkandwg-unsplash.jpg"
          }
          alt="Blog-promo-image"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
        <div className="absolute bottom-4 left-6 text-white">
          <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
            {post?.categorytype}
          </span>
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors">
          {post?.title}
        </h3>
        <div className="text-gray-600 mb-6 leading-relaxed">
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: sanitized }}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">
                {post?.user[0]?.name.charAt(0) || "A"}
              </span>
            </div>
            <div>
              <p className="font-medium text-gray-800">{post?.user[0]?.name}</p>
              <p className="text-sm text-gray-500">2 days ago</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
