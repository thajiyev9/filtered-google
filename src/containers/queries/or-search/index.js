import React, { useState } from 'react';
import { ProButton, ProInput } from 'components/Lib';
import styles from './styles.module.scss';

const OrSearchType = () => {
  const [firstQuery, setFirstQuery] = useState(undefined);
  const [secondQuery, setSecondQuery] = useState(undefined);

  const onQuerySearch = () => {
    window.open(
      `https://www.google.com/search?&q=${firstQuery}+%7c+${secondQuery}`,
      '_blank'
    );
  };
  return (
    <div className={styles.OrSearch}>
      <ProInput
        placeholder="First query"
        value={firstQuery}
        className={styles.item}
        onChange={event => setFirstQuery(event.target.value)}
      />
      <ProInput
        placeholder="Second query"
        value={secondQuery}
        className={styles.item}
        onChange={event => setSecondQuery(event.target.value)}
      />
      <ProButton type="primary" onClick={onQuerySearch} label="Search" />
    </div>
  );
};

export const OrSearch = OrSearchType;
