import Loader from 'components/Loader/Loader';
import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { moviesCredits } from 'services/ThdbApi';
import css from './Cast.module.css'

 const Cast = () => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [isLoadind, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!movieId) return;
    const castList = async () => {
      try {
        setIsLoading(true);
        const data = await moviesCredits(movieId);
        setCast(data.cast);
      } catch (error) {
        setError(Notify.failure('Something went wrong'));
      } finally {
        setIsLoading(false);
      }
    };
    castList();
  }, [movieId]);
  return (
    <div className={css.cast}>
      {error !== null && error}
      {isLoadind && <Loader />}
      {cast !== null && (
        <ul className={css.castList}>
          {cast.length > 0 ? (
            cast.map(el => (
              <li className={css.castItem} key={el.id}>
                <img className={css.castImage}
                  src={
                    el.profile_path
                      ? `http://image.tmdb.org/t/p/w500/${el.profile_path}`
                      : defaultImg
                  }
                  alt={el.name}
                />
                <h3>{el.name}</h3>
                <p>Character: {el.characte}</p>
              </li>
            ))
          ) : (
            <li>We don't have information about cast</li>
          )}
        </ul>
      )}
    </div>
  );
};
export default Cast;