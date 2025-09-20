import { Filter, Search } from 'lucide-react';
import React, { useState } from 'react'

const ArticleListPageHeader = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [sortBy, setSortBy] = useState('latest');

  const categories = [
    "Technology",
    "Lifestyle",
    "Business",
    "Health",
    "Travel",
    "Food",
    "Sports",
    "Finance",
    "Career",
    "Environment",
    "Others"
  ];

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSortBy('latest');
    //setCurrentPage(1);
  };

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col space-y-4">
            {/* Title */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
                  Discover <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Stories</span>
                </h1>
                <p className="text-gray-600">Explore our collection of insightful articles and stories</p>
              </div>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search articles, authors, topics..."
                  className="w-full pl-12 pr-4 py-3 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent bg-white/80"
                />
              </div>

              {/* Filter Button (Mobile) */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center justify-center px-4 py-3 bg-white border border-orange-200 text-gray-700 rounded-xl hover:bg-orange-50 transition-colors"
              >
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </button>

              {/* Desktop Filters */}
              <div className="hidden lg:flex items-center space-x-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300 bg-white/80"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300 bg-white/80"
                >
                  <option value="latest">Latest</option>
                  <option value="oldest">Oldest</option>
                  <option value="popular">Most Popular</option>
                  <option value="liked">Most Liked</option>
                  <option value="comments">Most Commented</option>
                </select>

                {(searchTerm || selectedCategory !== 'All' || sortBy !== 'latest') && (
                  <button
                    onClick={clearFilters}
                    className="px-4 py-2 text-orange-600 hover:text-orange-700 font-medium"
                  >
                    Clear All
                  </button>
                )}
              </div>
            </div>

            {/* Mobile Filters */}
            {showFilters && (
              <div className="lg:hidden bg-white/90 backdrop-blur-sm border border-orange-200 rounded-xl p-4 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 bg-white/80"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 bg-white/80"
                  >
                    <option value="latest">Latest</option>
                    <option value="oldest">Oldest</option>
                    <option value="popular">Most Popular</option>
                    <option value="liked">Most Liked</option>
                    <option value="comments">Most Commented</option>
                  </select>
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={clearFilters}
                    className="px-4 py-2 text-orange-600 hover:text-orange-700 font-medium"
                  >
                    Clear All
                  </button>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
  )
}

export default ArticleListPageHeader