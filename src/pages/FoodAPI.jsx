import { useState, useEffect } from 'react';
import { getAllCategories } from '../food-api/src/api';
import { Preloader } from '../food-api/src/components/Preloader';
import { CategoryList } from '../food-api/src/components/CategoryList';

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
