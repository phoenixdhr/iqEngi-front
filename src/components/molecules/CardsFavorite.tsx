import { FAVORITOS_CURSOS } from '@const/const-string';
import React from 'react';
import type { CursoFavorito } from 'src/interfaces/cursoFavorito.interface';

interface CardsFavoriteProps extends CursoFavorito {
    onDelete?: (id: string) => void;
}
export default function CardsFavorite(props: CardsFavoriteProps) {
    function handleEliminarFavorito(id: string) {
        const favoritosCursos = JSON.parse(
            localStorage.getItem(FAVORITOS_CURSOS) || '[]',
        );

        const nuevoFavoritosCursos = favoritosCursos.filter(
            (favorito: CursoFavorito) => favorito._id !== id,
        );

        localStorage.setItem(
            FAVORITOS_CURSOS,
            JSON.stringify(nuevoFavoritosCursos),
        );
        // Notificar a1 componente padre sobre la eliminación
        if (props.onDelete) {
            props.onDelete(id);
        }
    }

    return (
        <div className="card bg-base-100 shadow-xl w-full h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:contrast-125 flex flex-col justify-between group">
            <a
                href={`/cursos/${props.slug}`}
                className="text-current no-underline flex flex-col flex-grow"
            >
                <figure className="aspect-video relative overflow-hidden">
                    <img
                        src={props.imagenURL.url}
                        alt={props.imagenURL.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </figure>
                <div className="card-body flex-grow p-4">
                    <h2 className="card-title text-lg font-bold min-h-[3.5rem]">{props.courseTitle}</h2>
                    <p className="card-text text-sm line-clamp-3">{props.descripcionCorta}</p>
                </div>
            </a>
            <div className="card-actions justify-end p-4 pt-0 mt-auto">
                <button
                    onClick={() => handleEliminarFavorito(props._id)}
                    className="btn btn-primary bg-iq-purple-light-mid-200 border-iq-purple-light-mid-200 btn-sm w-full"
                >
                    Eliminar de favoritos
                </button>
            </div>
        </div>
    );
}
