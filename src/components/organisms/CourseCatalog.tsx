/**
 * CourseCatalog - Catálogo de cursos con paginación híbrida
 * 
 * Este componente implementa paginación híbrida:
 * - Carga inicial de 24 cursos (configurable vía props)
 * - Botón "Cargar más" cuando hay más cursos disponibles en el servidor
 * - Filtrado y búsqueda client-side sobre los cursos cargados
 * - Paginación client-side sobre los cursos filtrados
 */
import React, { useState, useMemo, useEffect, useCallback } from 'react';
import type { Curso, Categoria } from '@graphql-astro/generated/graphql';
import { CursosDocument } from '@graphql-astro/generated/graphql';
import { clientGql } from '@graphql-astro/apolloClient';
import { CourseCard } from '../molecules/CourseCard';
import { useCurrency } from '../../context/CurrencyContext';

interface CourseCatalogProps {
  cursos: Curso[];
  categorias: Categoria[];
  hasMoreInitial?: boolean;  // Indica si probablemente hay más cursos en el servidor
  initialLimit?: number;     // Límite de cursos en la carga inicial
}

// Opciones de items por página
const ITEMS_PER_PAGE_OPTIONS = [6, 9, 12, 24];
const DEFAULT_ITEMS_PER_PAGE = 6;
const LOAD_MORE_BATCH_SIZE = 24;

export const CourseCatalog: React.FC<CourseCatalogProps> = ({
  cursos: initialCursos,
  categorias,
  hasMoreInitial = false,
  initialLimit = 24
}) => {
  // Estado para todos los cursos cargados (inicial + fetchMore)
  const [allCourses, setAllCourses] = useState<Curso[]>(initialCursos);
  const [hasMoreFromServer, setHasMoreFromServer] = useState(hasMoreInitial);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  // Estado para indicar carga al cambiar moneda
  const [isCurrencyLoading, setIsCurrencyLoading] = useState(false);

  // Estados de filtros
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortOption, setSortOption] = useState<'recent' | 'price_asc' | 'price_desc'>('recent');

  // Estados para paginación client-side
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(DEFAULT_ITEMS_PER_PAGE);

  // Función para cargar más cursos del servidor usando clientGql directamente
  const handleLoadMore = useCallback(async () => {
    if (isLoadingMore || !hasMoreFromServer) return;

    setIsLoadingMore(true);
    try {
      const { data } = await clientGql.query({
        query: CursosDocument,
        variables: {
          offset: allCourses.length,
          limit: LOAD_MORE_BATCH_SIZE,
          currency: currency
        },
        fetchPolicy: 'network-only' // Forzar fetch del servidor
      });

      if (data?.Cursos) {
        const newCourses = data.Cursos as Curso[];
        setAllCourses(prev => [...prev, ...newCourses]);

        // Si devolvió menos de LOAD_MORE_BATCH_SIZE, no hay más cursos
        if (newCourses.length < LOAD_MORE_BATCH_SIZE) {
          setHasMoreFromServer(false);
        }
      } else {
        setHasMoreFromServer(false);
      }
    } catch (error) {
      console.error('Error cargando más cursos:', error);
    } finally {
      setIsLoadingMore(false);
    }
  }, [allCourses.length, hasMoreFromServer, isLoadingMore]);

  // Filters logic
  // ... (previous logic)

  const { currency } = useCurrency(); // Get global currency

  // Refetch when currency changes
  useEffect(() => {
    const fetchCoursesInCurrency = async () => {
      if (initialCursos.length > 0 && currency) {
        setIsCurrencyLoading(true);
        try {
          // We keep the current limit but reset offset to 0 to reload the "first page" of current view
          // Or better, reload the amount of currently loaded courses?
          // Let's reload the initial limit to start fresh, or current allCourses.length?
          // Reloading all might be heavy if user scrolled a lot. Let's restart.

          const limitToFetch = Math.max(allCourses.length, initialLimit);

          const { data } = await clientGql.query({
            query: CursosDocument,
            variables: {
              offset: 0,
              limit: limitToFetch,
              currency: currency // Pass the currency
            },
            fetchPolicy: 'network-only'
          });


          if (data?.Cursos) {
            setAllCourses(data.Cursos as Curso[]);
          }
        } catch (error) {
          console.error("Error updating courses currency:", error);
        } finally {
          setIsCurrencyLoading(false);
        }
      } else {
        console.log('DEBUG: Skipping currency fetch. Conditions not met.');
      }
    };

    fetchCoursesInCurrency();
  }, [currency]);

  // Filter and Sort Logic (sobre todos los cursos cargados)
  const filteredAndSortedCourses = useMemo(() => {
    console.log('DEBUG: Calculating filtered courses. Total:', allCourses.length, 'Filters:', { searchTerm, selectedCategory, sortOption });
    let result = [...allCourses];

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

      if (sortOption === 'price_asc') {
        return priceA - priceB;
      } else if (sortOption === 'price_desc') {
        return priceB - priceA;
      }
      return 0; // Default to original order (recent)
    });

    console.log('DEBUG: Resulting filtered courses:', result.length);
    return result;
  }, [allCourses, searchTerm, selectedCategory, sortOption]);

  // Resetear a página 1 cuando cambian los filtros
  useEffect(() => {
    console.log('DEBUG: Resetting to page 1 due to filter change');
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, sortOption, itemsPerPage]);

  // Cálculos de paginación client-side
  const totalItems = filteredAndSortedCourses.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  // Cursos de la página actual
  const paginatedCourses = useMemo(() => {
    return filteredAndSortedCourses.slice(startIndex, endIndex);
  }, [filteredAndSortedCourses, startIndex, endIndex]);

  // Función para generar los números de página visibles
  const getVisiblePageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Siempre mostrar primera página
      pages.push(1);

      // Agregar ellipsis si la página actual está lejos del inicio
      if (currentPage > 3) {
        pages.push('...');
      }

      // Páginas alrededor de la actual
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) {
          pages.push(i);
        }
      }

      // Agregar ellipsis si la página actual está lejos del final
      if (currentPage < totalPages - 2) {
        pages.push('...');
      }

      // Siempre mostrar última página
      if (!pages.includes(totalPages)) {
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      const isGoingBack = page < currentPage;
      const isGoingToLastPage = page === totalPages;

      setCurrentPage(page);

      // Hacer scroll al inicio del catálogo cuando:
      // 1. El usuario va hacia atrás (retrocede páginas)
      // 2. El usuario llega a la última página (para ver los cursos restantes desde arriba)
      // Usamos setTimeout para asegurar que el scroll ocurra después de que React actualice el DOM
      if (isGoingBack || isGoingToLastPage) {
        setTimeout(() => {
          const catalogoElement = document.getElementById('catalogo');
          if (catalogoElement) {
            catalogoElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      {/* Controls Header */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8 bg-base-100 p-4 rounded-xl shadow-sm border border-base-200">
        {/* Search */}
        <div className="flex-1 w-full md:w-auto">
          <div className="form-control">
            <div className="input-group flex">
              <input
                type="text"
                placeholder="Buscar cursos..."
                className="input input-bordered w-full focus:input-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex-shrink-0 w-full md:w-auto">
          <select
            className="select select-bordered w-full md:w-auto focus:select-primary"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">Todas las categorías</option>
            {categorias.map(cat => (
              <option key={cat._id} value={cat._id || ''}>{cat.nombreCategoria}</option>
            ))}
          </select>
        </div>

        {/* Sort Option */}
        <div className="flex-shrink-0 w-full md:w-auto">
          <select
            className="select select-bordered w-full md:w-auto focus:select-primary"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value as 'recent' | 'price_asc' | 'price_desc')}
          >
            <option value="recent">Más recientes</option>
            <option value="price_asc">Precio: menor a mayor</option>
            <option value="price_desc">Precio: mayor a menor</option>
          </select>
        </div>
      </div>

      {/* Results info and items per page */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-6">
        <p className="text-sm text-base-content/70">
          Mostrando <span className="font-semibold text-base-content">{startIndex + 1}-{endIndex}</span> de{' '}
          <span className="font-semibold text-base-content">{totalItems}</span> cursos
          {hasMoreFromServer && (
            <span className="text-primary ml-1">(hay más disponibles)</span>
          )}
        </p>
        <div className="flex items-center gap-2">
          <span className="text-sm text-base-content/70">Mostrar:</span>
          <select
            className="select select-bordered select-sm focus:select-primary"
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
          >
            {ITEMS_PER_PAGE_OPTIONS.map(option => (
              <option key={option} value={option}>{option} cursos</option>
            ))}
          </select>
        </div>
      </div>

      {/* Results Grid */}
      {paginatedCourses.length > 0 ? (
        <>
          {/* Grid con altura mínima para mantener paginación en posición consistente */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px] content-start">
            {paginatedCourses.map(curso => (
              <CourseCard key={curso._id} {...curso} currency={currency} isLoading={isCurrencyLoading} />
            ))}
          </div>

          {/* Pagination Controls - Un solo conjunto unificado */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12">
              {/* Previous Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`btn btn-sm gap-1 transition-all duration-200 ${currentPage === 1
                  ? 'btn-ghost !bg-base-200 !text-base-content/30 !border-base-300 cursor-not-allowed'
                  : 'btn-outline border-primary/50 text-primary hover:btn-primary hover:text-white'
                  }`}
                aria-label="Página anterior"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                <span className="hidden sm:inline">Anterior</span>
              </button>

              {/* Page indicator - Móvil */}
              <span className="text-sm font-medium md:hidden px-2">
                {currentPage} / {totalPages}
              </span>

              {/* Page Numbers - Desktop */}
              <div className="hidden md:flex items-center gap-1">
                {getVisiblePageNumbers().map((page, index) => (
                  page === '...' ? (
                    <span key={`ellipsis-${index}`} className="px-2 text-base-content/50">...</span>
                  ) : (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page as number)}
                      className={`btn btn-sm min-w-[40px] ${currentPage === page
                        ? 'btn-primary'
                        : 'btn-ghost hover:btn-outline'
                        }`}
                      aria-label={`Ir a página ${page}`}
                      aria-current={currentPage === page ? 'page' : undefined}
                    >
                      {page}
                    </button>
                  )
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`btn btn-sm gap-1 transition-all duration-200 ${currentPage === totalPages
                  ? 'btn-ghost !bg-base-200 !text-base-content/30 !border-base-300 cursor-not-allowed'
                  : 'btn-outline border-primary/50 text-primary hover:btn-primary hover:text-white'
                  }`}
                aria-label="Página siguiente"
              >
                <span className="hidden sm:inline">Siguiente</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}

          {/* Load More Button - Aparece cuando hay más cursos en el servidor */}
          {hasMoreFromServer && (
            <div className="flex justify-center mt-8">
              <button
                onClick={handleLoadMore}
                disabled={isLoadingMore}
                className="btn btn-primary btn-wide gap-2"
              >
                {isLoadingMore ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Cargando más cursos...
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Cargar más cursos
                  </>
                )}
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-20 text-base-content/60">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-xl font-semibold mb-2">No se encontraron cursos</h3>
          <p>Prueba ajustando los filtros de búsqueda</p>

          {/* Botón para cargar más si no hay resultados pero hay más en el servidor */}
          {hasMoreFromServer && (
            <button
              onClick={handleLoadMore}
              disabled={isLoadingMore}
              className="btn btn-outline btn-primary mt-4"
            >
              {isLoadingMore ? 'Buscando...' : 'Buscar en más cursos'}
            </button>
          )}
        </div>
      )}
    </div>
  );
};
