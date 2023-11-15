import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css'
const MoviesList = ({ moviesList }) => {
	const location = useLocation();
  return (
    <ul className={css.moviesList}>
      {moviesList.length>0 ? moviesList.map(movie => (
       <li className={css.moviesItem} key={movie.id}>
		<Link className={css.moviesLink} state={{from:location}} to={`/movies/${movie.id}`} >
          {movie.title}
        </Link>
		</li>
      )) : <li>We dont have any film according your request</li>}
    </ul>
  );
};
export default MoviesList;
