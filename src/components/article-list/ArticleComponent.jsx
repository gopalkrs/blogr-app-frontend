import { format } from "date-fns";
import { Calendar, Clock, Eye, Heart } from "lucide-react";
import React from "react";

const ArticleComponent = ({ posts }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {posts.map((article) => (
        <article
          key={article.id}
          className="bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-orange-100 hover:border-orange-200 transition-all duration-300 hover:shadow-lg group cursor-pointer"
        >
          {/* Image */}
          <div
            className={`h-48 bg-gradient-to-br relative`}
          >
            <img
              loading="lazy"
              className="h-full w-full object-cover"
              src={
                posts.imageUrl ||
                `https://gopalkrsbucket.s3.eu-north-1.amazonaws.com/f8a413fc-d089-4e28-9651-ad7f1f94795b-christin-hume-k2Kcwkandwg-unsplash.jpg`
              }
            />
            {/* {article.featured && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-white flex items-center">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Featured
                      </span>
                    </div>
                  )} */}
            <div className="absolute bottom-3 left-3">
              <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-white">
                {article.category}
              </span>
            </div>
          </div>

          <div className="p-6">
            {/* Title */}
            <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
              {article.title}
            </h2>

            {/* Excerpt */}
            {/* <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                    {article.excerpt}
                  </p> */}

            {/* Tags */}
            {/* <div className="flex flex-wrap gap-1 mb-4">
              {article.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs"
                >
                  #{tag}
                </span>
              ))}
              {article.tags.length > 2 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                  +{article.tags.length - 2}
                </span>
              )}
            </div> */}

            {/* Meta */}
            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">
                    {article.authorAvatar}
                  </span>
                </div>
                <span>{article.author}</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="flex items-center space-x-1">
                  <Eye className="w-4 h-4" />
                  <span>{article.views}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Heart className="w-4 h-4" />
                  <span>{article.likes}</span>
                </span>
              </div>
            </div>

            {/* Date and Read Time */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-orange-100">
              <div className="flex items-center space-x-1 text-xs text-gray-500">
                <Calendar className="w-3 h-3" />
                <span>
                  {article?.date && format(new Date(article.date), "PPp")}
                </span>
              </div>
              <div className="flex items-center space-x-1 text-xs text-gray-500">
                <Clock className="w-3 h-3" />
                <span>{10}</span>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ArticleComponent;
