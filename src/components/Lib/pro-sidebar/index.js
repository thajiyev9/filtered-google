import React from 'react';
import { Layout } from 'antd';
import styles from './ProSidebar.scss';
import { Queries } from 'containers/query-types';
const { Sider } = Layout;
export const ProSidebar = props => {
  const { width, queryType, setQueryType } = props;
  return (
    <Sider className={styles.Sidebar} width={width} theme="dark">
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <label className={styles.title}>Filters</label>
        </div>
        <Queries queryType={queryType} setQueryType={setQueryType} />
      </div>
    </Sider>
  );
};
