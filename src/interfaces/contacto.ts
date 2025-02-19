export interface ContactForm {
    nombre: string;
    email: string;
    asunto: string;
    mensaje: string;
    aceptaPoliticas: boolean;
}

export interface FormElements extends HTMLFormControlsCollection {
    nombre: HTMLInputElement;
    email: HTMLInputElement;
    asunto: HTMLInputElement;
    mensaje: HTMLTextAreaElement;
    politicas: HTMLInputElement;
}