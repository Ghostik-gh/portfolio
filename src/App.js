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
import { Login } from './pages/Login';
import { RequireAuth } from './hoc/RequireAuth';
import { CssPage } from './pages/CssPage';
import { MoviesPage } from './pages/MoviesPage';

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
          <Route path="projects/movies-api" element={<MoviesPage />} />
          <Route path="projects/css" element={<CssPage />}>
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
