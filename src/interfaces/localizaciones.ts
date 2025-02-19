export interface Location {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
    created: string;
}

export interface ApiResponse {
    info?: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    };
    results?: Location[];
    error?: string;
}

export interface DOMElements {
    locationInput: HTMLInputElement | null;
    locationTituloCard: HTMLElement | null;
    locationContenidoCard: HTMLElement | null;
}