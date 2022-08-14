import React from 'react';
import { Link } from 'react-router-dom';
function ProjectCard(props) {
  const {
    to = '/portfolio',
    title = 'Some',
    img = '../static/fortnite_alt.jpg',
    description = '',
    btnText = 'Some btn',
  } = props;

  return (
    <>
      <div className="card-projects card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body card-projects-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <Link to={to} className="btn btn-secondary">
            {btnText}
          </Link>
        </div>
      </div>
    </>
  );
}

export { ProjectCard };
