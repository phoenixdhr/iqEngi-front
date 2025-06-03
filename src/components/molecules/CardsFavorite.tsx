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
        <div className="text-current no-underline flex flex-col gap-2">
            <a
                href={`/cursos/${props.slug}`}
                className="text-current no-underline"
            >
                <div className="card bg-base-100 shadow-xl w-full hover:scale-105 transition-transform hover:shadow-2xl hover:contrast-125">
                    <figure>
                        <img
                            src={props.imagenURL.url}
                            alt={props.imagenURL.alt}
                        />
                    </figure>
                    <div className="card-body"></div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{props.courseTitle}</h2>
                    <p className="card-text">{props.descripcionCorta}</p>
                </div>
            </a>
            <div className="card-actions justify-end">
                <button
                    onClick={() => handleEliminarFavorito(props._id)}
                    className="btn btn-primary bg-iq-purple-light-mid-200 border-iq-purple-light-mid-200"
                >
                    Eliminar de favoritos
                </button>
            </div>
        </div>
    );
}
