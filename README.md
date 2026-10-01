<div align="center">

<a href="https://ndsg24.github.io/portfolio/"><img src="public/og-image.png" alt="Nelson Daniel Silva Gutiérrez · Senior Full Stack Engineer / Tech Lead" width="100%" /></a>

# Portafolio · Nelson Daniel Silva Gutiérrez

Portafolio personal multilenguaje, rápido y accesible, con tema claro/oscuro y deploy continuo.

[![Ver sitio](https://img.shields.io/badge/Ver_sitio-ndsg24.github.io%2Fportfolio-C6F432?style=for-the-badge&logo=githubpages&logoColor=black)](https://ndsg24.github.io/portfolio/)
[![Deploy](https://github.com/ndsg24/portfolio/actions/workflows/pages.yml/badge.svg)](https://github.com/ndsg24/portfolio/actions/workflows/pages.yml)

<img src="https://skillicons.dev/icons?i=react,ts,vite,githubactions" alt="React, TypeScript, Vite, GitHub Actions" />

</div>

---

## ✨ Características

- 🌎 **Multilenguaje (ES · EN · PT)** con i18next; el idioma se refleja en la URL y en los metadatos SEO.
- 🌗 **Tema claro y oscuro** persistente, que también actualiza el favicon y el `theme-color`.
- 🎞️ **Animaciones** con Framer Motion, con soporte para movimiento reducido.
- 🔎 **SEO completo:** Open Graph, `sitemap.xml`, `robots.txt` y web manifest.
- ⚡ **Rendimiento:** imágenes responsive en WebP y fuente local optimizada.
- 🚀 **Deploy continuo** a GitHub Pages con GitHub Actions en cada push a `main`.

## 🧱 Stack

| Área | Tecnologías |
|---|---|
| UI | React, TypeScript, CSS por feature |
| Build | Vite |
| i18n | i18next, react-i18next |
| Animación | Framer Motion |
| Íconos | Lucide, Simple Icons |
| Calidad | ESLint, typescript-eslint, `tsc --noEmit` |
| CI/CD | GitHub Actions → GitHub Pages |

## 🗂️ Estructura

Organizado **por features**, separando composición, dominio y piezas compartidas:

```text
src/
├── app/          # Composición raíz, providers (tema, idioma, contenido) y hooks globales
├── features/     # Secciones autocontenidas: hero, experience, stack, principles, contact, navigation
├── i18n/         # Configuración, idiomas, traducciones y metadatos SEO por idioma
└── shared/       # Componentes, utilidades, motion y estilos reutilizables
```

## 🚀 Desarrollo local

```bash
npm install
npm run dev        # servidor de desarrollo
npm run lint       # ESLint
npm run typecheck  # verificación de tipos
npm run build      # build de producción
npm run preview    # previsualizar el build
```

## 📬 Contacto

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/nelson-daniel-dev/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ndsg24)
