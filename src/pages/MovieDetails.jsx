import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Backup from "../assets/backup.webp";

export const MovieDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showFullOverview, setShowFullOverview] = useState(false);

  const image = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : Backup;
  const backdropImage = movie.backdrop_path ? `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}` : null;
  const apiUrl = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiUrl}`);
        if (!response.ok) {
          throw new Error('Failed to fetch movie details');
        }
        const data = await response.json();
        setMovie(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [params.id]);

  function formatUSD(value) {
    const fullFormat = `$${value.toLocaleString()}`;
    let shortFormat;
    if (value >= 1_000_000_000) {
      shortFormat = `$${(value / 1_000_000_000).toFixed(2)}B`;
    } else if (value >= 1_000_000) {
      shortFormat = `$${(value / 1_000_000).toFixed(2)}M`;
    } else if (value >= 1_000) {
      shortFormat = `$${(value / 1_000).toFixed(2)}K`;
    } else {
      shortFormat = `$${value}`;
    }
    return { fullFormat, shortFormat };
  }

  function convertDollarToINR(usdValue, rate = 86.72) {
    const inr = usdValue * rate;
    const commaFormat = `₹${inr.toLocaleString("en-IN")}`;
    let displayFormat;
    if (inr >= 1_00_00_000) {
      displayFormat = `₹${(inr / 1_00_00_000).toFixed(2)} Cr`;
    } else if (inr >= 1_00_000) {
      displayFormat = `₹${(inr / 1_00_000).toFixed(2)} Lakh`;
    } else {
      displayFormat = `₹${inr.toFixed(2)}`;
    }
    return { commaFormat, displayFormat };
  }

  const countryCode = movie.origin_country?.[0] || "US";
  const val = movie.revenue || 0;
  const pal = movie.budget || 0;

  let profit = "";
  let loss = "";

  let revenueDisplay = "";
  let budgetDisplay = "";

  if (countryCode === "IN") {
    const revenueResult = convertDollarToINR(val);
    const budgetResult = convertDollarToINR(pal);
    if(val - pal > 0) {
      const prorev =  convertDollarToINR(val - pal);
      profit = `+${prorev.displayFormat}`;
    } else {
      const lossrev =  convertDollarToINR(Math.abs(val - pal));
      loss = `-${lossrev.displayFormat}`;
    }
    revenueDisplay = `${revenueResult.displayFormat} (${revenueResult.commaFormat})`;
    budgetDisplay = `${budgetResult.displayFormat} (${budgetResult.commaFormat})`;
  } else {
    const revenueResult = formatUSD(val);
    const budgetResult = formatUSD(pal);
    if(val - pal > 0) {
      const prorev =  formatUSD(val - pal);
      profit = `+${prorev.shortFormat}`;
    } else {
      const lossrev =  formatUSD(Math.abs(val - pal));
      loss = `-${lossrev.shortFormat}`;
    }
    revenueDisplay = `${revenueResult.shortFormat} (${revenueResult.fullFormat})`;
    budgetDisplay = `${budgetResult.shortFormat} (${budgetResult.fullFormat})`;
  }

  const formatRuntime = (minutes) => {
    if (!minutes) return "N/A";
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  const getRatingColor = (rating) => {
    if (rating >= 8) return "text-green-500";
    if (rating >= 7) return "text-yellow-500";
    if (rating >= 5) return "text-orange-500";
    return "text-red-500";
  };

  const getPopularityLevel = (popularity) => {
    if (popularity >= 100) return { level: "Trending", color: "text-red-500" };
    if (popularity >= 50) return { level: "Popular", color: "text-yellow-500" };
    if (popularity >= 20) return { level: "Good", color: "text-green-500" };
    return { level: "Rising", color: "text-blue-500" };
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
            <p className="mt-4 text-slate-600 dark:text-slate-400">Loading movie details...</p>
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="text-red-500 text-6xl mb-4">🎬</div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">Movie Not Found</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">Sorry, we couldn't load this movie's details.</p>
            <button 
              onClick={() => navigate(-1)}
              className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300"
            >
              Go Back
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">

      {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-amber-400 transition-all duration-300"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
          </svg>
          Back
        </button>
      {/* Hero Section with Backdrop */}
      {backdropImage && (
        <div className="relative h-96 overflow-hidden">
          <img 
            src={backdropImage} 
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-transparent to-slate-900/80"></div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Movie Poster */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="relative group">
                <img 
                  className="w-full rounded-xl shadow-2xl transition-transform duration-300 group-hover:scale-105" 
                  src={image} 
                  alt={movie.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>

              {/* Quick Stats Card */}
              <div className="mt-6 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 dark:text-slate-400">Rating</span>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <span className={`font-semibold ${getRatingColor(movie.vote_average)}`}>
                        {movie.vote_average?.toFixed(1) || "N/A"}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 dark:text-slate-400">Reviews</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {movie.vote_count?.toLocaleString() || "N/A"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 dark:text-slate-400">Popularity</span>
                    <span className={`font-semibold ${getPopularityLevel(movie.popularity).color}`}>
                      {getPopularityLevel(movie.popularity).level}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Movie Details */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Title & Overview */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 dark:from-amber-400 dark:via-orange-500 dark:to-red-500 bg-clip-text text-transparent mb-2">
                {movie.title}
              </h1>
              
              {movie.tagline && (
                <p className="text-xl text-slate-600 dark:text-slate-400 italic mb-6">
                  "{movie.tagline}"
                </p>
              )}

              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed mt-4 dark:text-white">
                  {showFullOverview || !movie.overview || movie.overview.length <= 300 
                    ? movie.overview 
                    : `${movie.overview.substring(0, 300)}...`}
                </p>
                {movie.overview && movie.overview.length > 300 && (
                  <button 
                    onClick={() => setShowFullOverview(!showFullOverview)}
                    className="mt-2 text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-medium transition-colors duration-300"
                  >
                    {showFullOverview ? "Show Less" : "Read More"}
                  </button>
                )}
              </div>

              {/* Genres */}
              {movie.genres && movie.genres.length > 0 && (
                <div className="mt-6">
                  <div className="flex flex-wrap gap-2">
                    {movie.genres.map((genre) => (
                      <span 
                        key={genre.id}
                        className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded-full text-sm font-medium border border-amber-200 dark:border-amber-700"
                      >
                        {genre.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Movie Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Release Info */}
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4 flex items-center">
                  {/*<span className="text-amber-500 mr-2"></span>*/}
                  Release Information
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Release Date</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {movie.release_date ? new Date(movie.release_date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      }) : "N/A"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Runtime</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {formatRuntime(movie.runtime)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Status</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {movie.status || "N/A"}
                    </span>
                  </div>
                  {movie.spoken_languages && movie.spoken_languages.length > 0 && (
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Languages</span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200">
                        {movie.spoken_languages.map(lang => lang.english_name).join(", ")}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Financial Info */}
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4 flex items-center">
                  {/*<span className="text-amber-500 mr-2"></span>*/}
                  Box Office
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-start">
                      <span className="text-slate-600 dark:text-slate-400">Budget</span>
                      <div className="text-right">
                        <span className="font-semibold text-slate-800 dark:text-slate-200 block">
                          {pal > 0 ? budgetDisplay : "N/A"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-start">
                      <span className="text-slate-600 dark:text-slate-400">Revenue</span>
                      <div className="text-right">
                        <span className="font-semibold text-slate-800 dark:text-slate-200 block">
                          {val > 0 ? revenueDisplay : "N/A"}
                        </span>
                      </div>
                    </div>
                  </div>
                  {val > 0 && pal > 0 && (
                    <div className="pt-2 border-t border-slate-200 dark:border-slate-600">
                      <div className="flex justify-between">
                        <span className="text-slate-600 dark:text-slate-400">{profit != "" ? "Profit" : "Loss"}</span>
                        <span className={`font-semibold ${profit != "" ? 'text-green-600' : 'text-red-600'}`}>
                          {profit != "" ? profit : loss}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* External Links */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4 flex items-center">
                <span className="text-amber-500 mr-2">🔗</span>
                External Links
              </h3>
              <div className="flex flex-wrap gap-3">
                {movie.imdb_id && (
                  <a 
                    href={`https://www.imdb.com/title/${movie.imdb_id}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="mr-2">🎬</span>
                    IMDb
                  </a>
                )}
                {movie.homepage && (
                  <a 
                    href={movie.homepage} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="mr-2">🌐</span>
                    Official Site
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
