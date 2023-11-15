import Loader  from "components/Loader/Loader";
import MoviesList  from "components/MoviesList/MoviesList";
import { Notify } from "notiflix";
import { useEffect, useState } from "react";
import { fetchTrending } from "services/ThdbApi";
import css from './Home.module.css'
const Home = ()=>{
	const [movies, setMovies] =useState(null);
	const [isLoadind, setIsLoading]= useState(false);
	const [error, setError]=useState(null)

	useEffect (() =>{
		const moviesList = async() =>{
			try {
				setIsLoading(true);
				const data = await fetchTrending();
				
				setMovies(data.results)
			} catch (error) {
				setError(Notify.failure('Something went wrong'))
				
			}
			finally {
				setIsLoading(false)
			}
		}
		moviesList()
		
	}, [])
	
	return(
		<>
			<h1 className={css.mainTitle}>Trending today</h1>
			{error!==null&& error}
			{isLoadind&&<Loader/>}
			{movies!==null&&<MoviesList
			moviesList={movies}
			/>}
		</>
	)
}
export default Home;