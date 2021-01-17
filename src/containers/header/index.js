import React from 'React';
import styles from './styles.module.scss';

const HeaderContainer = () => {
  return (
    <div className={styles.Header}>
      <h1 className={styles.title}>Makes your google searchs</h1>
      <h2 className={styles.subTitle}>
        <span style={{ color: 'red' }}>faster</span> and{' '}
        <span style={{ color: 'red' }}>more accurately</span>
      </h2>
    </div>
  );
};

export const Header = HeaderContainer;
