import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

//create contex
export const CountryContext = createContext();

//provider is where state and functions live
const CountryProvider = (props) => {

    //create state context
    const [countrys, setCountrys] = useState([]);

    //call api
    useEffect(() => {
        const getCountrys = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

            const countrys = await axios.get(url);

            setCountrys(countrys.data.drinks);
        }

        getCountrys();
    })


    return (
        <CountryContext.Provider
            value={{
                countrys
            }}
        >
            {props.children}
        </CountryContext.Provider>
    )
}

export default CountryProvider;

