## Coverfy Front End Developer Apply Job: Jorge G. Palacín

Esta idea surge tras ver la oferta de Front End Developer en Coverfy. En la que vamos a aplicar todos los requisitos que piden en la oferta de trabajo para replicar su home landing page a la perfección. Para ello utilizaremos el siguiente stack tecnológico:

- React (Next js)
- Sass modules
- Tailwind
- Prismic CMS

### React (Next js)

Utilizaremos este framework de React para aprovecharnos de su SSG (Static Site Generator), que nos permitira construir una web app en tiempo de compilación, lo cual es beneficioso en temas de SEO y perfomance. Aunque al ser parte de una entrega de CV no nos preocuparemos por eso.

### Sass Modules y Tailwind

Para generar los estilos de la web, utilizaremos Tailwind principalmente que se trata de un framework de clases utilitarias de CSS. Y para los estilos custom, utilizaré Sass modules para encapsular los estilos por componente.

### Prismic CMS

La adición de Prismic CMS al proyecto, simplemente la hago para que se vea la lectura del contenido servido por su GraphQL API. Aunque para una landing de una sola página no seria necesario seguramente.

### Typescript

La elección de Typescript como lenguaje simplemente es porque soy bastante fan del lenguaje tipado y te ayuda a cometer menos errores a la hora de programar.

### Linters

Como linter utilizare Prettier y ESLint para asegurar un codigo limpio y estructurado

```bash
npm run dev
# or
yarn dev
```
