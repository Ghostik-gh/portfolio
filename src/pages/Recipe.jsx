import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Preloader } from '../food-api/Preloader';
import { getMealById } from '../food-api/api';

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
          <div className="body-recipe">
            <img
              className="recipe-img"
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
            />
            <div className="description-recipe">
              <h1>{recipe.strMeal}</h1>
              <h5>Category: {recipe.strCategory}</h5>
              {recipe.strArea ? <h5>Area: {recipe.strArea}</h5> : null}
              <p>{recipe.strInstructions}</p>
            </div>
          </div>
          <div className="video-recipe">
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
                  return null;
                })}
              </tbody>
            </table>
            {recipe.strYoutube ? (
              <div className="center video">
                <h5 className="center">Video Recipe</h5>
                <iframe
                  title="123"
                  width="700"
                  height="400"
                  src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                    -11
                  )}`}
                  allowFullScreen
                />
              </div>
            ) : null}
          </div>
        </div>
      )}
      <i
        className="fixed-bottom ms-4 mb-4 bi-arrow-left arrow-left"
        onClick={() => navigate(-1)}
      />
    </>
  );
}

export { Recipe };
