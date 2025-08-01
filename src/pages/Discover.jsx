// pages/Discover.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Discover = () => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiUrl}`);
        if (!response.ok) {
          throw new Error('Failed to fetch genres');
        }
        const data = await response.json();
        setGenres(data.genres);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGenres();
  }, []);

  // Genre emojis mapping for visual appeal
  const genreEmojis = {
    28: "⚔️", // Action
    12: "🗺️", // Adventure
    16: "🎨", // Animation
    35: "😂", // Comedy
    80: "🕵️", // Crime
    99: "📹", // Documentary
    18: "🎭", // Drama
    10751: "👨‍👩‍👧‍👦", // Family
    14: "🧙‍♂️", // Fantasy
    36: "🏛️", // History
    27: "👻", // Horror
    10402: "🎵", // Music
    9648: "🔍", // Mystery
    10749: "💕", // Romance
    878: "🚀", // Science Fiction
    10770: "📺", // TV Movie
    53: "😰", // Thriller
    10752: "⚔️", // War
    37: "🤠"  // Western
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
            <p className="mt-4 text-slate-600 dark:text-slate-400">Loading genres...</p>
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
            <div className="text-red-500 text-xl mb-4">⚠️</div>
            <p className="text-slate-600 dark:text-slate-400">Error loading genres: {error}</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Page Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 dark:from-amber-400 dark:via-orange-500 dark:to-red-500 bg-clip-text text-transparent mb-4">
              Discover Movies
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              Explore movies by genre and discover your next favorite film
            </p>
          </div>
        </div>
      </div>

      {/* Genres Grid */}
      <section className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {genres.map((genre) => (
            <Link
              key={genre.id}
              to={`/discover/genre/${genre.id}`}
              className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-sm hover:shadow-lg dark:hover:shadow-slate-900/25 transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110">
                {genreEmojis[genre.id] || "🎬"}
              </div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">
                {genre.name}
              </h3>
              <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  Explore {genre.name} movies
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};
