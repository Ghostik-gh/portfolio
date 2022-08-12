import { Link } from 'react-router-dom';

function CategoryItem(props) {
  const { strCategoryThumb, strCategory, strCategoryDescription } = props;
  return (
    <div className="card">
      <div className="card-image">
        <img src={strCategoryThumb} alt={strCategory} />
      </div>
      <div className="card-body card-food d-flex flex-direction-column align-items-center">
        <span className="card-title">{strCategory}</span>
        <p>{strCategoryDescription.slice(0, 100)}...</p>
        <div className="card-action">
          <Link
            to={`/food-api/category/${strCategory}`}
            className="btn btn-dark"
          >
            Watch Category
          </Link>
        </div>
      </div>
    </div>
  );
}

export { CategoryItem };
