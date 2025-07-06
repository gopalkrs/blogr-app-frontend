import { ArrowUpRight, SquareArrowOutUpRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const categoriesType = [
  {
    type: "Travel",
    img: "https://gopalkrsbucket.s3.eu-north-1.amazonaws.com/b5d163a8-7c37-464c-828e-508323fa7e39-travel.jpg",
  },
  {
    type: "Adventure",
    img: "https://gopalkrsbucket.s3.eu-north-1.amazonaws.com/003f5fc4-c62a-408b-ba96-675a8c6d8de2-advture.jpg",
  },
  {
    type: "Technology",
    img: "https://gopalkrsbucket.s3.amazonaws.com/96dc0cc0-e76b-4293-b6e1-d61e3f557b4c-techlogy.jpg",
  },
  {
    type: "Sports",
    img: "https://gopalkrsbucket.s3.eu-north-1.amazonaws.com/a758084c-7258-42c4-acce-fa33659bbb67-macity.jpg",
  },
];
const BrowseByCategories = () => {
  return (
    <div className="py-10 px-10 space-y-5">
      <div className="flex flex-row justify-between">
        <h1 className="font-medium text-md sm:text-xl">Browse by categories</h1>
        <Link to={`/categories`} className="border border-gray-200 text-blue-400 bg-gray-100 shadow-md rounded text-xs p-1 flex flex-row items-center gap-1">Browse More<ArrowUpRight className="h-4 w-4" /></Link>
      </div>
      <div className="grid items-center gap-2 grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categoriesType.map((category, index) => (
            <div key={index} className="flex justify-center">
          <Link
            key={index}
            className="relative w-45 h-45 md:w-50 md:h-50 overflow-hidden rounded-md shadow-md cursor-pointer"
            href={`/${category.type.toLowerCase()}`}
          >
            <img
              src={category.img}
              alt="category-image"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <p className="text-white text-sm font-semibold">
                {category.type}
              </p>
            </div>
            <ArrowUpRight className="absolute top-1 right-1 text-gray-100" />
            
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseByCategories;
