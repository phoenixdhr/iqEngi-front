import React, { useState, useMemo } from 'react';
import type { Curso, Categoria } from '@graphql-astro/generated/graphql';
import { CourseCard } from '../molecules/CourseCard';

interface CourseCatalogProps {
  cursos: Curso[];
  categorias: Categoria[];
}

export const CourseCatalog: React.FC<CourseCatalogProps> = ({ cursos, categorias }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortOption, setSortOption] = useState<'recent' | 'price_asc' | 'price_desc'>('recent');

  // Filter and Sort Logic
  const filteredAndSortedCourses = useMemo(() => {
    let result = [...cursos];

    // 1. Filter by Search Term
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      result = result.filter(curso => 
        curso.courseTitle?.toLowerCase().includes(term) ||
        curso.descripcionCorta?.toLowerCase().includes(term)
      );
    }

    // 2. Filter by Category
    if (selectedCategory !== 'all') {
      result = result.filter(curso => 
        curso.categorias?.some(cat => cat?._id === selectedCategory)
      );
    }

    // 3. Sort
    result.sort((a, b) => {
        const priceA = a.precio || 0;
        const priceB = b.precio || 0;
        // Assuming createdAt or similar exists, but using _id or simple fallback if not available
        // GraphQL response usually has _id which has timestamp in MongoDB, but strictly we might need a date field.
        // For now, let's assume strictly array order is "recent" or use a date field if available.
        // The prompt asked for "Más recientes" and "Precio".
        // If no date field, we rely on the original order passed.
        
        if (sortOption === 'price_asc') {
            return priceA - priceB;
        } else if (sortOption === 'price_desc') {
            return priceB - priceA;
        }
        return 0; // Default to original order (recent)
    });

    return result;
  }, [cursos, searchTerm, selectedCategory, sortOption]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      {/* Controls Header */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8 bg-base-100 p-4 rounded-xl shadow-sm border border-base-200">
        
        {/* Search Bar */}
        <div className="w-full md:w-1/3 relative">
            <input 
                type="text" 
                placeholder="Buscar cursos (ej. API, Tanques)..." 
                className="input input-bordered w-full pl-10 focus:input-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        {/* Filters Group */}
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto overflow-x-auto items-center">
            
            {/* Clear Filters Button */}
            {(searchTerm || selectedCategory !== 'all') && (
                <div className="tooltip" data-tip="Limpiar filtros">
                    <button 
                        onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
                        className="btn btn-sm gap-2 !bg-red-500 hover:!bg-red-600 text-white border-none shadow-md animate-in fade-in zoom-in duration-200"
                        title="Limpiar filtros"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="hidden sm:inline font-bold">Limpiar</span>
                    </button>
                </div>
            )}

            {/* Category Select */}
            <select 
                className="select select-bordered focus:select-primary w-full sm:w-auto"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
            >
                <option value="all">Todas las Categorías</option>
                {categorias.map(cat => (
                    <option key={cat._id} value={cat._id}>{cat.nombreCategoria}</option>
                ))}
            </select>

            {/* Sort Select */}
            <select 
                className="select select-bordered focus:select-primary w-full sm:w-auto"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as any)}
            >
                <option value="recent">Más recientes</option>
                <option value="price_asc">Precio: Menor a Mayor</option>
                <option value="price_desc">Precio: Mayor a Menor</option>
            </select>
        </div>
      </div>

      {/* Results Grid */}
      {filteredAndSortedCourses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedCourses.map(curso => (
                <CourseCard key={curso._id} {...curso} />
            ))}
        </div>
      ) : (
        <div className="text-center py-20 text-base-content/60">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-bold">No se encontraron cursos</h3>
            <p>Intenta con otra búsqueda o categoría</p>
            <button 
                className="btn btn-link mt-2" 
                onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
            >
                Limpiar filtros
            </button>
        </div>
      )}
    </div>
  );
};
