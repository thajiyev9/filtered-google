import React, { useState } from 'react';
import { ProButton, ProInput } from 'components/Lib';
import styles from './styles.module.scss';

const ExactSearchType = () => {
  const [query, setQuery] = useState(undefined);

  const onQuerySearch = () => {
    window.open(`https://www.google.com/search?&q=%22${query}%22`, '_blank');
  };
  return (
    <div className={styles.ExacthSearch}>
      <ProInput
        placeholder="First query"
        value={query}
        className={styles.item}
        onChange={event => setQuery(event.target.value)}
      />
      <ProButton type="primary" onClick={onQuerySearch} label="Search" />
    </div>
  );
};

export const ExactSearch = ExactSearchType;
