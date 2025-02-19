import { Character, ApiResponse, CrearFilaFunction, ObtenerDatosFunction } from '../src/interfaces/personajes';

export const obtenerDatos: ObtenerDatosFunction = async () => {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const { results } = await response.json() as ApiResponse;
        const tbody = document.querySelector('tbody');
        
        if (tbody) {
            tbody.innerHTML = results.map((personaje: Character) => 
                crearFila(personaje)
            ).join('');
        }
        
        return results;
    }
    catch (error) {
        console.error('Error desconocido:', error);
        return [];
    }
}

const crearFila: CrearFilaFunction = (personaje) => {
    return `
    <tr>
        <th scope="row">  <img
          src=${personaje.image}
          alt="imagen_rick_morty"
        /></th>
        <td>
        <b>${personaje.name}</b><br>
        ${personaje.status}<br>
        ${personaje.species}<br>
        ${personaje.gender}<br>
        ${personaje.origin.name}
        </td>
    </tr>
`;
}

document.addEventListener('DOMContentLoaded', obtenerDatos);