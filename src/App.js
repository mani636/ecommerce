import React from 'react';
import './App.css';
import NavRoutes from './routes/NavRoutes';
import { Header } from './components/Header/Header';

const App = () => {
  return (
    <div className=''>
      <Header />
      <NavRoutes />
    </div>
  );
};

export default App;
