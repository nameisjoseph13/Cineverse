import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const PageNotFound = () => {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = '/';
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        
        {/* 404 Animation */}
        <div className="relative mb-8">
          <div className="text-8xl md:text-9xl font-bold text-slate-200 dark:text-slate-800 select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl md:text-7xl animate-bounce">
              🎬
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 dark:from-amber-400 dark:via-orange-500 dark:to-red-500 bg-clip-text text-transparent">
            Oops! Scene Not Found
          </h1>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
            Looks like this page took an unexpected plot twist and disappeared! 
            The content you're looking for might have been moved, deleted, or never existed.
          </p>

          {/* Suggestions */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">
              What you can do:
            </h3>
            <ul className="text-left space-y-2 text-slate-600 dark:text-slate-400">
              <li className="flex items-center">
                <span className="text-amber-500 mr-2">✓</span>
                Check the URL for any typos
              </li>
              <li className="flex items-center">
                <span className="text-amber-500 mr-2">✓</span>
                Go back to the homepage
              </li>
              <li className="flex items-center">
                <span className="text-amber-500 mr-2">✓</span>
                Browse our popular movies
              </li>
              <li className="flex items-center">
                <span className="text-amber-500 mr-2">✓</span>
                Use the search feature
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:ring-offset-2 focus:ring-offset-slate-50 dark:focus:ring-offset-slate-900 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Back to Home
            </Link>

            <Link 
              to="/movies/popular" 
              className="inline-flex items-center px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 border border-slate-300 dark:border-slate-600 hover:border-amber-400 dark:hover:border-amber-500"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10l1 8.5a2 2 0 01-2 2.2H8a2 2 0 01-2-2.2L7 4z" />
              </svg>
              Browse Movies
            </Link>
          </div>

          {/* Quick Navigation */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
            <p className="text-sm text-slate-500 dark:text-slate-500 mb-4">
              Quick Navigation
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link 
                to="/movies/popular" 
                className="px-4 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 bg-slate-100 dark:bg-slate-800 hover:bg-amber-50 dark:hover:bg-amber-900/20 rounded-lg transition-all duration-300"
              >
                Popular
              </Link>
              <Link 
                to="/movies/top" 
                className="px-4 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 bg-slate-100 dark:bg-slate-800 hover:bg-amber-50 dark:hover:bg-amber-900/20 rounded-lg transition-all duration-300"
              >
                Top Rated
              </Link>
              <Link 
                to="/movies/upcoming" 
                className="px-4 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 bg-slate-100 dark:bg-slate-800 hover:bg-amber-50 dark:hover:bg-amber-900/20 rounded-lg transition-all duration-300"
              >
                Upcoming
              </Link>
            </div>
          </div>

          {/* Auto-redirect Notice */}
          <div className="text-sm text-slate-500 dark:text-slate-500 bg-slate-100/50 dark:bg-slate-800/50 rounded-lg p-4">
            <p>
              Automatically redirecting to homepage in{" "}
              <span className="font-semibold text-amber-600 dark:text-amber-400">
                {countdown}
              </span>{" "}
              seconds
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
