import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Lista from './components/Lista';

import CountryProvider from './context/ContextCountry';
import ListaProvider from './context/ContextLista';


function App() {
  return (
    <CountryProvider>
      <ListaProvider>
          <Header />
          <div className='container mt-5'>
            <div className='row'>
              <Formulario />
            </div>
            <Lista />
          </div>
      </ListaProvider>
    </CountryProvider>
  );
}

export default App;
