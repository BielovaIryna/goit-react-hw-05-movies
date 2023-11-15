import { Routes, Route } from 'react-router-dom';
import  Layout  from './Layout/Layout';
import { Suspense, lazy } from 'react';
import Loader from './Loader/Loader';

const Movies = lazy(()=> import ('pages/Movies/Movies'));
const Home = lazy(()=> import ('pages/Home/Home'));
const MoviesDetails = lazy(()=> import ('./MoviesDetails/MoviesDetails'));

export const App = () => {
  return (
    <div>
      <Layout>
        <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MoviesDetails />} />

        </Routes>
        </Suspense>
      </Layout>
    </div>
  );
};
