import { useState, useEffect } from "react"


export const useFetch = (apiPath, queryTerm="") => {
    const [data, setData] = useState([]);

      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
      const pageContent = {
            "movie/popular": {
                title: "Popular Movies",
                description: "Trending blockbusters and crowd favorites that everyone's talking about right now"
            },
            "movie/top_rated": {
                title: "Top Rated Movies", 
                description: "Critically acclaimed masterpieces and highest-rated films chosen by movie enthusiasts"
            },
            "movie/upcoming": {
                title: "Upcoming Movies",
                description: "Get a sneak peek at the most anticipated releases coming soon to theaters"
            },
            "movie/now_playing": {
                title: "Now Playing",
                description: "Discover the latest movies currently showing in theaters near you"
            },
            "search/movie": {
                title: `Results for the movie ${queryTerm}`,
                description: "Discover the movies which you have searched for. Just go for it."
            }
          };

        const title = pageContent[apiPath].title;
        const quote = pageContent[apiPath].description;

        const apiUrl = import.meta.env.VITE_API_KEY;


      const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${apiUrl}&query=${queryTerm}`;
      console.log(url);
    
      useEffect(() => {
        const fetchMovies = async () => {
          try {
            setLoading(true);
            const response = await fetch(url);
    
            if (!response.ok) {
              throw new Error('Failed to fetch movies');
            }
            
            const data = await response.json();
            setData(data.results);
          } catch (err) {
            setError(err.message);
          } finally {
            setLoading(false);
          }
        };
        
        fetchMovies();
      }, [url]);
    
     
    
    return {data, loading, error, title, quote}
}
