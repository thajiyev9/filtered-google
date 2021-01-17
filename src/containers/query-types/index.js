import React from 'react';
import { Radio } from 'antd';
import styles from './styles.module.scss';
const queryTypes = {
  exact: {
    type: 'exact',
    key: 0,
    label: 'Exact query',
  },
  or: {
    type: 'or',
    key: 1,
    label: 'Matches one of the queries',
  },
  and: {
    type: 'and',
    key: 2,
    label: 'Matches both of the queries',
  },
  exclude: {
    type: 'exclude',
    key: 3,
    label: 'Exclude key',
  },
};

const QueryTypes = props => {
  const { queryType, setQueryType } = props;
  return (
    <div className={styles.QueryTypes}>
      {Object.values(queryTypes).map(({ key, label }) => (
        <Radio
          key={key}
          className={styles.query}
          checked={queryType === key}
          value={key}
          onChange={event => setQueryType(event.target.value)}
        >
          {label}
        </Radio>
      ))}
    </div>
  );
};

export const Queries = QueryTypes;
