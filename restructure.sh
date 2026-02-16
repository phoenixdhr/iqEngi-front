#!/bin/bash
# Script to restructure project components
# Usage: ./restructure.sh

# Create directories
mkdir -p src/components/features/Courses
mkdir -p src/components/features/Blog
mkdir -p src/components/molecules/Cards
mkdir -p src/components/molecules/Forms
mkdir -p src/components/sections/Courses
mkdir -p src/components/sections/Landing
mkdir -p src/components/sections/Newsletter
mkdir -p src/components/sections/Layout
mkdir -p src/components/ui/Currency

# Move Files - Features
mv src/components/features/FeaturedCourses.tsx src/components/features/Courses/
mv src/components/features/PopularCoursesList.tsx src/components/features/Courses/
mv src/components/features/CourseCatalog.tsx src/components/features/Courses/
mv src/components/features/CursosFavoritosLista.tsx src/components/features/Courses/
mv src/components/features/AllPostsSection.tsx src/components/features/Blog/

# Move Files - Molecules
mv src/components/molecules/CourseCard.tsx src/components/molecules/Cards/
mv src/components/molecules/CourseCardStatic.astro src/components/molecules/Cards/
mv src/components/molecules/CardsFavorite.tsx src/components/molecules/Cards/
mv src/components/molecules/FormularioContacto.tsx src/components/molecules/Forms/
mv src/components/molecules/FormularioContacto.test.tsx src/components/molecules/Forms/

# Move Files - Sections
mv src/components/sections/CoursesCategories.astro src/components/sections/Courses/
mv src/components/sections/CoursesHero.astro src/components/sections/Courses/
mv src/components/sections/CoursesPopular.astro src/components/sections/Courses/
mv src/components/sections/CoursesTestimonials.astro src/components/sections/Courses/
mv src/components/sections/CursosBanner-index.astro src/components/sections/Courses/

mv src/components/sections/Hero.tsx src/components/sections/Landing/
mv src/components/sections/HowItWorks.tsx src/components/sections/Landing/
mv src/components/sections/WhyChooseUs.tsx src/components/sections/Landing/

mv src/components/sections/NewsletterBlog.tsx src/components/sections/Newsletter/
mv src/components/sections/NewsletterCTA.tsx src/components/sections/Newsletter/

mv src/components/sections/Navbar.tsx src/components/sections/Layout/
mv src/components/sections/NavbarUser.astro src/components/sections/Layout/
mv src/components/sections/Footer.astro src/components/sections/Layout/

# Move Files - UI
mv src/components/ui/CoursePriceDisplay.tsx src/components/ui/Currency/
mv src/components/ui/CurrencySelector.tsx src/components/ui/Currency/

echo "Restructuring complete."
