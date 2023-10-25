import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';
import './App.css';
import { Layout } from './components/Layout/Layout';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Layout>Card</Layout>
    </React.Fragment>
  );
}

export default App;
