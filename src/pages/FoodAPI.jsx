import { useState, useEffect } from 'react';
import { getAllCategories } from '../food-api/api';
import { Preloader } from '../components/Preloader';
import { CategoryList } from '../food-api/CategoryList';
import '../food-api/food.css';

function FoodAPI() {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
    });
  }, []);

  return (
    <div className="container">
      {!catalog.length ? <Preloader /> : <CategoryList catalog={catalog} />}
    </div>
  );
}

export { FoodAPI };
