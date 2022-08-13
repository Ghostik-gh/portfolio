import { Link } from 'react-router-dom';

function Meal(props) {
  const { strMeal, idMeal, strMealThumb } = props;

  return (
    <div className="card">
      <div className="card-image">
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className="card-body card-food d-flex flex-direction-column align-items-center justify-content-space-between">
        <span className="card-title">{strMeal}</span>
        <div className="card-action">
          <Link to={`${idMeal}`} className="btn btn-dark">
            Watch recipe
          </Link>
        </div>
      </div>
    </div>
  );
}

export { Meal };
