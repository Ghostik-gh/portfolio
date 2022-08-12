import { Link } from 'react-router-dom';

function CategoryItem(props) {
  const { strCategoryThumb, strCategory, strCategoryDescription } = props;
  return (
    <div className="card">
      <div className="card-image">
        <img src={strCategoryThumb} alt={strCategory} />
      </div>
      <div className="card-content">
        <span className="card-title">{strCategory}</span>
        <p>{strCategoryDescription.slice(0, 100)}...</p>
      </div>
      <div className="card-action">
        <Link to={`/food-api/category/${strCategory}`} className="btn">
          Watch Category
        </Link>
      </div>
    </div>
  );
}

export { CategoryItem };
