import { Link } from 'react-router-dom';

function RightArrow(props) {
  const { to } = props;
  return (
    <>
      <div className="right-arrow">
        <Link to={to}>
          <i className="bi bi-chevron-right navigate-i"></i>
        </Link>
      </div>
    </>
  );
}
export { RightArrow };
