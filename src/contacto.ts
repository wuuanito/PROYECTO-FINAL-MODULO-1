import { ContactForm, FormElements } from '../src/interfaces/contacto';

document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('contactForm') as HTMLFormElement;
    formulario.addEventListener('submit', handleSubmit);
});

function handleSubmit(event: Event): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const elements = form.elements as FormElements;
    
    const formData: ContactForm = {
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