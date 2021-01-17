import React, { useState } from 'react';
import { ProButton, ProInput } from 'components/Lib';
import styles from './styles.module.scss';

const ExcludeSearchType = () => {
  const [query, setQuery] = useState(undefined);
  const [excludeKey, setExcludeKey] = useState(undefined);

  const onQuerySearch = () => {
    window.open(
      `https://www.google.com/search?&q=${query}+-${excludeKey}`,
      '_blank'
    );
  };
  return (
    <div className={styles.ExcludeSearch}>
      <ProInput
        placeholder="Query"
        value={query}
        className={styles.item}
        onChange={event => setQuery(event.target.value)}
      />
      <ProInput
        placeholder="Exclude key"
        value={excludeKey}
        className={styles.item}
        onChange={event => setExcludeKey(event.target.value)}
      />
      <ProButton type="primary" onClick={onQuerySearch} label="Search" />
    </div>
  );
};

export const ExcludeSearch = ExcludeSearchType;
