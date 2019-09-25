import React from 'react';

import Template from './components/layout/template';
import Home from './pages/home';

import useFetch from './hooks/useFetch';
import { resolvePath } from './helpers/index';

const App = () => {
  const { data, loading } = useFetch(resolvePath('data.json'));

  return (
    <div className="App">
      <Template>{!loading && <Home {...{ data }} />}</Template>
    </div>
  );
};

export default App;
