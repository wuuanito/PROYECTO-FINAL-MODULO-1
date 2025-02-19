import { Episode, DOMElements, ObtenerDatosFunction } from '../src/interfaces/episodios';

const episodioInput: HTMLInputElement | null = document.getElementById('inputEpisodio') as HTMLInputElement;
const titulo = document.getElementById('episodioTituloCard');
const descripcion = document.getElementById('episodioContenidoCard');

if (episodioInput) {
    episodioInput.addEventListener('input', () => {
        if (episodioInput.value.trim()) {
            obtenerDatos(episodioInput.value);
        } else {
            limpiarCampos();
        }
    });
} else {
    console.error('No se encontró el elemento input con id "inputEpisodio"');
}

const limpiarCampos = (): void => {
    if (titulo && descripcion) {
        titulo.textContent = 'Título del episodio';
        descripcion.textContent = '';
    }
}

export const obtenerDatos: ObtenerDatosFunction = async (id: string) => {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
        
        if (!response.ok) {
            limpiarCampos();
            return;
        }

        const data: Episode = await response.json();
        
        if (titulo && descripcion) {
            titulo.textContent = data.name;
            descripcion.textContent = `
            Fecha de Salida: ${data.air_date}
            Personajes: ${data.characters.length}
            `;
        }
    }
    catch (error) {
        console.error('Error desconocido:', error);
        limpiarCampos();
    }
}