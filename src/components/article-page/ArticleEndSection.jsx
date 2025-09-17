import { ChevronUp, Heart, MessageCircle } from "lucide-react";
import React, { useState } from "react";

const ArticleEndSection = () => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* Article Actions */}
      <div className="flex items-center justify-between pt-8 border-t border-orange-100 mt-8">
        <div className="flex items-center space-x-4">
          <button
            onClick={handleLike}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
              liked
                ? "bg-red-100 text-red-600"
                : "bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-orange-600"
            }`}
          >
            <Heart className={`w-5 h-5 ${liked ? "fill-current" : ""}`} />
            <span>{0 + (liked ? 1 : 0)}</span>
          </button>

          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-full hover:bg-orange-100 hover:text-orange-600 transition-all duration-300">
            <MessageCircle className="w-5 h-5" />
            <span>{0}</span>
          </button>
        </div>

        <button
          onClick={scrollToTop}
          className="p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all duration-300"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ArticleEndSection;
