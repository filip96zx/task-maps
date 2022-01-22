import React from 'react';
import Layout from './components/layout/layout';
import MapWindow from './components/mapWindow/mapWindow';
import Menu from './components/menu/menu';



function App() {
  return (
    <Layout>
      <Menu />
      <MapWindow />
    </Layout>
  );
}

export default App;
