import React, { useState, useEffect } from 'react';
import { FAVORITOS_CURSOS } from '@const/const-string';
import CardsFavorite from '@components/molecules/CardsFavorite';
import type { CursoFavorito } from 'src/interfaces/cursoFavorito.interface';

function getLocalStorageCursosFavoritos(): CursoFavorito[] {
    if (typeof window === 'undefined') return [];

    const raw = localStorage.getItem(FAVORITOS_CURSOS) || '[]';
    try {
        return JSON.parse(raw);
    } catch {
        return [];
    }
}

export default function CursosFavoritosLista() {
    const [cursosFavoritos, setCursosFavoritos] = useState<CursoFavorito[]>([]);

    useEffect(() => {
        setCursosFavoritos(getLocalStorageCursosFavoritos());
    }, []);

    function handleCursoEliminado(id: string) {
        setCursosFavoritos(cursosFavoritos.filter((curso) => curso._id !== id));
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8">
            {cursosFavoritos.length > 0 ? (
                cursosFavoritos.map((curso) => (
                    <CardsFavorite
                        key={curso._id}
                        {...curso}
                        onDelete={handleCursoEliminado}
                    />
                ))
            ) : (
                <p className="col-span-full text-center py-8">
                    No tienes cursos favoritos guardados
                </p>
            )}
        </div>
    );
}
