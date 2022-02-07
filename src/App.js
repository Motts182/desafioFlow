import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Lista from './components/Lista';

import CountryProvider from './context/ContextCountry';
import RecetasProvider from './context/ContextRecetas';
import ModalProvider from './context/ContextModal';


function App() {
  return (
    <CountryProvider>
      <RecetasProvider>
        <ModalProvider>
          <Header />
          <div className='container mt-5'>
            <div className='row'>
              <Formulario />
            </div>
            <Lista />
          </div>
        </ModalProvider>
      </RecetasProvider>
    </CountryProvider>
  );
}

export default App;
