import { CategoryItem } from './CategoryItem';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function CategoryList(props) {
  const { catalog } = props;
  const navigate = useNavigate();

  useEffect(() => {
    console.log(catalog);
  });

  return (
    <>
      <div className="list">
        {catalog.map((el) => (
          <CategoryItem key={el.idCategory} {...el} />
        ))}
      </div>
      <i
        className="fixed-bottom ms-4 mb-4 bi-arrow-left arrow-left"
        onClick={() => navigate(-1)}
      />
    </>
  );
}

export { CategoryList };
