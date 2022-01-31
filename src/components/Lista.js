import React, { useContext } from 'react';
import Item from './Item';
import { RecetasContext } from '../context/ContextRecetas';

const Lista = () => {
    //extract info
    const { receta } = useContext(RecetasContext);

    console.log(receta);

    return (
        <div className='row mt-5'>
            {receta.map(receta => (
                <Item 
                    key={receta.idDrink}
                    receta={receta}
                ></Item>
            ))}
        </div>

    );
}

export default Lista;