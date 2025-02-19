var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const API_URL = 'https://rickandmortyapi.com/api/location/';
const elements = {
    locationInput: document.getElementById('locationInput'),
    locationTituloCard: document.getElementById('locationTituloCard'),
    locationContenidoCard: document.getElementById('locationContenidoCard')
};
const obtenerDatos = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`${API_URL}${id}`);
        const data = yield response.json();
        if (elements.locationTituloCard && elements.locationContenidoCard) {
            elements.locationTituloCard.textContent = data.name;
            elements.locationContenidoCard.innerHTML = `
                <strong>Tipo:</strong> ${data.type}<br>
                <strong>Dimensión:</strong> ${data.dimension}<br>
                <strong>Número de residentes:</strong> ${data.residents.length}<br>
                <strong>Creado:</strong> ${new Date(data.created).toLocaleDateString()}
            `;
        }
    }
    catch (error) {
        if (elements.locationTituloCard && elements.locationContenidoCard) {
            elements.locationTituloCard.textContent = 'Error';
            elements.locationContenidoCard.textContent = 'No se encontró la localización';
        }
    }
});
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    (_a = elements.locationInput) === null || _a === void 0 ? void 0 : _a.addEventListener('input', (e) => {
        const input = e.target;
        if (input.value) {
            obtenerDatos(input.value);
        }
        else {
            if (elements.locationTituloCard && elements.locationContenidoCard) {
                elements.locationTituloCard.textContent = 'Nombre de la localización';
                elements.locationContenidoCard.textContent = '';
            }
        }
    });
});
export {};
//# sourceMappingURL=localizaciones.js.map