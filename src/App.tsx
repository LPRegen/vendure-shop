import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { ProductList } from './components/ProductList/ProductList';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <ProductList />
    </React.Fragment>
  );
}

export default App;
