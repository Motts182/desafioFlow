import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {
  return (
    <Fragment>
      <Header/>
      <div className='container mt-5'>
        <div className='row'>
          <Formulario/>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
