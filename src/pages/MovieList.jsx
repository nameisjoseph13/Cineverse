import { useSearchParams } from "react-router-dom";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

export const MovieList = ({apiPath}) => {
  const [searchParams] = useSearchParams();

  const queryTerm = searchParams.get("q");

  const {data: movies, loading, error, title, quote} = useFetch(apiPath, queryTerm);

  console.log("1");

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
            <p className="mt-4 text-slate-600 dark:text-slate-400">Loading movies...</p>
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="text-red-500 text-xl mb-4">⚠️</div>
            <p className="text-slate-600 dark:text-slate-400">Error loading movies: {error}</p>
          </div>
        </div>
      </main>
    );
  }
if (movies.length === 0) {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-2xl mx-auto text-center">
          
          {/* Animated Search Icon */}
          <div className="relative mb-8">
            <div className="text-6xl md:text-7xl text-slate-300 dark:text-slate-700 mb-4">
              🔍
            </div>
            <div className="absolute -top-2 -right-2 text-3xl animate-bounce">
              ❌
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 dark:from-amber-400 dark:via-orange-500 dark:to-red-500 bg-clip-text text-transparent">
              No Movies Found
            </h1>
            
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
                We couldn't find any movies matching{" "}
                <span className="font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 px-2 py-1 rounded">
                  "{queryTerm}"
                </span>
              </p>
              <p className="text-slate-500 dark:text-slate-500">
                Don't worry! Try adjusting your search or explore our popular collections below.
              </p>
            </div>

            {/* Search Suggestions */}
            <div className="bg-slate-100/50 dark:bg-slate-800/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4 flex items-center">
                <span className="text-amber-500 mr-2">💡</span>
                Search Tips
              </h3>
              <ul className="text-left space-y-2 text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 mt-0.5">•</span>
                  Check your spelling and try again
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 mt-0.5">•</span>
                  Use fewer or different keywords
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 mt-0.5">•</span>
                  Try searching by actor or director name
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 mt-0.5">•</span>
                  Browse our curated collections instead
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => window.history.back()}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:ring-offset-2 focus:ring-offset-slate-50 dark:focus:ring-offset-slate-900 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                </svg>
                Try Another Search
              </button>

              <Link 
                to="/" 
                className="inline-flex items-center px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 border border-slate-300 dark:border-slate-600 hover:border-amber-400 dark:hover:border-amber-500"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Back to Home
              </Link>
            </div>

            {/* Popular Suggestions */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
              <p className="text-sm text-slate-500 dark:text-slate-500 mb-4">
                Or explore these popular categories
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link 
                  to="/movies/popular" 
                  className="px-4 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 bg-slate-100 dark:bg-slate-800 hover:bg-amber-50 dark:hover:bg-amber-900/20 rounded-lg transition-all duration-300 flex items-center"
                >
                  🔥 Popular Movies
                </Link>
                <Link 
                  to="/movies/top" 
                  className="px-4 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 bg-slate-100 dark:bg-slate-800 hover:bg-amber-50 dark:hover:bg-amber-900/20 rounded-lg transition-all duration-300 flex items-center"
                >
                  ⭐ Top Rated
                </Link>
                <Link 
                  to="/movies/upcoming" 
                  className="px-4 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 bg-slate-100 dark:bg-slate-800 hover:bg-amber-50 dark:hover:bg-amber-900/20 rounded-lg transition-all duration-300 flex items-center"
                >
                  🎬 Upcoming
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Page Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 dark:from-amber-400 dark:via-orange-500 dark:to-red-500 bg-clip-text text-transparent mb-4">
              {title}
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              {quote}
            </p>
          </div>
        </div>
      </div>

      {/* Movies Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>

        {/* Empty State */}
        {movies.length === 0 && !loading && (
          <div className="text-center py-12">
            <div className="text-slate-400 text-6xl mb-4">🎬</div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
              No movies found
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Check back later for the latest movie updates
            </p>
          </div>
        )}
      </section>
    </main>
  );
};
