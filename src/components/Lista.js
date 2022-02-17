import React, { useContext, useEffect } from 'react';
import { ListaContext } from '../context/ContextLista';
import { CountryContext } from '../context/ContextCountry';

import { useState } from 'react';

const Lista = () => {

    const { countrys, forecast, setFirst, setCiti } = useContext(CountryContext);

    const { lista } = useContext(ListaContext);

    const [render, setRender] = useState(true)

    useEffect(() => {

        console.log(forecast)

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
                        <div className=' col-md-3 card '>
                            <h2 className='card-header'>{`Clima ${countrys.name} dia `} {`${forecast.list[0].dt_txt} `}</h2>
                            <p />
                            <div className='ml-4'>{`Temperatura : ${forecast.list[0].main.temp}`}</div>
                            <p />
                        </div>
                        <div className=' col-md-3 card '>
                            <h2 className='card-header'>{`Clima ${countrys.name} dia `} {`${forecast.list[3].dt_txt} `}</h2>
                            <p />
                            <div className='ml-4'>{`Temperatura : ${forecast.list[3].main.temp}`}</div>
                            <p />
                        </div>                        <div className=' col-md-3 card '>
                            <h2 className='card-header'>{`Clima ${countrys.name} dia `} {`${forecast.list[11].dt_txt} `}</h2>
                            <p />
                            <div className='ml-4'>{`Temperatura : ${forecast.list[11].main.temp}`}</div>
                            <p />
                        </div>                        <div className=' col-md-3 card '>
                            <h2 className='card-header'>{`Clima ${countrys.name} dia `} {`${forecast.list[19].dt_txt} `}</h2>
                            <p />
                            <div className='ml-4'>{`Temperatura : ${forecast.list[19].main.temp}`}</div>
                            <p />
                        </div>                        <div className=' col-md-3 card '>
                            <h2 className='card-header'>{`Clima ${countrys.name} dia `} {`${forecast.list[27].dt_txt} `}</h2>
                            <p />
                            <div className='ml-4'>{`Temperatura : ${forecast.list[27].main.temp}`}</div>
                            <p />
                        </div>

                    </div>
                )
            }

        </div>
    );
}

export default Lista;

// forecast.list.map(x => {
//     <div className='row mb-3'>
//         <div className=' col-md-12 card '>

//             <h2 className='card-header'>{`Clima hoy: ${forecast.list[0].dt} `}</h2>
//             <p />
//             <div className='ml-4'>{`Temperatura Actual: ${x.dt_txt}`}</div>
//             <p />
//             <div className='ml-4'>{`Sensacion: ${x.dt_txt}`}</div>
//             <p />
//             <div className='ml-4 mb-4'>{`Humedad: ${x.dt_txt}`}</div>
//         </div>
//     </div>


