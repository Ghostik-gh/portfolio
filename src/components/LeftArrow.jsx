import { Link } from 'react-router-dom';

function LeftArrow(props) {
  const { to } = props;
  return (
    <>
      <div className="left-arrow">
        <Link to={to}>
          <i className="bi bi-chevron-left navigate-i"></i>
        </Link>
      </div>
    </>
  );
}
export { LeftArrow };
