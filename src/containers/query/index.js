import React from 'react';
import { OrSearch, AndSearch, ExactSearch, ExcludeSearch } from 'containers';
import styles from './styles.module.scss';
const QueryContainer = props => {
  const { queryType } = props;

  return (
    <div className={styles.Query}> 
    {queryType === 0 ? <ExactSearch /> : null}
    {queryType === 1 ? <OrSearch /> : null}
    {queryType === 2 ? <AndSearch /> : null}
    {queryType === 3 ? <ExcludeSearch /> : null}
    </div>
  );
};

export const Query = QueryContainer;
