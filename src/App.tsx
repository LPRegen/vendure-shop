import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Layout } from './components/Layout/Layout';
import { ProducList } from './components/ProductList/ProductList';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Layout>
        <ProducList />
      </Layout>
    </React.Fragment>
  );
}

export default App;
