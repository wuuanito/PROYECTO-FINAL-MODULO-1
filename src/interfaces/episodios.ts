export interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
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
    results?: Episode[];
    error?: string;
}

export interface DOMElements {
    episodioInput: HTMLInputElement | null;
    episodioTituloCard: HTMLElement | null;
    episodioContenidoCard: HTMLElement | null;
}

export type ObtenerDatosFunction = (id: string) => Promise<void>;