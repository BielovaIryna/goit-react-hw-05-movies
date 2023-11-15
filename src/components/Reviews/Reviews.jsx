import Loader from 'components/Loader/Loader';
import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { moviesReviews } from 'services/ThdbApi';
import css from './Reviews.module.css';
const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [isLoadind, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!movieId) return;
    const reviewsList = async () => {
      try {
        setIsLoading(true);
        const data = await moviesReviews(movieId);

        setReviews(data.results);
      } catch (error) {
        setError(Notify.failure('Something went wrong'));
      } finally {
        setIsLoading(false);
      }
    };
    reviewsList();
  }, [movieId]);
  return (
    <div className={css.reviews}>
      {error !== null && error}
      {isLoadind && <Loader />}
      {reviews !== null && (
        <ul className={css.reviewsList}>
          {reviews.length > 0 ? (
            reviews.map(review => (
              <li className={css.reviewsItem} key={review.id}>
                {' '}
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
              </li>
            ))
          ) : (
            <li>This film have no reviews yet</li>
          )}
        </ul>
      )}
    </div>
  );
};
export default Reviews;
