// pages/About.jsx
import { Link } from "react-router-dom";
import Logo from "../assets/cinelogo.png";

export const About = () => {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <img src={Logo} className="h-12 w-12" alt="Cineverse Logo" />
              <span className="text-3xl font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 dark:from-amber-400 dark:via-orange-500 dark:to-red-500 bg-clip-text text-transparent">
                Cineverse
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              About Us
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Your ultimate destination for discovering, exploring, and celebrating the magic of cinema
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Story Section */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                Born from a passion for cinema, Cineverse was created to bridge the gap between movie lovers and the vast world of film. We believe that every movie has a story to tell, and every viewer deserves to discover their next favorite film.
              </p>
              <p>
                Our platform combines cutting-edge technology with comprehensive movie data to provide you with personalized recommendations, detailed information, and an intuitive browsing experience that makes movie discovery effortless and enjoyable.
              </p>
              <p>
                From blockbuster hits to indie gems, from Telugu cinema to international masterpieces, Cineverse is your gateway to the endless world of entertainment.
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-8 border border-amber-200 dark:border-amber-700">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-6">
              Our Mission
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                To democratize movie discovery by providing free, accessible, and comprehensive information about films from around the world, helping users make informed viewing choices.
              </p>
              <div className="flex items-start space-x-3 mt-6">
                <div className="text-2xl">🎯</div>
                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Our Vision</h3>
                  <p>To become the world's most trusted and user-friendly platform for movie enthusiasts, critics, and casual viewers alike.</p>
                </div>
                <div className="text-2xl">🎬</div>
                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">TFI</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Celebrating the grandeur of Telugu cinema with actor's blockbuster hits, critically acclaimed films and that define Tollywood's golden era.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-slate-200 mb-12">
            What Makes Us Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 text-center group hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎬</div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">Comprehensive Database</h3>
              <p className="text-slate-600 dark:text-slate-400">Access to millions of movies with detailed information, ratings, and reviews.</p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 text-center group hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🌟</div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">User-Friendly Design</h3>
              <p className="text-slate-600 dark:text-slate-400">Intuitive interface designed for seamless browsing and discovery.</p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 text-center group hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🔍</div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">Smart Discovery</h3>
              <p className="text-slate-600 dark:text-slate-400">Advanced search and filtering options to find exactly what you're looking for.</p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 text-center group hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎭</div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">Regional Focus</h3>
              <p className="text-slate-600 dark:text-slate-400">Special emphasis on Telugu cinema and regional film industries.</p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 text-center group hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📱</div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">Responsive Design</h3>
              <p className="text-slate-600 dark:text-slate-400">Perfect experience across all devices, from mobile to desktop.</p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 text-center group hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🆓</div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">Always Free</h3>
              <p className="text-slate-600 dark:text-slate-400">Completely free to use with no hidden charges or subscription fees.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Join the Cineverse Community</h2>
          <p className="text-xl mb-8 opacity-90">
            Start your movie discovery journey today and never run out of great films to watch!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="inline-flex items-center px-6 py-3 bg-white text-amber-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors duration-300"
            >
              Explore Movies
            </Link>

          </div>
        </div>
      </div>
    </main>
  );
};
