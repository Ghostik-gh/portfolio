import { Meal } from './Meal'
import { useNavigate } from 'react-router-dom'
function MealList({ meals }) {
    const navigate = useNavigate()

    return (
        <>
            <button onClick={() => navigate(-1)} className="btn">Go Back</button>
            <div className="list">
                {meals.map((meal) => (
                    <Meal key={meal.idMeal} {...meal} />
                ))}
            </div>
        </>
    )
}

export { MealList };