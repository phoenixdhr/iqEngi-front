import type { Comentario, Curso, Instructor } from "@graphql-astro/generated/graphql";
import { siteSchema } from "../const/site-schema";

// 🏠 JSON-LD para la Página Principal (WebSite)
function getHomeJsonLd() {
  return {
    "@context": siteSchema.context,
    "@type": "WebSite",
    "name": siteSchema.siteName,
    "url": siteSchema.siteUrl,
    "description": "Plataforma de cursos online en normativas API, ASME, NFPA y más.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteSchema.siteUrl}/cursos?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}

// 📌 JSON-LD para la Lista de Cursos (ItemList)
function getCoursesJsonLd(courses: Curso[]) {
  return {
    "@context": siteSchema.context,
    "@type": "ItemList",
    "name": "Lista de Cursos en IQEngi",
    "description": "Encuentra cursos de normativas API, ASME, NFPA y más.",
    "itemListElement": courses.map((curso, index) => ({
      "@type": "Course",
      "position": index + 1,
      "name": curso.courseTitle,
      "url": `${siteSchema.siteUrl}/cursos/${curso.slug}`
    }))
  };
}

// 📚 JSON-LD para un Curso Individual (Course)
function getCourseJsonLd(course: Curso) {
  return {
    "@context": siteSchema.context,
    "@type": "Course",
    "name": course.courseTitle,
    "description": course.descripcionCorta,
    "image": course.imagenURL?.url,
    "url": `${siteSchema.siteUrl}/cursos/${course.slug}`,
    "provider": siteSchema.organization,
    "offers": {
      "@type": "Offer",
      "price": course.precio?.toString(),
      "priceCurrency": siteSchema.currency,
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString().split("T")[0]
    },
    "instructor": {
      "@type": "Person",
      "name": course.instructor?.firstName,
      "url": `${siteSchema.siteUrl}/instructores/${course.instructor?._id}`
    },
    "duration": course.duracionHoras
  };
}

// 🧑‍🏫 JSON-LD para una Página de Instructor (Person)
function getInstructorJsonLd(instructor: Instructor) {
  return {
    "@context": siteSchema.context,
    "@type": "Person",
    "name": instructor.firstName,
    "url": `${siteSchema.siteUrl}/instructores/${instructor._id}`,
    "description": "instructor.bio", //instructor.bio
    "image": instructor._id,
    "jobTitle": "Instructor en IQEngi",
    "affiliation": siteSchema.organization
  };
}

// 📝 JSON-LD para un Blog/Artículo (BlogPosting)
function getBlogJsonLd(post: Comentario) {
  return {
    "@context": siteSchema.context,
    "@type": "BlogPosting",
    "headline": "titulo del post",//post.title?,
    "author": {
      "@type": "Person",
      "name": "autor del post", //post.author
    },
    "publisher": siteSchema.organization,
    "datePublished": "post.datePublished", //post.datePublished,
    "image": "post.image", // post.image,
    "articleBody": "post.content.slice(0, 200)" //post.content.slice(0, 200) // Solo los primeros 200 caracteres
  };
}


export { getHomeJsonLd, getCoursesJsonLd, getCourseJsonLd, getInstructorJsonLd, getBlogJsonLd };