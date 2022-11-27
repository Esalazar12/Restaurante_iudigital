import { v4 as uuid } from 'uuid';

const listaRestaurantes = [
    {
    id: uuid(),
    nombre: 'Pacifico mar',
    descripcion: 'Av. 85 Nro. 45 - 85 Baranquilla  Deliciosa comida de mar',
    imagen: 'https://acortar.link/09toXe',
    },
   
    {
    id: uuid(),
    nombre: 'Italiano 65',
    descripcion: 'Av 45 Nro. 1 - 85 Medellín Deliciosa comida italiana',
    imagen: 'https://acortar.link/sRLckN'
    },

    {
    id: uuid(),
    nombre: 'Fritos y Mas',
    descripcion: 'Calle 45 Medellín Comida rápida',
    imagen: 'https://acortar.link/izu2eN'
    },

    {
    id: uuid(),
    nombre: 'Pollo Frito',
    descripcion: 'Cr 32 # 56 - 89 Lo mejor del pollo frito',
    imagen: 'https://acortar.link/DjTJJs'
    }

];

export {
    listaRestaurantes,
}
