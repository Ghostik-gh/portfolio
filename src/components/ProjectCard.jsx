import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.scss';

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
      <div className={styles.container}>
        <div className={styles.card}>
          {/* <div className={styles.center}> */}
          <div className={styles.front}>
            <img src={img} className="" alt="..." />
          </div>
          <div className={styles.back}>
            <h4 className="">{title}</h4>
            <p className="">{description}</p>
            <Link to={to} className="">
              {btnText}
            </Link>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export { ProjectCard };
