// pages/HeroMovies.jsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card } from "../components/Card";

import movieData from "../data/data.js"

export const HeroMovies = () => {
  const { heroId } = useParams();
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  // Hero data mapping
  const heroesData = {
    "nani": {
      name: "Nani",
      fullName: "Natural Star Nani",
      tmdbId: 1108588,
      emoji: "🌟"
    },
    "ntr": {
      name: "NTR",
      fullName: "Jr. NTR",
      tmdbId: 69597,
      emoji: "👑"
    },
    "ramcharan": {
      name: "Ram Charan",
      fullName: "Ram Charan",
      tmdbId: 49684,
      emoji: "🔥"
    },
    "alluarjun": {
      name: "Allu Arjun",
      fullName: "Stylish Star Allu Arjun",
      tmdbId: 49683,
      emoji: "💫"
    },
    "pawankalyan": {
      name: "Pawan Kalyan",
      fullName: "Power Star Pawan Kalyan",
      tmdbId: 49683,
      emoji: "💫"
    },
    "prabhas": {
      name: "Prabhas",
      fullName: "Rebel Star Prabhas",
      tmdbId: 49688,
      emoji: "⚡"
    },
    "maheshbabu": {
      name: "Mahesh Babu",
      fullName: "Prince Mahesh Babu",
      tmdbId: 69596,
      emoji: "👨‍👤"
    },
      "raviteja": {
    name: "Ravi Teja",
    fullName: "Mass Maharaja Ravi Teja",
    tmdbId: 69594,
    emoji: "🔥"
  },
  "nagarjuna": {
    name: "Nagarjuna",
    fullName: "Super Star Nagarjuna",
    tmdbId: 49682,
    emoji: "🎬"
  },
  "venkatesh": {
    name: "Venkatesh",
    fullName: "Victory Venkatesh",
    tmdbId: 14329,
    emoji: "🏆"
  },
  "chiru": {
    name: "Chiranjeevi",
    fullName: "Megastar Chiranjeevi",
    tmdbId: 49685,
    emoji: "⭐"
  },
  "balakrishna": {
    name: "Balakrishna",
    fullName: "Nandamuri Balakrishna",
    tmdbId: 1102292,
    emoji: "🛡️"
  },
  "vdk": {
    name: "Vijay Devarakonda",
    fullName: "Vijay Devarakonda",
    tmdbId: 14329,
    emoji: "🏅"
  },
  "nagachaitanya": {
    name: "Naga Chaitanya",
    fullName: "Naga Chaitanya Akkineni",
    tmdbId: 98122,
    emoji: "🎯"
  },
  "rapo": {
    name: "Ram Pothineni",
    fullName: "Ram Pothineni",
    tmdbId: 1102293,
    emoji: "🎞️"
  },
  "nithiin": {
    name: "Nithiin",
    fullName: "Nithiin Reddy",
    tmdbId: 53615,
    emoji: "🔥"
  },
  "sreevishnu": {
    name: "Sree Vishnu",
    fullName: "Sree Vishnu",
    tmdbId: 1102294,
    emoji: "🎬"
  },
  "akhil": {
    name: "Akhil",
    fullName: "Akhil Akkineni",
    tmdbId: 1102295,
    emoji: "🌟"
  },
  "saidharamtej": {
    name: "Sai Dharam Tej",
    fullName: "Sai Dharam Tej",
    tmdbId: 1102296,
    emoji: "🎥"
  },
  "kalyanram": {
    name: "Kalyan Ram",
    fullName: "Kalyan Ram",
    tmdbId: 1102297,
    emoji: "🏅"
  },
  "vishwaksen": {
    name: "Vishwak Sen",
    fullName: "Vishwak Sen",
    tmdbId: 1102298,
    emoji: "🎞️"
  },
  "kiran": {
    name: "Kiran Abbavaram",
    fullName: "Kiran Abbavaram",
    tmdbId: 1102299,
    emoji: "🎬"
  }
  };

  useEffect(() => {
    const fetchHeroMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const hero = heroesData[heroId];
        if (!hero) {
          throw new Error('Hero not found');
        }
        
        setHeroData(hero);

        
        const apiUrl = import.meta.env.VITE_API_KEY;
        const responses = await Promise.all(
          movieData[heroId].map((movie) =>
            fetch(`https://api.themoviedb.org/3/movie/${movie.tmdb_id}?api_key=${apiUrl}`)
              .then((res) => res.json())
          )
        );
        setMovies(responses);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroMovies();
  }, [heroId]);

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              Loading {heroData?.name || ""} movies...
            </p>
          </div>
        </div>
      </main>
    );
  }

  if (error || !heroData) {
    return (
      <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="text-red-500 text-xl mb-4">⚠️</div>
            <p className="text-slate-600 dark:text-slate-400">Error loading movies: {error || "Hero not found"}</p>
            <button 
              onClick={() => navigate('/tfi')}
              className="mt-4 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300"
            >
              Back to TFI
            </button>
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
          
          {/* Back Button */}
          <button 
            onClick={() => navigate('/tfi')}
            className="mb-6 inline-flex items-center px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 bg-slate-100 dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600 hover:border-amber-400 transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            Back to TFI
          </button>

          <div className="text-center">

            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 dark:from-amber-400 dark:via-orange-500 dark:to-red-500 bg-clip-text text-transparent mb-2">
              {heroData.fullName}
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              Explore the finest films from {heroData.name}'s illustrious career
            </p>
          </div>
        </div>
      </div>

      {/* Movies Grid */}
      <section className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {movies.length > 0 ? (
          <>
            <div className="mb-6 text-center">
              <p className="text-slate-600 dark:text-slate-400">
                Showing <span className="font-semibold text-amber-600 dark:text-amber-400">{movies.length}</span> movies featuring {heroData.name}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {movies.map((movie) => (
                <Card key={movie.id} movie={movie} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <div className="text-slate-400 text-6xl mb-4">🎬</div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
              No movies found
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              No movies found for {heroData.name} at the moment
            </p>
          </div>
        )}
      </section>
    </main>
  );
};
