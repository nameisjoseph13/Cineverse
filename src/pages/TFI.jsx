
import { Link } from "react-router-dom";

export const TFI = () => {

  const baseUrl = "https://image.tmdb.org/t/p/w500/";

  const teluguHeroes = [
    {
      id: "nani",
      name: "Nani",
      fullName: "Natural Star Nani",
      tmdbId: 225387, 
      image: `${baseUrl}4hk5PkN3YHrkIxme0bdrGhNslpn.jpg`, 
      emoji: "🌟"
    },
    {
      id: "ntr",
      name: "NTR",
      fullName: "Man of Masses Jr. NTR",
      tmdbId: 148037,
      image: `${baseUrl}5fFpyv9CoSezaWSBneO5YoKb5tu.jpg`,
      emoji: "👑"
    },
    {
      id: "ramcharan",
      name: "Ram Charan",
      fullName: "Global star Ram Charan",
      tmdbId: 147023,
      image: `${baseUrl}twGqYUCR0Yh33j3TcgRTZRBRhTd.jpg`,
      emoji: "🔥"
    },
    
    {
      id: "alluarjun",
      name: "Allu Arjun",
      fullName: "Stylish Star Allu Arjun",
      tmdbId: 108215,
      image: `${baseUrl}ur76BohZggsEtaot5EKtyvZx6OL.jpg`,
      emoji: "💫"
    },
    {
      id: "prabhas",
      name: "Prabhas",
      fullName: "Rebel Star Prabhas",
      tmdbId: 237045,
      image: `${baseUrl}6naZ3oybdCtfggc5pTrcBDxOXrP.jpg`,
      emoji: "⚡"
    },
    {
      id: "maheshbabu",
      name: "Mahesh Babu",
      fullName: "Prince Mahesh Babu",
      tmdbId: 116924,
      image: `${baseUrl}6iruxCS4CsOpzAxgfl2ikCEYWCo.jpg`,
      emoji: "👨‍👤"
    },
    {
      id: "pawankalyan",
      name: "Pawan Kalyan",
      fullName: "Power Star Pawan Kalyan",
      tmdbId: 69596,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3pE3umJZUW0qkcSLN7cce6ojrcP4Jda1QOQ&s",
      emoji: "👨‍👤"
    },
    {
    id: "raviteja",
    name: "Ravi Teja",
    fullName: "Mass Maharaja Ravi Teja",
    tmdbId: 146935,
    image: `${baseUrl}5a9g645O30Qzhe3VFjvkhjnNfm2.jpg`,
    emoji: "🔥"
  },
  {
    id: "nagarjuna",
    name: "Nagarjuna",
    fullName: "King Nagarjuna",
    tmdbId: 149958,
    image: `${baseUrl}i42K59YZY2NbNfqxfo78YoFz6Bv.jpg`,
    emoji: "🎬"
  },
  {
    id: "venkatesh",
    name: "Venkatesh",
    fullName: "Victory Venkatesh",
    tmdbId: 88166,
    image: `${baseUrl}t5PWjy177ZTUM6wdjaVjqp5FLJq.jpg`,
    emoji: "🏆"
  },
  {
    id: "chiru",
    name: "Chiranjeevi",
    fullName: "Megastar Chiranjeevi",
    tmdbId: 147079,
    image: `${baseUrl}jRCxnhftb7NprH92cdfah8KoAHg.jpg`,
    emoji: "⭐"
  },
  {
    id: "balakrishna",
    name: "Balakrishna",
    fullName: "Nandamuri Balakrishna",
    tmdbId: 150529,
    image: `${baseUrl}vOqW5ByakRQOUOn6ipupgioxsM9.jpg`,
    emoji: "🛡️"
  },
  {
    id: "vdk",
    name: "Vijay Devarakonda",
    fullName: "Rowdy star Vijay Devarakonda",
    tmdbId: 14329,
    image: "https://i.pinimg.com/736x/7e/3a/44/7e3a4427ffbc1208ea42143118b617db.jpg",
    emoji: "🏅"
  },
  {
    id: "nagachaitanya",
    name: "Naga Chaitanya",
    fullName: "Yuva Samrat Naga Chaitanya Akkineni",
    tmdbId: 237052,
    image: `${baseUrl}pcGTJvzIC3JzcfNVzdA6IHo3e8k.jpg`,
    emoji: "🎯"
  },
  {
    id: "rapo",
    name: "Ram Pothineni",
    fullName: "Ustaad Ram Pothineni",
    tmdbId: 544986,
    image: `${baseUrl}co7EItZMqNAvKJmH16NMoVB24cl.jpg`,
    emoji: "🎞️"
  },
  {
    id: "nithiin",
    name: "Nithiin",
    fullName: "Youth star Nithiin",
    tmdbId: 1001828,
    image: `${baseUrl}dc3SkHyhZbWluuOlwmWICzR1QmA.jpg`,
    emoji: "🔥"
  },
  {
    id: "sreevishnu",
    name: "Sree Vishnu",
    fullName: "Sree Vishnu",
    tmdbId: 1751749,
    image: `${baseUrl}abwVmA7AX1CctbemcNoiWHlj9CX.jpg`,
    emoji: "🎬"
  },
  {
    id: "akhil",
    name: "Akhil",
    fullName: "Akhil Akkineni",
    tmdbId: 1544304,
    image: `${baseUrl}uErlyTiIXxTA0Qd7UTtYukOD51O.jpg`,
    emoji: "🌟"
  },
  {
    id: "saidharamtej",
    name: "Sai Dharam Tej",
    fullName: "Sai Dharam Tej",
    tmdbId: 1386112,
    image: `${baseUrl}lX3rI99DmyIXn8yaUW2i0wA1X4Q.jpg`,
    emoji: "🎥"
  },
  {
    id: "kalyanram",
    name: "Kalyan Ram",
    fullName: "Kalyan Ram",
    tmdbId: 1065421,
    image: `${baseUrl}awI6PFXlXu59xHEYKONSr0v0SHZ.jpg`,
    emoji: "🏅"
  },
  {
    id: "vishwaksen",
    name: "Vishwak Sen",
    fullName: "Mass ka das Vishwak Sen",
    tmdbId: 1893251,
    image: `${baseUrl}ffWsFHwde7M3W2IiIfn01htpALX.jpg`,
    emoji: "🎞️"
  },
  {
    id: "kiran",
    name: "Kiran Abbavaram",
    fullName: "Kiran Abbavaram",
    tmdbId: 2045437,
    image: `${baseUrl}zzmj6hKSQCp9T8naWs01Fk4dfLk.jpg`,
    emoji: "🎬"
  }
  ];

   //const image = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${hero.profile_path}` : Backup;


/*
const apiUrl = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

async function getTMDBId(movieTitle) {
    try {
        const response = await fetch(
            `${BASE_URL}/search/movie?api_key=${apiUrl}&query=${encodeURIComponent(movieTitle)}`
        );
        const data = await response.json();
        
        if (data.results && data.results.length > 0) {
            return {
                title: data.results[0].title,
                tmdb_id: data.results[0].id,
                release_date: data.results[0].release_date,
                original_language: data.results[0].original_language
            };
        }
        return null;
    } catch (error) {
        console.error('Error fetching TMDB ID:', error);
        return null;
    }
}*/


  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Page Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 dark:from-amber-400 dark:via-orange-500 dark:to-red-500 bg-clip-text text-transparent mb-4">
              Telugu Film Industry
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              Discover blockbuster movies from your favorite Telugu superstars
            </p>
          </div>
        </div>
      </div>

      {/* Heroes Grid */}
      <section className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {teluguHeroes.map((hero) => (
            <Link
              key={hero.id}
              to={`/tfi/hero/${hero.id}`}
              className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-sm hover:shadow-lg dark:hover:shadow-slate-900/25 transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <img src={hero.image} alt="No" className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110 rounded-md size-min" />

              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300 mb-1">
                {hero.name}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                {hero.fullName}
              </p>
              <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  View Movies →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Featured Section */}
        <div className="mt-16 bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 text-center">
            🎬 Why Telugu Cinema?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <h3 className="font-semibold text-slate-800 dark:text-slate-200">Star Power</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Experience the charisma of Telugu cinema's biggest superstars
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-slate-800 dark:text-slate-200">Epic Stories</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                From action blockbusters to emotional dramas
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-slate-800 dark:text-slate-200">Award Winners</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Critically acclaimed and commercially successful films
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
