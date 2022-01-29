import React from 'react';

const Formulario = () => {
    return (
        <form
            className='col-12'
        >
            <fieldset className='text-center'>
                <legend>Buscar estadisticas de covid por Pais</legend>
            </fieldset>
            <div className='row mt-4'>
                <div className='col-md-4'>
                    <input
                        name='nombre'
                        className='form-control'
                        type="Text"
                        placeholder='Ingrese su Pais Aqui'
                    />
                </div>

                <div className='col-md-4'>
                    <select
                        className='form-control'
                        name='categoria'
                    >
                        <option value="">-- Seleccionar un Continente</option>
                    </select>
                </div>

                <div className='col-md-4'>
                    <input
                        type="submit"
                        className='btn btn-block btn-primary'
                        value="buscar"
                    ></input>
                </div>
            </div>
        </form>
    );
}

export default Formulario;