var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const episodioInput = document.getElementById('inputEpisodio');
const titulo = document.getElementById('episodioTituloCard');
const descripcion = document.getElementById('episodioContenidoCard');
if (episodioInput) {
    episodioInput.addEventListener('input', () => {
        if (episodioInput.value.trim()) {
            obtenerDatos(episodioInput.value);
        }
        else {
            limpiarCampos();
        }
    });
}
else {
    console.error('No se encontró el elemento input con id "inputEpisodio"');
}
const limpiarCampos = () => {
    if (titulo && descripcion) {
        titulo.textContent = 'Título del episodio';
        descripcion.textContent = '';
    }
};
export const obtenerDatos = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`https://rickandmortyapi.com/api/episode/${id}`);
        if (!response.ok) {
            limpiarCampos();
            return;
        }
        const data = yield response.json();
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
});
//# sourceMappingURL=episodios.js.map