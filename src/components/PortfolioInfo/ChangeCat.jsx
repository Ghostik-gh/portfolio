import React from 'react';
import styles from './PortfolioInfo.module.scss';

function ChangeCat(props) {
  const { cat } = props;
  return <img src={cat} className={styles.cat} alt="cat" />;
}

export default ChangeCat;
