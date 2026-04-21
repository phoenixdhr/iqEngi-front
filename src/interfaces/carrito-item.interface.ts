export interface CarritoItem {
  cursoId: string;
  courseTitle: string;
  precio: number;
  currency: string;
  descuento: number;
  imagenURL: { url: string; alt: string };
  slug: string;
}
