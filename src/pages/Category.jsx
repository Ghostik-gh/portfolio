import { MealList } from '../food-api/MealList';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilteredCategory } from '../food-api/api';
import { Preloader } from '../components/Preloader';

function Category() {
  const { name } = useParams();

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getFilteredCategory(name).then((data) => setMeals(data.meals));
  }, [name]);

  return <>{!meals.length ? <Preloader /> : <MealList meals={meals} />}</>;
}

export { Category };
