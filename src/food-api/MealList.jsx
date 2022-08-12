import { Meal } from './Meal';
import { useNavigate } from 'react-router-dom';
function MealList({ meals }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="list">
        {meals.map((meal) => (
          <Meal key={meal.idMeal} {...meal} />
        ))}
      </div>
      <i
        className="fixed-bottom ms-4 mb-4 bi-arrow-left arrow-left"
        onClick={() => navigate(-1)}
      />
    </>
  );
}

export { MealList };
