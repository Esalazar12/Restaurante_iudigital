import React, { useState } from 'react';
import { listaRestaurantes } from './info-restaurantes'
import './style.css';



const Buscar = () => {
    
        const [valoresFormulario, setValoresFormulario] = useState({});
        const [listado,setListado] = useState([]); 

        const { ingreso = '' } = valoresFormulario;
        


        const handleOnChange = (e) => {
            setValoresFormulario({ ...valoresFormulario, [e.target.name]: e.target.value });
        }

        const handleOnSubmit = (e) => {
            e.preventDefault(); 
            setListado(listaRestaurantes.filter(rest => rest.nombre.toLowerCase().includes(ingreso.toLowerCase())))
        }
        return <>
            <div className="container mt-5">
                <form onSubmit={(e) => handleOnSubmit(e)}>
                    <div className="mb-2">
                        <label className="form-label">Nombre del restaurante: </label>
                        <input  type="text" name="ingreso" value={ingreso}
                            className="form-control" onChange={(e) => { handleOnChange(e) }}  />
                            
                    </div>
                    <button type="submit" className="btn btn-primary">Buscar</button>
                    
                </form>
                <div className="container-fluid mt-5">
            <div className=" row mt-2 cols-1 ">
                {
                    listado.map(listaRestaurantes => {
                        return (
                            <div className="col d-flex align-items-stretch" key={listaRestaurantes.id}>
                                <div className="card" style={{width: '18rem'}}>
                                    <img src={listaRestaurantes.imagen} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{listaRestaurantes.nombre}</h5>
                                        <p className="card-text"><small className="text-muted">{listaRestaurantes.descripcion}</small></p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div> 
            </div>

            </>
    }
export {
    Buscar
}