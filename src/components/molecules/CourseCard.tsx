import React from 'react';
import type { Curso } from '@graphql-astro/generated/graphql';

interface CourseCardProps extends Partial<Curso> {
  className?: string;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  courseTitle,
  imagenURL,
  descripcionCorta,
  slug,
  precio,
  descuento,
  duracionHoras,
  currency = 'USD'
}) => {
  const currentPrice = precio || 0;
  const originalPrice = descuento ? currentPrice / (1 - (descuento / 100)) : null;
  
  // Formatter for currency
  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency || 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col group overflow-hidden border border-base-200">
      {/* Image Section with Overlay Bands for Price/Discount */}
      <a href={`/cursos/${slug}`} className="block relative aspect-video overflow-hidden">
        <figure className="w-full h-full">
            <img
            src={imagenURL?.url || '/placeholder-course.jpg'}
            alt={imagenURL?.alt || courseTitle || 'Course Image'}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Discount Badge (Top Right) */}
            {descuento && descuento > 0 && (
            <div className="absolute top-3 right-3 bg-red-500 text-white font-bold px-3 py-1 rounded-full text-sm shadow-md animate-pulse">
                -{descuento}% OFF
            </div>
            )}

            {/* Price Band (Bottom) */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 pt-12 flex items-end justify-end text-white">
                
                <div className="flex flex-col items-end">
                    {originalPrice && (
                    <span className="text-xs text-gray-300 line-through decoration-red-500 decoration-2">
                        {formatPrice(originalPrice)}
                    </span>
                    )}
                    <span className="text-xl font-bold text-iq-purple-light-mid-200 drop-shadow-sm">
                    {currentPrice === 0 ? 'GRATIS' : formatPrice(currentPrice)}
                    </span>
                </div>
            </div>
        </figure>
      </a>

      {/* Content Section */}
      <div className="card-body p-5 flex flex-col flex-grow gap-2">
        <div className="flex justify-between items-start gap-2">
             <a href={`/cursos/${slug}`} className="hover:text-primary transition-colors">
                <h2 className="card-title text-lg font-bold leading-tight line-clamp-2" title={courseTitle || ''}>
                {courseTitle}
                </h2>
             </a>
        </div>
       

        {/* Duration & Metadata */}
        <div className="flex items-center gap-4 text-xs text-base-content/70 mt-1">
            {duracionHoras && (
                 <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{duracionHoras} horas</span>
                </div>
            )}
           
           {/* Add more metadata icons here if needed (e.g. lessons count) */}
        </div>

        <p className="text-sm text-base-content/80 line-clamp-2 mt-2 flex-grow">
          {descripcionCorta}
        </p>
        
        {/* Actions */}
        <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-base-200">
             <a 
            href={`/cursos/${slug}`} 
            className="btn btn-outline h-10 min-h-[40px] hover:!bg-[var(--color-btn-hover)] hover:!border-[var(--color-btn-hover)] hover:!text-white rounded-xl transition-all duration-300"
          >
            Ver Detalles
          </a>
          <button className="btn btn-primary h-10 min-h-[40px] text-white shadow-md shadow-primary/20 hover:bg-[var(--color-btn-hover)] hover:border-[var(--color-btn-hover)] hover:shadow-lg hover:shadow-[var(--color-btn-hover)]/40 hover:scale-[1.03] uppercase font-bold tracking-wide rounded-xl transition-all duration-300">
            Inscribirme
          </button>
        </div>
      </div>
    </div>
  );
};
