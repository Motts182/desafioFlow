import React, { useContext, useState } from 'react';
import { CountryContext } from '../context/ContextCountry';
import { RecetasContext } from '../context/ContextRecetas';


const Formulario = () => {

    const { countrys } = useContext(CountryContext);

    const { buscarRecetas, saveConsultar } = useContext(RecetasContext)

    // console.log(countrys);
    const [serch, setSerch] = useState({
        nombre: '',
        categoria: ''
    });

    //funcion para leer los contenidos
    const obtenerBusqueda = e => {
        e.preventDefault()
        setSerch({
            ...serch,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form
            className='col-12'
            onSubmit={e => {
                e.preventDefault();
                buscarRecetas(serch);
                saveConsultar(true);
            }}
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
                        onChange={obtenerBusqueda}
                    />
                </div>

                <div className='col-md-4'>
                    <select
                        className='form-control'
                        name='continente'
                        onChange={obtenerBusqueda}
                    >
                        <option value="">-- Seleccionar un Continente</option>
                        {countrys.map(country => (
                            <option
                                key="country.strCategory"
                                value={country.strCategory}
                            >{country.strCategory}</option>
                        ))}
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