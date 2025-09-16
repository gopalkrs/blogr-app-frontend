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

const categories = [
                { name: "Technology", count: "1,250 articles", color: "from-blue-500 to-purple-500", icon: "💻" },
                { name: "Lifestyle", count: "890 articles", color: "from-pink-500 to-red-500", icon: "🌟" },
                { name: "Business", count: "672 articles", color: "from-green-500 to-teal-500", icon: "📈" },
                { name: "Health", count: "543 articles", color: "from-orange-500 to-yellow-500", icon: "🏃‍♀️" },
                { name: "Travel", count: "432 articles", color: "from-indigo-500 to-blue-500", icon: "✈️" },
                { name: "Food", count: "321 articles", color: "from-red-500 to-orange-500", icon: "🍽️" },
                { name: "Design", count: "298 articles", color: "from-purple-500 to-pink-500", icon: "🎨" },
                { name: "Finance", count: "267 articles", color: "from-yellow-500 to-green-500", icon: "💰" }
              ];
const BrowseByCategories = () => {
  return (
    // <div className="py-10 px-10 space-y-5">
    //   <div className="text-center mb-12">
    //     <h2 className="text-3xl font-bold text-gray-900 mb-4">
    //       Explore Categories
    //     </h2>
    //     <p className="text-lg text-gray-600">
    //       Discover content tailored to your interests
    //     </p>
    //   </div>

    //   <div className="flex flex-wrap justify-center gap-4">
    //     {categoriesType.map((category, index) => (
    //       <div key={index} className="flex justify-center">
    //         <Link
    //           key={index}
    //           className="relative w-45 h-45 md:w-50 md:h-50 overflow-hidden rounded-md shadow-md cursor-pointer"
    //           href={`/${category.type.toLowerCase()}`}
    //         >
    //           <img
    //             src={category.img}
    //             alt="category-image"
    //             className="h-full w-full object-cover"
    //           />
    //           <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
    //             <p className="text-white text-sm font-semibold">
    //               {category.type}
    //             </p>
    //           </div>
    //           <ArrowUpRight className="absolute top-1 right-1 text-gray-100" />
    //         </Link>
    //       </div>
    //     ))}
    //   </div>
    //   <div className="text-center mt-5">
    //     <Link
    //       to="/categories"
    //       className="inline-flex items-center gap-1 
    //            border border-orange-200 text-blue-400
    //            rounded-lg text-xs px-3 py-2 w-fit"
    //     >
    //       Browse More
    //       <ArrowUpRight className="h-4 w-4" />
    //     </Link>
    //   </div>
    // </div>

     <div className="mb-20 md:px-16 px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Explore Categories</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Dive deep into topics that matter to you. From cutting-edge technology to everyday lifestyle tips.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-orange-100 hover:border-orange-200 transition-all duration-300 hover:shadow-lg group cursor-pointer">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-2xl`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600">{category.count}</p>
                </div>
              ))}
            </div>
          </div>

  );
};

export default BrowseByCategories;
