import React, { useState } from 'react'
import { listaRestaurantes } from './info-restaurantes'
import './style.css';
export const Inicio = () => {
    const [restaurantes] = useState(listaRestaurantes);
    return <>
        <div className='container mt-5'>
            <div className="row mt-2 cols-1   ">
                {
                    restaurantes.map(restaurante => {
                        return (
                            <div className="col d-flex align-items-stretch"  key={restaurante.id}>
                                <div className="card" style={{width: '18rem'}}  >
                                    <img src={restaurante.imagen} className="card-img-top" alt="..." />
                                    <h5 className='card-title'>{restaurante.nombre}</h5>
                                    <div className="card-body">
                                        <p className="card-text">{restaurante.descripcion}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
    </>
}
