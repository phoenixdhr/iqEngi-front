import React, { useState } from 'react';
import { type Curso } from '@graphql-astro/generated/graphql';
import { FAVORITOS_CURSOS } from '@const/const-string';

function getLocalStorageCursosFavoritos(): Curso[] {
    const raw = localStorage.getItem(FAVORITOS_CURSOS) || '[]';
    try {
        return JSON.parse(raw);
    } catch {
        return [];
    }
}

export default function CursosFavoritosLista() {
    const [cursosFavoritos, setCursosFavoritos] = useState<Curso[]>(() =>
        getLocalStorageCursosFavoritos(),
    );

    return (
        <div className="grid grid-cols-2 sm:grid-cols-4">
            {cursosFavoritos.map((curso) => (
                <div key={curso._id}>
                    <h2>{curso.courseTitle}</h2>
                </div>
            ))}
        </div>
    );
}
