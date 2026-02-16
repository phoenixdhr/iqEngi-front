import React, { useState, useEffect } from 'react';
import { FAVORITOS_CURSOS } from '@const/const-string';
import CardsFavorite from '@components/molecules/Cards/CardsFavorite';
import type { CursoFavorito } from 'src/interfaces/cursoFavorito.interface';
import { BookmarkSlashIcon } from '@heroicons/react/24/outline'; // Adjust path if needed, usually just '24/outline'

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
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setCursosFavoritos(getLocalStorageCursosFavoritos());
        setLoading(false);
    }, []);

    function handleCursoEliminado(id: string) {
        setCursosFavoritos(cursosFavoritos.filter((curso) => curso._id !== id));
    }

    if (loading) {
        return <div className="min-h-[200px] flex items-center justify-center">
            <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>;
    }

    return (
        <section className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-8">
                {cursosFavoritos.length > 0 ? (
                    cursosFavoritos.map((curso, index) => (
                        <div key={curso._id} className="animate-in fade-in zoom-in duration-500" style={{ animationDelay: `${index * 100}ms` }}>
                            <CardsFavorite
                                {...curso}
                                onDelete={handleCursoEliminado}
                            />
                        </div>
                    ))
                ) : (
                    <div className="col-span-full flex flex-col items-center justify-center py-16 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="bg-base-200 p-6 rounded-full mb-4">
                            <BookmarkSlashIcon className="w-16 h-16 text-base-content/50" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">No tienes cursos favoritos</h3>
                        <p className="text-base-content/70 mb-8 max-w-md">
                            Explora nuestro catálogo y guarda los cursos que más te interesen para acceder a ellos rápidamente.
                        </p>
                        <a href="/cursos" className="btn btn-primary btn-lg">
                            Explorar Cursos
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
}
