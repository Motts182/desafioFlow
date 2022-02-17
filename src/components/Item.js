import React, { useContext} from 'react';

const Item = ({ country }) => {

    return (
        <div className='col-md-4 mb-3'>
            <div className='card'>
                {/* <h2 className='card-header'>{`${country.name}`}</h2>
                <p />
                <div className='ml-4'>{`Temperatura: ${country.main.temp}`}</div>
                <p />
                <div className='ml-4'>{`Sensacion: ${country.main.feels_like}`}</div>
                <p />
                <div className='ml-4 mb-4'>{`Humedad: ${country.main.humidity}`}</div> */}
            </div>
        </div>
    );
}

export default Item;