import React, { useContext } from 'react';
import Item from './Item';
import { RecetasContext } from '../context/ContextRecetas';

const Lista = () => {
    
    //extract info
    const { receta } = useContext(RecetasContext);

    return (

        <div className='row mt-5'>
            {
                Object.values(receta)
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


