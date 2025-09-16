import { BookOpen, TrendingUp, Users } from 'lucide-react'
import React from 'react'

const FeaturesGrid = () => {
  return (
    <section>
         {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 px-6 md:px-16 mb-20">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-orange-100 hover:border-orange-200 transition-all duration-300 hover:shadow-xl group">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quality Content</h3>
              <p className="text-gray-600 leading-relaxed">
                Curated articles from expert writers covering technology, lifestyle, business, and more. Every piece is fact-checked and engaging.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-orange-100 hover:border-orange-200 transition-all duration-300 hover:shadow-xl group">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Community Driven</h3>
              <p className="text-gray-600 leading-relaxed">
                Join a vibrant community of readers and writers. Comment, share, and discover new perspectives from around the globe.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-orange-100 hover:border-orange-200 transition-all duration-300 hover:shadow-xl group">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Trending Topics</h3>
              <p className="text-gray-600 leading-relaxed">
                Stay ahead with trending articles and breaking news. Our algorithm ensures you never miss what matters most.
              </p>
            </div>
          </div>
    </section>
  )
};

export default FeaturesGrid;