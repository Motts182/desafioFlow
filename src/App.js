import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import Header from './components/Header';
import Formulario from './components/Formulario';

import CountryProvider from './context/ContextCountry';

function App() {
  return (
    <CountryProvider>
      <Header/>
      <div className='container mt-5'>
        <div className='row'>
          <Formulario/>
        </div>
      </div>
    </CountryProvider>
  );
}

export default App;
