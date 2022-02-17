import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

//create contex
export const CountryContext = createContext();

//provider is where state and functions live
const CountryProvider = (props) => {

    //create state context
    const [countrys, setCountrys] = useState(null);

    const [citi, setCiti] = useState("mendoza");

    const [forecast, setForecast] = useState([]);


    useEffect(() => {
        const getCountrys = async () => {

            // console.log(citi);

            const url = `https://api.openweathermap.org/data/2.5/weather?q=${citi}&appid=af02f458fe37a778cc2772725d179030`

            const countrys = await axios.get(url);

            const url2 = `https://api.openweathermap.org/data/2.5/forecast?q=${citi}&appid=af02f458fe37a778cc2772725d179030`

            const forecast = await axios.get(url2);

            setForecast(forecast.data)

            setCountrys(countrys.data);

        }
        getCountrys();

    }, [citi])


    return (
        <CountryContext.Provider
            value={{
                countrys,
                forecast,
                setCiti
            }}
        >
            {props.children}
        </CountryContext.Provider>
    )
}

export default CountryProvider;

