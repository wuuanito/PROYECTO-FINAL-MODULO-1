document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('contactForm');
    formulario.addEventListener('submit', handleSubmit);
});
function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const elements = form.elements;
    const formData = {
        nombre: elements.nombre.value,
        email: elements.email.value,
        asunto: elements.asunto.value,
        mensaje: elements.mensaje.value,
        aceptaPoliticas: elements.politicas.checked
    };
    if (!formData.aceptaPoliticas) {
        alert('Debes aceptar la política de privacidad');
        return;
    }
    console.log('Datos del formulario:', formData);
    alert('¡Correo enviado con éxito!');
    form.reset();
}
export {};
//# sourceMappingURL=contacto.js.map