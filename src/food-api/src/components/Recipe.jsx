import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Preloader } from './Preloader';
import { getMealById } from '../api';

function Recipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getMealById(id).then((data) => {
      setRecipe(data.meals[0]);
    });
  }, [id]);

  return (
    <>
      {!recipe.idMeal ? (
        <Preloader />
      ) : (
        <div className="recipe">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h1>{recipe.strMeal}</h1>
          <h5>Category: {recipe.strCategory}</h5>
          {recipe.strArea ? <h5>Area: {recipe.strArea}</h5> : null}
          <p>{recipe.strInstructions}</p>
          <h5>Video Recipe</h5>
          <table className="centered">
            <thead>
              <tr>
                <th>Ingredients</th>
                <th>Measures</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(recipe).map((key) => {
                if (key.includes('Ingredient') && recipe[key]) {
                  return (
                    <tr key={key}>
                      <td>{recipe[key]}</td>
                      <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
          {recipe.strYoutube ? (
            <iframe
              width="700"
              height="400"
              src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                -11
              )}`}
              allowFullScreen
            />
          ) : null}
        </div>
      )}
      <button onClick={() => navigate(-1)} className="btn">
        Go Back
      </button>
    </>
  );
}

export { Recipe };
