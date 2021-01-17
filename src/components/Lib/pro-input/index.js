import React from 'react';
import { Input } from 'antd';
import styles from './styles.module.scss';
const CustomInput = props => {
  const { size = 'large', className = {}, ...rest } = props;
  return (
    <Input
      size={size}
      className={`${styles.CustomInput} ${className}`}
      {...rest}
    />
  );
};

export const ProInput = CustomInput;
