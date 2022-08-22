import React from 'react';
import { Link } from 'react-router-dom';

function SideBarRow(props) {
  const { title, to, icon } = props;
  return (
    <Link to={to} className="link-unset">
      <li className="side-bar-row">
        <div className="icon">{icon}</div>
        <div className="title">{title}</div>
      </li>
    </Link>
  );
}

export default SideBarRow;
