import React from 'react';
import { Button } from 'antd';
import styles from './styles.module.scss';
const CustomButton = props => {
  const { label, onClick = () => {}, ...rest } = props;
  return (
    <Button
      onClick={onClick}
      size="large"
      className={styles.CustomButton}
      {...rest}
    >
      {label}
    </Button>
  );
};

export const ProButton = CustomButton;
