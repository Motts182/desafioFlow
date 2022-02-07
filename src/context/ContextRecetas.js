import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    const [receta, setReceta] = useState([]);

    const [busqueda, buscarRecetas] = useState({
        continente: ''
    });

    const { ingrediente, continente } = busqueda;

    const [consultar, saveConsultar] = useState(true);

    useEffect(() => {

        //filtrar lista por continente
        if (consultar) {
            const obtenerFiltroDeContinente = async () => {

                const url = 'https://covid-api.mmediagroup.fr/v1/cases'; 
 
                const result = await axios.get(url);
                // console.log(result.data)
                setReceta(result.data);
            }
            
            obtenerFiltroDeContinente();
        }
    }, [busqueda]);



    return (
        <RecetasContext.Provider
            value={{
                receta,
                buscarRecetas,
                setReceta,
                saveConsultar
            }}
        >
            {props.children}
        </RecetasContext.Provider>
    );
}

export default RecetasProvider;