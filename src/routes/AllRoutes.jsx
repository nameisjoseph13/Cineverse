import { Routes, Route } from 'react-router-dom';
import { MovieList, MovieDetails, Discover, GenreMovies, PageNotFound, TFI,HeroMovies, About, Privacy } from '../pages';

export const AllRoutes = () => {
  return (
    <div className='min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300'>
      <Routes>
        <Route path='/' element={<MovieList apiPath="movie/now_playing" />} />
        <Route path='movie/:id' element={<MovieDetails />} />
        <Route path='movies/top' element={<MovieList apiPath="movie/top_rated" />} />
        <Route path='movies/upcoming' element={<MovieList apiPath="movie/upcoming" />} />
        <Route path='search' element={<MovieList apiPath="search/movie" />} />
        <Route path='discover' element={<Discover />} />
        <Route path='discover/genre/:genreId' element={<GenreMovies />} />
        <Route path='tfi' element={<TFI />} />
        <Route path='tfi/hero/:heroId' element={<HeroMovies />} />
        <Route path='about' element={<About />} />
        <Route path='privacy' element={<Privacy />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  )
}
