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
        let datosMapa = results.map((indice) => {
            return {
                nombre: indice.name
            };
        });
        console.log(datosMapa);
    }
    catch (error) {
        console.error('Error desconocido:', error);
    }
});
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    (_a = document.getElementById('c3poButton')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', obtenerDatos);
});
//# sourceMappingURL=landingPage.js.map