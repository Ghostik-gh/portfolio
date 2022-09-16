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
            <h1 className="">{title}</h1>
            <p className="">{description}</p>
            {to.slice(0, 4) === 'http' ? (
              <a href={to}> {btnText}</a>
            ) : (
              <Link to={to} className="">
                {btnText}
              </Link>
            )}
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export { ProjectCard };
