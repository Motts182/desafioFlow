import React, { useContext } from 'react';
import Item from './Item';
import { ListaContext } from '../context/ContextLista';

const Lista = () => {
    
    //extract info
    const { lista } = useContext(ListaContext);

    return (

        <div className='row mt-5'>
            {
                Object.values(lista)
                    .filter(c => c.All.country !== undefined)
                    .map(country => (
                        <Item
                            key={country.All.country}
                            country={country}
                        ></Item>
                    ))
            }
        </div>
    );
}

export default Lista;


