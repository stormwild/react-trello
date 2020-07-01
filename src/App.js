import React from 'react';
import { Router } from '@reach/router';

import Layout from 'components/Layout';
import Home from 'pages/Home';

const App = () => {
  return (
    <Layout>
      <Router>
        <Home path='/' />
      </Router>
    </Layout>
  );
};

export default App;
