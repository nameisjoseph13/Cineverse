import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/cinelogo.png";

export const Footer = () => {
  const [msg, setMsg] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Add your newsletter signup logic here
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info & Logo */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <img 
                  src={Logo} 
                  className="h-10 w-10" 
                  alt="Cineverse Logo" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-orange-500/20 rounded-full blur-lg"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 dark:from-amber-400 dark:via-orange-500 dark:to-red-500 bg-clip-text text-transparent">
                Cineverse
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Your ultimate destination for discovering movies, exploring ratings, and staying updated with the latest in cinema.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              {/* Twitter */}
              <a href="https://x.com/Mr_UnknownBoii" target="_blank" rel="noopener noreferrer" className="group p-2 rounded-lg bg-slate-200/50 dark:bg-slate-800/50 hover:bg-amber-500/20 dark:hover:bg-amber-400/20 transition-all duration-300">
                <svg className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/crazycoder66/" target="_blank" rel="noopener noreferrer" className="group p-2 rounded-lg bg-slate-200/50 dark:bg-slate-800/50 hover:bg-amber-500/20 dark:hover:bg-amber-400/20 transition-all duration-300">
                <svg className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/joseph-prasad-952216256/" target="_blank" rel="noopener noreferrer" className="group p-2 rounded-lg bg-slate-200/50 dark:bg-slate-800/50 hover:bg-amber-500/20 dark:hover:bg-amber-400/20 transition-all duration-300">
                <svg className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* Your Logo */}
              <Link to="/" className="group p-2 rounded-lg bg-slate-200/50 dark:bg-slate-800/50 hover:bg-amber-500/20 dark:hover:bg-amber-400/20 transition-all duration-300">
                <img 
                  src={Logo} 
                  alt="Cineverse" 
                  className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:brightness-110 transition-all duration-300"
                />
              </Link>
            </div>

          </div>

          {/* Movies Section */}
          <div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-6">
              Movies
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300 group flex items-center">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/movies/top" className="text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300 group flex items-center">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Top Rated</span>
                </Link>
              </li>
              <li>
                <Link to="/movies/upcoming" className="text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300 group flex items-center">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Upcoming</span>
                </Link>
              </li>
              <li>
                <Link to="/discover" className="text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300 group flex items-center">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Discover</span>
                </Link>
              </li>
              <li>
                <Link to="/tfi" className="text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300 group flex items-center">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">TFI</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Info */}
          <div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-6">
              Support & Info
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300 group flex items-center">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">About Us</span>
                </Link>
              </li> 
              <li>
                <Link to="/privacy" className="text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300 group flex items-center">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Privacy Policy</span>
                </Link>
              </li>

            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-6">
              Stay Updated
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm leading-relaxed">
              Get the latest movie updates, reviews, and recommendations delivered to your inbox.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="text"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  placeholder="Share your message"
                  className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-200 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 dark:focus:ring-amber-400/50 focus:border-amber-500/50 dark:focus:border-amber-400/50 transition-all duration-300"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:ring-offset-2 focus:ring-offset-slate-50 dark:focus:ring-offset-slate-950"
              >
                {subscribed ? (
                  <span className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Sent!
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-center items-center">
            
            {/* Copyright */}
            <div className="text-slate-600 dark:text-slate-400 text-sm">
              © {currentYear} Cineverse. All rights reserved. | Built with ❤️ for movie lovers
            </div>

          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:ring-offset-2 focus:ring-offset-slate-50 dark:focus:ring-offset-slate-950 z-40"
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};
