import React, { useContext, useState } from 'react';
import { CountryContext } from '../context/ContextCountry';
import { RecetasContext } from '../context/ContextRecetas';


const Formulario = () => {

    //Borrar
    const { countrys } = useContext(CountryContext);

    const { receta, buscarRecetas, saveConsultar, setReceta } = useContext(RecetasContext);

    const [continent, setContinent] = useState("");

    //funcion para leer los contenidos
    const obtenerBusqueda = e => {
        e.preventDefault()

        setContinent(e.target.value);
    }

    return (
        <form
            className='col-12'
            onSubmit={e => {
                e.preventDefault();

                let fill = Object.values(countrys)
                    .filter(c => c.All.country !== undefined)
                    .filter(c => c.All.continent === continent)

                setReceta(fill);

                saveConsultar(true);

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
                        <option value="">-- Seleccionar un Continente</option>
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