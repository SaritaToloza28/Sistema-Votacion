# Sitio FE listo para despliegue

Este proyecto es un ejemplo para desplegar **gratis** en:
- **GitHub Pages** (repo público o privado con Pages)
- **Netlify** (Netlify Drop o repo conectado)

## construido con:

- HTML
- CSS
- JavaScript
- Bootstrap por CDN - Content Delivery Network (CDN) - Red de Distrubución de contenido
> no requiere Node.js, npm, compilación ni procesos de build*

## Estructura

├── index.html
├── app.js
├── styles.css
└── readme.md

# Descripción general

>La versión azul representa una primera versión funcional y estable del frontend del sistema SGCE-TIC, con una interfaz básica basada únicamente en Bootstrap.

Incluye elementos visuales asociados al caso de estudio, tales como:

- acceso al sistema
- panel principal
- módulos funcionales
- inventario de equipos
- auditoría
- formulario base de registro de equipos

Esta versión puede ser utilizada como referencia inicial dentro de una estrategia de despliegue  <Blue-Green Deployment, dejando la versión verde para una interfaz mejorada o con cambios visibles.>

# Despliegue en Netlify_____________________________________________________ 

>Despliegue manual sin Git

1. Ingresa a Netlify.
2. Inicia sesión / crea una cuenta.
3. Busca la opción Deploy manually o Netlify Drop.
4. Arrastra la carpeta (SIN COMPRIMIR) del proyecto o los archivos:
   - index.html
   - styles.css
   - app.js
5. Espera a que finalice la carga.

Netlify generará una URL pública similar a:
https://nombre-generado.netlify.app


# Relación con la estrategia Blue-Green 
**para este casos solo aplica FE*


> Versión Azul: 
interfaz base estable

>Versión Verde: 
interfaz mejorada, ajustada o extendida

>Para evidenciar el Blue-Green Deployment, se recomienda que la versión verde tenga cambios visibles, por ejemplo:

1.) nueva paleta de colores
2.) mejoras en dashboard
3.) filtros adicionales de búsqueda (más vistas - en este caso html)
4.) tabla de reportes mejorada
5.) tarjetas de métricas más completas
6.) más módulos o validaciones visuales


