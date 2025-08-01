import Backup from "../assets/backup.webp";
import { Link } from "react-router-dom";

export const Card = ({ movie }) => {
  const { id, title, overview, poster_path } = movie;
  const img = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : Backup;
  
  // Truncate overview to 2 lines
  const truncatedOverview = overview.length > 120 ? overview.substring(0, 120) + "..." : overview;

  return (
    <div className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm hover:shadow-lg dark:hover:shadow-slate-900/25 transition-all duration-300 overflow-hidden hover:-translate-y-1">
      
      {/* Movie Poster */}
      <Link to={`/movie/${id}`} className="block relative overflow-hidden">
        <div className="aspect-[2/3] relative">
          <img 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            src={img} 
            alt={title}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </Link>

      {/* Card Content */}
      <div className="p-4">
        <Link to={`/movie/${id}`} className="block group/title">
          <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2 line-clamp-2 group-hover/title:text-amber-600 dark:group-hover/title:text-amber-400 transition-colors duration-300">
            {title}
          </h3>
        </Link>
        
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-3 leading-relaxed">
          {truncatedOverview}
        </p>

        <Link 
          to={`/movie/${id}`} 
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-800"
        >
          View Details
          <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};
