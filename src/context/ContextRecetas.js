import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    const [receta, setReceta] = useState([]);
    const [busqueda, buscarRecetas] = useState({
        ingrediente: '',
        continente: ''
    });

    const { ingrediente, continente } = busqueda;

    const [consultar, saveConsultar] = useState(false);

    useEffect(() => {

        //filtrar lista por continente
        if (consultar) {
            const obtenerFiltroDeContinente = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${continente}`;

                // console.log(url)
                
                const result = await axios.get(url);

                // console.log(result.data.drinks)
                setReceta(result.data.drinks);

            }
            obtenerFiltroDeContinente();
        }


    }, [busqueda]);



    return (
        <RecetasContext.Provider
            value={{
                receta,
                buscarRecetas,
                saveConsultar
            }}
        >
            {props.children}
        </RecetasContext.Provider>
    );
}

export default RecetasProvider;