import React from 'react';
import { Layout } from 'antd';
import styles from './Header.scss';
const { Header } = Layout;

export const ProHeader = () => {
  return (
    <Header className={styles.Header}>
      <div className={styles.left}></div>
      <div className={styles.right}></div>
    </Header>
  );
};
