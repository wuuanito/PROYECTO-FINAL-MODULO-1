import { Location, ApiResponse, DOMElements } from '../src/interfaces/localizaciones';

const API_URL = 'https://rickandmortyapi.com/api/location/';

const elements: DOMElements = {
    locationInput: document.getElementById('locationInput') as HTMLInputElement,
    locationTituloCard: document.getElementById('locationTituloCard'),
    locationContenidoCard: document.getElementById('locationContenidoCard')
};

const obtenerDatos = async (id: string): Promise<void> => {
    try {
        const response = await fetch(`${API_URL}${id}`);
        const data: Location = await response.json();

        if (elements.locationTituloCard && elements.locationContenidoCard) {
            elements.locationTituloCard.textContent = data.name;
            elements.locationContenidoCard.innerHTML = `
                <strong>Tipo:</strong> ${data.type}<br>
                <strong>Dimensión:</strong> ${data.dimension}<br>
                <strong>Número de residentes:</strong> ${data.residents.length}<br>
                <strong>Creado:</strong> ${new Date(data.created).toLocaleDateString()}
            `;
        }
    } catch (error) {
        if (elements.locationTituloCard && elements.locationContenidoCard) {
            elements.locationTituloCard.textContent = 'Error';
            elements.locationContenidoCard.textContent = 'No se encontró la localización';
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    elements.locationInput?.addEventListener('input', (e: Event) => {
        const input = e.target as HTMLInputElement;
        if (input.value) {
            obtenerDatos(input.value);
        } else {
            if (elements.locationTituloCard && elements.locationContenidoCard) {
                elements.locationTituloCard.textContent = 'Nombre de la localización';
                elements.locationContenidoCard.textContent = '';
            }
        }
    });
});