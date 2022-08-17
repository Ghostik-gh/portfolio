import { React } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Portfolio } from './pages/Portfolio';
import { NotFound } from './pages/NotFound';
import { Category } from './pages/Category';
import { RecipePage } from './pages/RecipePage';
import { FoodAPI } from './pages/FoodAPI';
import { Market } from './pages/Market';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { MoviesAPI } from './movies-api/components/MoviesAPI';
import { Login } from './pages/Login';
import { RequireAuth } from './hoc/RequireAuth';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Portfolio />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route
            path="about"
            element={
              <RequireAuth>
                <About />
              </RequireAuth>
            }
          />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/food-api" element={<FoodAPI />} />
          <Route path="projects/food-api/:name" element={<Category />} />
          <Route path="projects/food-api/:name/:id" element={<RecipePage />} />
          <Route path="projects/fortnite-market" element={<Market />} />
          <Route path="projects/movies-api" element={<MoviesAPI />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
