import Loader  from 'components/Loader/Loader';
import  MoviesList  from 'components/MoviesList/MoviesList';
import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import {useSearchParams } from 'react-router-dom';
import { searchFilms } from 'services/ThdbApi';
import css from './Movies.module.css'

const Movies = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [searchMovies, setSearchMovies] = useState(null);
  const [isLoadind, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const query = searchParams.get('query');
 

  const handlerSubmit = e => {
    e.preventDefault();
	const value = e.currentTarget.elements.searchKey.value;
    setSearchParams({ query: value });

   
  };
  useEffect(() => {
	if(!query) return;
    const searchList = async () => {
      try {
        setIsLoading(true);
        const data = await searchFilms(query);
		
  setSearchMovies(data.results);
      } catch (error) {
        setError(Notify.failure('Something went wrong'));
      } finally {
        setIsLoading(false);
      }
    };
    searchList();
  }, [query]);

  return (
    <>
        <form onClick={handlerSubmit}>
        <label className={css.moviesInput}>
          <input
            type="text"
            name="searchKey" required
            
          />
        </label>
        <button className={css.moviesSubmit} type="submit">Search</button>
      </form>
	   {error !== null && error}
      {isLoadind && <Loader />}
     {searchMovies!==null && <MoviesList moviesList={searchMovies} />}
    </>
  );
};
export default Movies;