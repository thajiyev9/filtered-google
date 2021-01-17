import React, { useState } from 'react';
import { Layout } from 'antd';
import { ProHeader, ProSidebar } from 'components/Lib';
import { Header, Query } from 'containers';
const { Content } = Layout;

const App = () => {
  const [queryType, setQueryType] = useState(0);
  return (
    <div>
      <Layout>
        <ProHeader />
        <Layout>
          <ProSidebar width={300} queryType={queryType} setQueryType={setQueryType}/>
          <Content>
            <Header />
            <Query queryType={queryType} setQueryType={setQueryType} />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
