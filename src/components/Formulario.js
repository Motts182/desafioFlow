import React, { useContext, useEffect, useState } from 'react';
import { CountryContext } from '../context/ContextCountry';
import { ListaContext } from '../context/ContextLista';


const Formulario = () => {

    const { countrys, setFirst, setCiti } = useContext(CountryContext);

    const { setLista } = useContext(ListaContext);

    const [continent, setContinent] = useState("");

    const obtenerBusqueda = e => {
        e.preventDefault()

        setContinent(e.target.value);
    }

    useEffect(() => {
        setLista(countrys);
    });

    return (
        <form
            className='col-12'
            onSubmit={e => {

                e.preventDefault();

                setCiti(continent);
            }}
        >
            <fieldset className='text-center'>
                <legend>Buscar Clima por Ciudad</legend>
            </fieldset>
            <div className='row mt-4'>

                <div className='col-md-8'>
                    <select
                        className='form-control'
                        name='continente'
                        onChange={obtenerBusqueda}
                    >
                        <option value="mendoza">Mendoza</option>
                        <option value="formosa">Formosa</option>
                        <option value="rosario">Rosario</option>
                        <option value="neuquen">Neuquen</option>
                        <option value="salta">Salta</option>

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