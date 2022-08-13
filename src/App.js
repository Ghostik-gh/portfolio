import { React } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Portfolio } from './pages/Portfolio';
import { NotFound } from './pages/NotFound';
import { Category } from './pages/Category';
import { Recipe } from './pages/Recipe';
import { FoodAPI } from './pages/FoodAPI';
import Market from './pages/Market';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { MoviesAPI } from './movies-api/components/MoviesAPI';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Portfolio />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/food-api" element={<FoodAPI />} />
          <Route path="projects/food-api/:name" element={<Category />} />
          <Route path="projects/food-api/:name/:id" element={<Recipe />} />
          <Route path="projects/fortnite-market" element={<Market />} />
          <Route path="projects/movies-api" element={<MoviesAPI />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
