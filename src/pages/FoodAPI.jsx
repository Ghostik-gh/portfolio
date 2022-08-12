import { useState, useEffect } from 'react';
import { getAllCategories } from '../food-api/api';
import { Preloader } from '../food-api/Preloader';
import { CategoryList } from '../food-api/CategoryList';

function FoodAPI() {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
    });
  }, []);

  return (
    <div className="">
      {!catalog.length ? <Preloader /> : <CategoryList catalog={catalog} />}
    </div>
  );
}

export { FoodAPI };
