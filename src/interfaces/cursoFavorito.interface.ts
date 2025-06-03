export interface CursoFavorito {
    courseTitle: string;
    _id: string;
    imagenURL: {
        url: string;
        alt: string;
    };
    descripcionCorta: string;
    slug: string;
}