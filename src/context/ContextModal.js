import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ContextModal = createContext();

const ModalProvider = (props) => {


    const [idCountry, setIdCountry] = useState(null);
    const [covidCountry, setCovidCountry] = useState({});

    useEffect(() => {

        const infoModal = async () => {
            
            if(!idCountry) return;
            
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idCountry}`

            const rest = await axios.get(url);

            setCovidCountry(rest.data.drinks[0]);
        }

        infoModal();
    }, [idCountry]);

    return (
        <ContextModal.Provider
            value={{
                covidCountry,
                setCovidCountry,
                setIdCountry
            }}
        >
            {props.children}
        </ContextModal.Provider>
    )
}

export default ModalProvider;