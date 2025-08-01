import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/cinelogo.png";

export const Header = () => {
  const [hidden, setHidden] = useState(true);
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const [searchFocused, setSearchFocused] = useState(false);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleSubmit = (event) =>{
      event.preventDefault();
      const queryTerm = event.target.search.value;
      event.target.reset();
      return navigate(`/search?q=${queryTerm}`);
  }

// ↓ modify this one
const activeClass = "relative text-base font-semibold text-amber-500 dark:text-amber-400 transition-all duration-300 after:absolute after:bottom-[-5px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-2/3 after:h-0.5 after:bg-gradient-to-r after:from-amber-500 after:to-orange-500 dark:after:from-amber-400 dark:after:to-orange-500 after:rounded-full";


// ↓ and this one
const inActiveClass = "relative text-base font-medium text-slate-700 hover:text-amber-600 dark:text-slate-300 dark:hover:text-amber-300 transition-all duration-300 hover:after:absolute hover:after:bottom-[-5px] hover:after:left-1/2 hover:after:transform hover:after:-translate-x-1/2 hover:after:w-2/3 hover:after:h-0.5 hover:after:bg-amber-500/50 dark:hover:after:bg-amber-400/50 hover:after:rounded-full";


  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/95 dark:bg-slate-900/95 border-b border-slate-200/50 dark:border-slate-800/50 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src={Logo} 
                className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" 
                alt="Cineverse Logo" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-orange-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 dark:from-amber-400 dark:via-orange-500 dark:to-red-500 bg-clip-text text-transparent">
              Cineverse
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <NavLink 
                to="/" 
                className={({isActive}) => isActive ? activeClass : inActiveClass}
                end
              >
                Home
              </NavLink>

              <NavLink 
                to="/movies/top" 
                className={({isActive}) => isActive ? activeClass : inActiveClass}
              >
                Top Rated
              </NavLink>
              <NavLink 
                to="/movies/upcoming" 
                className={({isActive}) => isActive ? activeClass : inActiveClass}
              >
                Upcoming
              </NavLink>
                <NavLink 
                  to="/discover" 
                  className={({isActive}) => isActive ? activeClass : inActiveClass}
                >
                  Discover
                </NavLink>
                <NavLink 
                  to="/tfi" 
                  className={({isActive}) => isActive ? activeClass : inActiveClass}
                >
                  TFI
                </NavLink>
            </nav>
          </div>

          {/* Right Section - Search, Theme Toggle, Mobile Menu */}
          <div className="flex items-center space-x-4">
            
            {/* Enhanced Search */}
            <div className={`hidden md:block relative transition-all duration-300 ${searchFocused ? 'w-80' : 'w-64'}`}>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-slate-500 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="search"
                  className={`w-full pl-10 pr-4 py-2 bg-slate-100/80 dark:bg-slate-800/50 border border-slate-300/50 dark:border-slate-700/50 rounded-xl text-slate-800 dark:text-slate-200 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 dark:focus:ring-amber-400/50 focus:border-amber-500/50 dark:focus:border-amber-400/50 transition-all duration-300 ${searchFocused ? 'bg-slate-100 dark:bg-slate-800/80 shadow-lg' : ''}`}
                  placeholder="Search movies, shows..."
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                />
              </form>

              <div className={`absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 dark:from-amber-400/10 dark:to-orange-500/10 rounded-xl pointer-events-none transition-opacity duration-300 ${searchFocused ? 'opacity-100' : 'opacity-0'}`}></div>
            </div>

            {/* Enhanced Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/50 border border-slate-300/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-slate-200/80 dark:hover:bg-slate-800/80 hover:border-amber-500/30 dark:hover:border-amber-400/30 transition-all duration-300 group"
            >
              {darkMode ? (
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {/* Enhanced Mobile Menu Button */}
            <button
              onClick={() => setHidden(!hidden)}
              className="md:hidden p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/50 border border-slate-300/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-slate-200/80 dark:hover:bg-slate-800/80 hover:border-amber-500/30 dark:hover:border-amber-400/30 transition-all duration-300"
            >
              <svg className={`w-6 h-6 transition-transform duration-300 ${!hidden ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={!hidden ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${hidden ? 'max-h-0 opacity-0' : 'max-h-96 opacity-100'} overflow-hidden`}>
          <div className="py-4 space-y-4 border-t border-slate-300/50 dark:border-slate-800/50 mt-4">
            
            {/* Mobile Search */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-slate-500 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="search"
                  className="w-full pl-10 pr-4 py-3 bg-slate-100/80 dark:bg-slate-800/50 border border-slate-300/50 dark:border-slate-700/50 rounded-xl text-slate-800 dark:text-slate-200 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 dark:focus:ring-amber-400/50 focus:border-amber-500/50 dark:focus:border-amber-400/50 transition-all duration-300"
                  placeholder="Search movies, shows..."
                />
              </form>

            </div>

            {/* Mobile Navigation */}
            <nav className="flex flex-col space-y-2">
              <NavLink 
                to="/" 
                className={({isActive}) => `block px-4 py-3 rounded-xl transition-all duration-300 ${isActive 
                  ? 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 dark:from-amber-400/20 dark:to-orange-500/20 text-amber-600 dark:text-amber-400 font-semibold' 
                  : 'text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-300 hover:bg-slate-200/50 dark:hover:bg-slate-800/50'}`}
                end
                onClick={() => setHidden(true)}
              >
                Home
              </NavLink>
              <NavLink 
                to="/movies/top" 
                className={({isActive}) => `block px-4 py-3 rounded-xl transition-all duration-300 ${isActive 
                  ? 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 dark:from-amber-400/20 dark:to-orange-500/20 text-amber-600 dark:text-amber-400 font-semibold' 
                  : 'text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-300 hover:bg-slate-200/50 dark:hover:bg-slate-800/50'}`}
                onClick={() => setHidden(true)}
              >
                Top Rated
              </NavLink>
              <NavLink 
                to="/movies/upcoming" 
                className={({isActive}) => `block px-4 py-3 rounded-xl transition-all duration-300 ${isActive 
                  ? 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 dark:from-amber-400/20 dark:to-orange-500/20 text-amber-600 dark:text-amber-400 font-semibold' 
                  : 'text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-300 hover:bg-slate-200/50 dark:hover:bg-slate-800/50'}`}
                onClick={() => setHidden(true)}
              >
                Upcoming
              </NavLink>

              <NavLink 
                to="/discover" 
                className={({isActive}) => `block px-4 py-3 rounded-xl transition-all duration-300 ${isActive 
                  ? 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 dark:from-amber-400/20 dark:to-orange-500/20 text-amber-600 dark:text-amber-400 font-semibold' 
                  : 'text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-300 hover:bg-slate-200/50 dark:hover:bg-slate-800/50'}`}
                onClick={() => setHidden(true)}
              >
                Discover
              </NavLink>

              <NavLink 
                to="/tfi" 
                className={({isActive}) => `block px-4 py-3 rounded-xl transition-all duration-300 ${isActive 
                  ? 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 dark:from-amber-400/20 dark:to-orange-500/20 text-amber-600 dark:text-amber-400 font-semibold' 
                  : 'text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-300 hover:bg-slate-200/50 dark:hover:bg-slate-800/50'}`}
                onClick={() => setHidden(true)}
              >
                TFI
              </NavLink>
            </nav>
          </div>
        </div>
      </nav>
    </header>
  );
};
