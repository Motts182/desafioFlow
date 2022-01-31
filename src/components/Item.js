import React from 'react';

const Item = ({ receta }) => {
    return (
        <div className='col-md-4 mb-3'>
            <div className='card'>
                <h2 className='card-header'>{receta.strDrink}</h2>

                <img
                    className='card-img-top'
                    src={receta.strDrinkThumb}
                />

                <div className='card-body'>
                    <button
                        type='button'
                        className='btn btn-block btn-primary'
                    >
                        ver informacion
                    </button>
                </div>


            </div>
        </div>
    );
}

export default Item;