import React from 'react'

const NewsLetter = () => {
  return (
        <div className="mb-20 px-6 md:px-16">
            <div className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 rounded-3xl p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
              
              <div className="relative z-10 max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Stay in the Loop</h2>
                <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                  Get the latest articles, exclusive content, and weekly insights delivered straight to your inbox. Join 50,000+ subscribers who never miss a beat.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 bg-white/95 backdrop-blur-sm"
                  />
                  <button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 font-medium shadow-lg">
                    Subscribe Now
                  </button>
                </div>
                
                <p className="text-sm text-orange-200 mt-4">
                  No spam, unsubscribe at any time. We respect your privacy.
                </p>
              </div>
            </div>
          </div>
  )
}

export default NewsLetter;