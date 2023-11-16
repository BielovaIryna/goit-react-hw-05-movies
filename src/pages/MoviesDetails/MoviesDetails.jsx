
import Loader from 'components/Loader/Loader';

import { Notify } from 'notiflix';
import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { movieDetails } from 'services/ThdbApi';
import css from './MoviesDetails.module.css';
const Reviews = lazy (()=> import('components/Reviews/Reviews'));
const Cast = lazy (()=> import('components/Cast/Cast'));

const MoviesDetails = () => {
const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
const location = useLocation();
const backLinkRef =useRef (location.state?.from ?? '/')
  const { movieId } = useParams();
  
  const [movie, setMovie] = useState(null);
  const [isLoadind, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
   useEffect(() => {
	if(!movieId)return
    const moviesList = async () => {
      try {
        setIsLoading(true);
        const data = await movieDetails(movieId);

        setMovie(data)
      } catch (error) {
        setError(Notify.failure('Something went wrong'));
      } finally {
        setIsLoading(false);
      }
    };
    moviesList();
  }, [movieId]);


  return (
    <>
      <Link to={backLinkRef.current} className={css.goBackLink}>Go Back</Link>
      
      {error !== null && error}
      {isLoadind && <Loader />}
      {movie !== null && (
        <div className={css.mainBlock}>
          <div className={css.movieWrapper}>
            <img src={movie.poster_path? `http://image.tmdb.org/t/p/w500/${movie.poster_path}`: defaultImg} alt={movie.title} className={css.poster}/>
            <div>
              <h1>{movie.original_title}</h1>
              <p>
                User Score: <span>{movie.popularity}</span>
              </p>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <p>{movie.genres && movie.genres.map(genre => <span key={genre.id}>{genre.name}</span>)}</p>
            </div>
          </div>
          <p className={css.addInfo}>Addition information</p>
          <ul className={css.addInfoList}>
            <li className={css.addInfoItem}>
              <Link className={css.addInfoLink} to="cast">Cast</Link>
            </li>
            <li className={css.addInfoItem}>
              <Link className={css.addInfoLink} to="reviews">Reviews</Link>
            </li>
          </ul>
        </div>
      )}
      <div>
		<Suspense fallback ={<Loader/>}>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews/>} />
        </Routes>
		</Suspense>
      </div>
    </>
  );
};
export default MoviesDetails;