import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ListaContext = createContext();

const ListaProvider = (props) => {

    const [lista, setLista] = useState([]);

    return (
        <ListaContext.Provider
            value={{
                lista,
                setLista
            }}
        >
            {props.children}
        </ListaContext.Provider>
    );
}

export default ListaProvider;