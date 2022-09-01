import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './PortfolioInfo.module.scss';
import cat1 from '../../static/images/cat-1.webp';
import cat2 from '../../static/images/cat-2.webp';
import cat3 from '../../static/images/cat-3.webp';
import cat4 from '../../static/images/cat-4.webp';
import cat5 from '../../static/images/cat-5.webp';
import cat6 from '../../static/images/cat-6.webp';
import cat7 from '../../static/images/cat-7.webp';
import ChangeCat from './ChangeCat';

function PortfolioInfo() {
  const cats = [cat1, cat2, cat3, cat4, cat5, cat6, cat7];
  const [numCat, setNumCat] = useState(0);

  const changeNum = () => {
    if (numCat > 5) {
      setNumCat(0);
    } else {
      setNumCat(numCat + 1);
    }
  };

  return (
    <>
      <div className="container">
        <h1>Hi, I'm Fedor!</h1>
        <div className={styles.top}>
          <p className={styles.description}>
            I'm a second-year student at Moscow Technical University of
            Communications and Informatics. At the moment I'm styding React! You
            can see my skills on <Link to="/about">About page</Link> or{' '}
            <Link to="/projects">my Projects</Link>
          </p>
          <div onClick={changeNum}>
            <ChangeCat cat={cats[numCat]} onClick={changeNum} />
          </div>
          <span>Click on cat</span>
        </div>
      </div>
    </>
  );
}

export default PortfolioInfo;
