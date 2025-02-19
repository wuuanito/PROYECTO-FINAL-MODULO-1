var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const obtenerDatos = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch('https://rickandmortyapi.com/api/character');
        const { results } = yield response.json();
        const tbody = document.querySelector('tbody');
        if (tbody) {
            tbody.innerHTML = results.map((personaje) => crearFila(personaje)).join('');
        }
        return results;
    }
    catch (error) {
        console.error('Error desconocido:', error);
        return [];
    }
});
const crearFila = (personaje) => {
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
};
document.addEventListener('DOMContentLoaded', obtenerDatos);
//# sourceMappingURL=personajes.js.map