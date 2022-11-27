
import { v4 as uuid } from 'uuid';
import React, { useState } from 'react'
import { listaRestaurantes } from './info-restaurantes'

export const NuevoRestaurante = () => {

  const [restaurantes, setRestaurantes] = useState(listaRestaurantes);

  const handleSubmit = (event) => {
    setRestaurantes({
      ...restaurantes,
      id: uuid(),
      [event.target.name] : event.target.value
    })
    console.log(event)
  }

  return<>
  <form>
        <div className="container-fluid mb-3 mt-3 ">
            <label className="form-label">Nombre</label>
            <input type="input" name='nombre' className="form-control" onChange={handleSubmit}  aria-describedby="Nombre" />
        </div>
        <div className=" container-fluid mb-3 mt-3">
            <label  className="form-label">Descripcion</label>
            <input type="input" name='descripcion' className="form-control" onChange={handleSubmit} />
        </div>

        <div className=" container-fluid mb-3 mt-3">
            <label  className="form-label">Direccion</label>
            <input type="input" name='direccion' className="form-control"/>
        </div>

        <div className="container-fluid mb-3 mt-3">
            <label  className="form-label">Imagen URL</label>
            <input type="input" name='imagen' className="form-control" onChange={handleSubmit} />
            <button type="submit" className=" mt-3 btn btn-primary" onSubmit={handleSubmit}>Guardar</button>
        </div>
    </form>
  </>
}
