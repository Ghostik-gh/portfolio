import { useNavigate } from 'react-router-dom';
import { Recipe } from '../food-api/Recipe';

function RecipePage() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <Recipe />
      <i
        className="fixed-bottom ms-4 mb-4 bi-arrow-left arrow-left"
        onClick={() => navigate(-1)}
      />
    </div>
  );
}

export { RecipePage };
