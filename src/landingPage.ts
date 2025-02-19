import { PersonajeStarWars } from "./interfaces/personajesStarWars";

export const obtenerDatos = async () => {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const {results} = await response.json()
        let datosMapa = results.map((indice:any)=>{
            return{
                nombre: indice.name
            }
        })
        console.log(datosMapa);
    }
    catch (error) {
       
            console.error('Error desconocido:', error);
        
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('c3poButton')?.addEventListener('click', obtenerDatos);
});