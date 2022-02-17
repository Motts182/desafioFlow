import React, { useContext, useEffect } from 'react';
import { ListaContext } from '../context/ContextLista';
import { CountryContext } from '../context/ContextCountry';

import { useState } from 'react';

const Lista = () => {

    const { countrys, setFirst, setCiti } = useContext(CountryContext);

    const { lista } = useContext(ListaContext);

    const [render, setRender] = useState(true)

    useEffect(() => {

        if (render !== false && lista !== null) {
            setRender(true)
        } else {
            setRender(false)
        }
    }, [countrys])


    return (

        <div className='row mt-5'>

            {render ?
                (<div className='col-md-4 mb-3'>
                    <div className='card'>
                        <h2 className='card-header'>Loading...</h2>
                        <p />
                        <div className='ml-4 mb-4'>Loading...</div>
                        <p />
                    </div>
                </div>) :
                (
                    <div className='row mb-3'>
                        <div className=' col-md-12 card '>
                            <h2 className='card-header'>{`Clima hoy: ${countrys.name} `}</h2>
                            <p />
                            <div className='ml-4'>{`Temperatura Actual: ${countrys.main.temp}`}</div>
                            <p />
                            <div className='ml-4'>{`Sensacion: ${countrys.main.feels_like}`}</div>
                            <p />
                            <div className='ml-4 mb-4'>{`Humedad: ${countrys.main.humidity}`}</div>
                        </div>
                        <div className=' col-md-4 card '>
                            <h2 className='card-header'>{`${countrys.name}`}</h2>
                            <p />
                            <div className='ml-4'>{`Temperatura: ${countrys.main.temp}`}</div>
                            <p />
                            <div className='ml-4'>{`Sensacion: ${countrys.main.feels_like}`}</div>
                            <p />
                            <div className='ml-4 mb-4'>{`Humedad: ${countrys.main.humidity}`}</div>
                        </div>
                        <div className=' col-md-4 card '>
                            <h2 className='card-header'>{`${countrys.name}`}</h2>
                            <p />
                            <div className='ml-4'>{`Temperatura: ${countrys.main.temp}`}</div>
                            <p />
                            <div className='ml-4'>{`Sensacion: ${countrys.main.feels_like}`}</div>
                            <p />
                            <div className='ml-4 mb-4'>{`Humedad: ${countrys.main.humidity}`}</div>
                        </div>
                        <div className=' col-md-4 card '>
                            <h2 className='card-header'>{`${countrys.name}`}</h2>
                            <p />
                            <div className='ml-4'>{`Temperatura: ${countrys.main.temp}`}</div>
                            <p />
                            <div className='ml-4'>{`Sensacion: ${countrys.main.feels_like}`}</div>
                            <p />
                            <div className='ml-4 mb-4'>{`Humedad: ${countrys.main.humidity}`}</div>
                        </div>
                        <div className=' col-md-4 card '>
                            <h2 className='card-header'>{`${countrys.name}`}</h2>
                            <p />
                            <div className='ml-4'>{`Temperatura: ${countrys.main.temp}`}</div>
                            <p />
                            <div className='ml-4'>{`Sensacion: ${countrys.main.feels_like}`}</div>
                            <p />
                            <div className='ml-4 mb-4'>{`Humedad: ${countrys.main.humidity}`}</div>
                        </div>
                        <div className=' col-md-4 card '>
                            <h2 className='card-header'>{`${countrys.name}`}</h2>
                            <p />
                            <div className='ml-4'>{`Temperatura: ${countrys.main.temp}`}</div>
                            <p />
                            <div className='ml-4'>{`Sensacion: ${countrys.main.feels_like}`}</div>
                            <p />
                            <div className='ml-4 mb-4'>{`Humedad: ${countrys.main.humidity}`}</div>
                        </div>
                    </div>
                )
            }

        </div>
    );
}

export default Lista;


