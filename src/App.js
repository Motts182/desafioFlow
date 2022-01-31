import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Lista from './components/Lista';

import CountryProvider from './context/ContextCountry';
import RecetasProvider from './context/ContextRecetas';


function App() {
  return (
    <CountryProvider>
      <RecetasProvider>
        <Header />
        <div className='container mt-5'>
          <div className='row'>
            <Formulario />
          </div>
          <Lista></Lista>
        </div>
      </RecetasProvider>
    </CountryProvider>
  );
}

export default App;
