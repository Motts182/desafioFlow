import React, { useContext, useEffect, useState } from 'react';
import { CountryContext } from '../context/ContextCountry';
import { ListaContext } from '../context/ContextLista';


const Formulario = () => {

    //Borrar
    const { countrys } = useContext(CountryContext);

    const { setLista } = useContext(ListaContext);

    const [continent, setContinent] = useState("");

    const obtenerBusqueda = e => {
        e.preventDefault()

        setContinent(e.target.value);
    }

    useEffect(() => {
        setLista(countrys);
    }, [countrys]);

    return (
        <form
            className='col-12'
            onSubmit={e => {
                e.preventDefault();
                let fill;

                console.log(continent)

                if (continent !== "all") {
                    fill = Object.values(countrys)
                        .filter(c => c.All.country !== undefined)
                        .filter(c => c.All.continent === continent)
                } else {
                    fill = Object.values(countrys)
                        .filter(c => c.All.country !== undefined)
                }

                setLista(fill);

            }}
        >
            <fieldset className='text-center'>
                <legend>Buscar estadisticas de covid por Pais</legend>
            </fieldset>
            <div className='row mt-4'>

                <div className='col-md-8'>
                    <select
                        className='form-control'
                        name='continente'
                        onChange={obtenerBusqueda}
                    >
                        <option value="all">-- Seleccionar un Continente</option>
                        <option value="all">Todos Los Paises</option>¡
                        <option value="Europe">Europe</option>
                        <option value="Asia">Asia</option>
                        <option value="Africa">Africa</option>
                        <option value="North America">North America</option>
                        <option value="South America">South America</option>
                        <option value="Oceania">Oceania</option>
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