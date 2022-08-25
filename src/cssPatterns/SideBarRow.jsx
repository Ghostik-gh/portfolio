import { Link } from 'react-router-dom';

function SideBarRow(props) {
  const { title, to, icon } = props;

  return (
    <Link to={to} className="link-unset">
      <div
        className="side-bar-row"
        id={window.location.hash.slice(1) === to ? 'active-row' : ''}
      >
        <div className="icon">{icon}</div>
        <div className="title">{title}</div>
      </div>
    </Link>
  );
}

export default SideBarRow;
